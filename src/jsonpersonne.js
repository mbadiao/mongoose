const User = require("./model");
const userData = [
  {
    name: "John",
    age: 25,
    favoriteFoods: ["Pizza", "burger", "Sushi"],
  },
  {
    name: "Alice",
    age: 32,
    favoriteFoods: ["Sushi", "Salad", "Steak"],
  },
  {
    name: "Michael",
    age: 45,
    favoriteFoods: ["Burger", "Pizza", "Fish"],
  },
  {
    name: "Emma",
    age: 19,
    favoriteFoods: ["Ice Cream", "Tacos", "Pasta"],
  },
  {
    name: "David",
    age: 37,
    favoriteFoods: ["Pasta", "Ice Cream", "Pizza"],
  },
  {
    name: "Sophia",
    age: 28,
    favoriteFoods: ["Steak", "Burger", "Fish"],
  },
  {
    name: "Daniel",
    age: 50,
    favoriteFoods: ["Fish", "Salad", "Sushi"],
  },
  {
    name: "Olivia",
    age: 22,
    favoriteFoods: ["Tacos", "Ice Cream", "Pizza"],
  },
  {
    name: "Matthew",
    age: 31,
    favoriteFoods: ["Chicken", "Burger", "Fish"],
  },
  {
    name: "Ava",
    age: 40,
    favoriteFoods: ["Salad", "Steak", "Sushi"],
  },
  {
    name: "Andrew",
    age: 29,
    favoriteFoods: ["Sushi", "Pizza", "Burger"],
  },
  {
    name: "Isabella",
    age: 36,
    favoriteFoods: ["Burger", "Fish", "Steak"],
  },
  {
    name: "Joseph",
    age: 27,
    favoriteFoods: ["Pizza", "Tacos", "Ice Cream"],
  },
  {
    name: "Mia",
    age: 33,
    favoriteFoods: ["Steak", "Salad", "Fish"],
  },
  {
    name: "William",
    age: 48,
    favoriteFoods: ["Fish", "Sushi", "Salad"],
  },
  {
    name: "Samantha",
    age: 21,
    favoriteFoods: ["Tacos", "Pizza", "Ice Cream"],
  },
  {
    name: "Benjamin",
    age: 30,
    favoriteFoods: ["Chicken", "Fish", "Burger"],
  },
  {
    name: "Charlotte",
    age: 42,
    favoriteFoods: ["Salad", "Sushi", "Steak"],
  },
  {
    name: "Ethan",
    age: 26,
    favoriteFoods: ["Pasta", "Burger", "Fish"],
  },
  {
    name: "Emily",
    age: 35,
    favoriteFoods: ["Ice Cream", "Pizza", "Tacos"],
  },
];
const AllPersonnes = userData.map(userData => new User(userData));

module.exports = AllPersonnes