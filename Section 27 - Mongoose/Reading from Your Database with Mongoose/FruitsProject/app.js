const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB");

// Creating a blueprint
const fruitSchema = new mongoose.Schema(
  {
    name: String,
    rating: Number,
    review: String
  });

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit(
  {
    name: "Apple",
    rating: 7,
    review: "Pretty solid as a fruit"
  });

const kiwi = new Fruit(
  {
    name: "Kiwi",
    rating: 5,
    review: "Expensive ash!"
  });

const orange = new Fruit(
  {
    name: "Orange",
    rating: 6,
    review: "Once a week's fruit"
  });

const banana = new Fruit(
  {
    name: "Banana",
    rating: 3,
    review: "Weird texture"
  });

// Fruit.insertMany([kiwi, orange, banana], (err) =>
//   {
//       if (err)
//       {
//         console.log(err);
//       }
//       else
//       {
//         console.log("Succesfully saved all the fruits to fruitsDB.");
//       }
//   });

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
      mongoose.connection.close();

      // Challenge
      fruits.forEach((fruit) =>
      {
        console.log(fruit.name);
      });

    }
  });


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

// person.save();
