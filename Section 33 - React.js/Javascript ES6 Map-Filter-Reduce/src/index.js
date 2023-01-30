import emojipedia from "./emojipedia";

const numbers = [3, 56, 2, 48, 5];

// Map - Create a new array by doing something with each item in an array.
function double(x)
{
    return x * 2;
}

const newNumbers = numbers.map(double);
console.log(newNumbers);

// What it does
// const newNumbers = [];
//
// function double(x)
// {
//     return x * 2;
// }
//
// numbers.forEach(double);


// Filter - Create a new array by keeping the items that return true.
const filteredNumbers = numbers.filter((number) =>
{
    return number > 10;
});

console.log(filteredNumbers);

// What it does
// const filteredNumbers = [];
//
// numbers.forEach((number) =>
// {
//     if (number > 10)
//     {
//         filteredNumbers.push(number);
//     }
// });


// Reduce - Accumulate a value by doing something to each item in an array.
let numberSum = numbers.reduce((accumulator, currNumber) =>
{
    return accumulator + currNumber;
});

console.log(numberSum);

// What it does
// let numberSum = 0;
//
// numbers.forEach((currNumber) =>
// {
//     numberSum += currNumber;
// });


// Find - Find the first item that matches from an array.
let foundNumber = numbers.find((number) =>
{
    return number > 10;
});

console.log(foundNumber);


// FindIndex - Find the index of the first item that matches.
let foundIndex = numbers.findIndex((number) =>
{
    return number > 10;
});

console.log(foundIndex);

// Challenge
const newArray = emojipedia.map((item) => item.meaning.substring(0, 100));

console.log(newArray);
