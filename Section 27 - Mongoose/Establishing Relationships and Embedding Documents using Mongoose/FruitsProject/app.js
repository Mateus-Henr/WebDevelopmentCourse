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

// Update the schema when you want to add a new field.
const personSchema = new mongoose.Schema(
  {
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
  });

// const pineapple = new Fruit(
//   {
//     name: "Pineapple",
//     score: 9,
//     review: "Great fruit."
//   });
//
// pineapple.save();

// Challenge
const apple = new Fruit(
  {
    name: "Apple",
    score: 3,
    review: "Awesome fruit."
  });

apple.save();

const Person = mongoose.model("Person", personSchema);

// const person = new Person(
//   {
//     name: "Amy",
//     age: 12,
//     favouriteFruit: pineapple // Embedded document - Same ID as the oen created.
//   });

const person = new Person(
{
    name: "John",
    age: 27,
    favouriteFruit: apple // Embedded document - Same ID as the oen created.
  });

// Update version of the challenge
// Person.updateOne(
//   {
//     name: "John"
//   },
//   {
//     favouriteFruit: apple
//   },
//   (err) =>
//   {
//     if (err)
//     {
//       console.log(err);
//     }
//     else
//     {
//       console.log("Sucessfully updated the document.");
//     }
//   });

  // // Challenge
  // Person.deleteMany(
  //   {
  //     name: "John"
  //   },
  //   (err) =>
  //   {
  //     if (err)
  //     {
  //       console.log(err);
  //     }
  //     else
  //     {
  //       console.log("Sucessfully deleted the document.");
  //     }
  //   });

person.save();
