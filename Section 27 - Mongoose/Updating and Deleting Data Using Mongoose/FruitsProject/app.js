const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB");

// Creating a blueprint (adding some validation)
const fruitSchema = new mongoose.Schema(
  {
    name:
    {
      type: String,
      required: [true, "Please check your data entry, no name specified!"]
    },
    rating:
    {
      type: Number,
      min: 1,
      max: 10
    },
    review: String
  });

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit(
  {
    rating: 70,
    review: "Pretty solid as a fruit"
  });

// fruit.save();

// Getting all the fruits
Fruit.find((err, fruits) =>
  {
    if (err)
    {
      console.log(err);
    }
    else
    {
      // Always close the connection.
      // mongoose.connection.close();

      fruits.forEach((fruit) =>
      {
        console.log(fruit.name);
      });

    }
  });


// Updating
Fruit.updateOne(
  {
      _id: "630caaff8553b404e8e41b9a"
  },
  {
    name: "Peach"
  },
  (err) =>
  {
    if (err)
    {
      console.log(err);
    }
    else
    {
      console.log("Sucessfully updated the document.");
    }
  });


// Deleting
Fruit.deleteOne(
  {
    name: "Peach"
  },
  (err) =>
  {
    if (err)
    {
      console.log(err);
    }
    else
    {
      console.log("Sucessfully deleted the document.");
    }
  }
);

const personSchema = new mongoose.Schema(
  {
    name: String,
    age: Number
  });

const Person = mongoose.model("Person", personSchema);

const person = new Person(
  {
    name: "John",
    age: 27
  });

  // Challenge
  Person.deleteMany(
    {
      name: "John"
    },
    (err) =>
    {
      if (err)
      {
        console.log(err);
      }
      else
      {
        console.log("Sucessfully deleted the document.");
      }
    });

// person.save();
