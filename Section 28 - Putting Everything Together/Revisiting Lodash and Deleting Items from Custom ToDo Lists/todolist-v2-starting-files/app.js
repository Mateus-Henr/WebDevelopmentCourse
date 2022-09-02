//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


// Db
mongoose.connect("mongodb://localhost:27017/todolistDB");

const itemsSchema = new mongoose.Schema(
{
  name: String
});

const Item = new mongoose.model("Item", itemsSchema);

// Docs
const item1 = new Item(
{
  name: "Welcome to your todolist!"
});

const item2 = new Item(
{
  name: "Hit the + button to add a new item."
});

const item3 = new Item(
{
  name: "<== Hit this to delete an item."
});

const defaultItems = [item1, item2, item3];

// OOP
const listSchema = {
  name: String,
  items: [itemsSchema]
};

const List = mongoose.model("List", listSchema);

app.get("/", (req, res) =>
{
  Item.find({}, (err, foundItems) =>
  {
    // Add items if not in the collection.
    if (foundItems.length === 0)
    {
      Item.insertMany(defaultItems, (err) =>
      {
        if (err)
        {
          console.log(err);
        }
        else
        {
          console.log("Sucessfully inserted items.");
        }
      });

      res.redirect("/");
    }
    else
    {
      res.render("list", {listTitle: "Today", newListItems: foundItems});
    }
  });
});

app.post("/", (req, res) =>
{
  const itemName = req.body.newItem;
  const listName = req.body.list;

  const newItem = new Item(
  {
    name: itemName
  });

  if (listName === "Today")
  {
    Item.create(newItem, (err) =>
    {
      if (err)
      {
        console.log(err);
      }
      else
      {
        res.redirect("/");
        console.log("Sucessfully inserted item.");
      }
    });
  }
  else
  {
    List.findOneAndUpdate(
      {
        name: listName
      },
      {
        $push:
        {
          items: newItem
        }
      },
    (err, results) =>
    {
      if (!err)
      {
        console.log("Sucessfully inserted item.");

        res.redirect(`/${listName}`);
      }
    });
  }
});

app.get("/:listName", (req,res) =>
{
  const listName = _.capitalize(req.params.listName);

  // Challenge
  List.findOne({name: listName}, (err, foundList) =>
  {
    if (!err)
    {
      if (!foundList)
      {
        const list = new List(
        {
          name: listName,
          items: defaultItems
        });

        List.create(list, (err) =>
        {
          if (err)
          {
            console.log(err);
          }
          else
          {
            console.log("Sucessfully inserted list.");
          }
        });

        res.redirect(`/${listName}`);
      }
      else
      {
        res.render("list", {listTitle: foundList.name, newListItems: foundList.items});
      }
    }
  });
});

app.post("/delete", (req, res) =>
{
  const checkedItemID = req.body.checkbox;
  const listName = req.body.listName;

  if (listName === "Today")
  {
    Item.findByIdAndRemove(checkedItemID, (err) =>
    {
      if (err)
      {
        console.log(err);
      }
      else
      {
        res.redirect("/");
        console.log("Sucessfully deleted item.");
      }
    });
  }
  else
  {
    List.findOneAndUpdate(
      {
        name: listName
      },
      {
        $pull:
        {
          items:
          {
            _id: checkedItemID
          }
        }
      },
    (err, results) =>
    {
      if (!err)
      {
        console.log("Sucessfully deleted item.");

        res.redirect(`/${listName}`);
      }
    });
  }
});

app.get("/about", (req, res) =>
{
  res.render("about");
});

app.listen(3000, () =>
{
  console.log("Server started on port 3000");
});
