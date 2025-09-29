import {pokedex} from './pokémonAPI.js';
// Changes HTML content
document.getElementById('myDiv').innerHTML = '<span>Hello World! This <span style="color:red; font-weight:700;">was</span> changed by the JS!"</span>'

const subtractVar = (x,y) => x - y
// In-Class Exercise 1: Helper Functions 
let numberA = 0;
let numberB = 0;
// Multiplies two numbers and alerts the result
function multiply() {
  let numberA = document.getElementById('inputValueA').value;
  let numberB = document.getElementById('inputValueB').value;
  alert(numberA + " x " + numberB + " = " + numberA*numberB);
}
function divide() {
  let numberA = document.getElementById('inputValueA').value;
  let numberB = document.getElementById('inputValueB').value;
  alert(numberA + " / " + numberB + " = " + numberA/numberB);
}
function welcomeMessage() {
  alert("Welcome to the site!");
}
// In-Class Exercise 2: Math Functions 
// Calculates the total cost of a meal including tax and tip
let cost = 0;
let soup = 10;
let burger = 8;
let ice_cream =5;

cost = soup + burger + burger + burger + ice_cream;
cost = cost*2;

let toaster = 18.50
let shirt = 7.5
let tax=1.07825

let cost2 = toaster + shirt + shirt;
cost2=cost2*tax;
function calcTax(){
  alert("The total cost with tax is: $" + cost2.toFixed(2) + ". Check JS for items and prices");
}
// Calculates the area of a circle given the radius
let result = 0
function circleArea(){
  alert ("The Area is: " + (Math.pow(document.getElementById('inputRadius').value,2)*Math.PI));
}
// Generates a random password between 8 and 100 characters long
// Made with Copilot
function password() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
  const length = Math.floor(Math.random() * (100 - 8 + 1)) + 8;
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    result += chars[randomIndex];
  }
  alert("Your new generated password is: " + result);
}
// It is important to use functions for better reactive response and less hard-coding. 
// They are especially useful because of how reusable they are. They can do repetitive tasks
// or specific task. Using them right can save you hundreds lines in the right scenario, especially
// for tasks that repeat a bunch of the same elements.
// Conditionals

// In-Class Exercise 3: Movie Ticket Eligibility 
function checkDiscount(){
let age = 20;
let isStudent = true;
// If age is less than or equal to 18 or greater than or equal to 65
// Otherwise, print "You are not eligible for a discount."
// If and else statements are for true or false statements
if (age <= 18 || age >= 65 || isStudent==true) {
  console.log("You are elligible for a discount.");
  alert("You are elligible for a discount.");
} else {
  console.log("You are not elligible for a discount, Regular ticket only.");
  alert("You are not elligible for a discount, Regular ticket only.");
}
}

function getDashboardMessage(role) {
  let message = "Role not recognized.";
  // Switch statement is used for multiple conditions
  switch (role) {
    case "admin":
      message = "Welcome Admin! You have full access.";
      // Break kills the switch statement and stops it from running the next cases
      // This is for a more efficient code
      break; 
    
    case "user":
      message = "Welcome User! You have limited access.";
      break;
    default:
      message = "Welcome Guest! Please log in.";
  }
  return message;
}
function getUsername(user){
  let name = user;
}

// FizzBuzz Challenge
// If the number is divisible by 3, print "Fizz".
// If the number is divisible by 5, print "Buzz".
// If the number is divisible by both 3 and 5, print "FizzBuzz".
// Otherwise, print the number itself.
function fizzBuzz() {
  // Set the value of fizzNum to the given input value
  const fizzNum = document.getElementById('fizzBuzzInput').value;
  // Check if the input is a valid number
  if (fizzNum === "" || isNaN(fizzNum)) {
    alert("Please enter a valid number");
    return;
  }
  // Initialize an empty string to store the FizzBuzz result
  let fizzBuzzOutput = "";
  // Checks if the number is between 0 and 100
  if (fizzNum > 0 && fizzNum <= 100) {
    // If the number is divisible by 3, append "Fizz" to the output string
    // If the number is divisible by 5, append "Buzz" to the output string
    // If the output string is still empty, set it to the number itself
    if (fizzNum % 3 === 0) {
      fizzBuzzOutput += "Fizz";
    }
    if (fizzNum % 5 === 0) {
      fizzBuzzOutput += "Buzz";
    }
    if (fizzBuzzOutput === "") {
      fizzBuzzOutput = fizzNum;
    }
    // Alert the final FizzBuzz result
    alert(fizzBuzzOutput);
  } else {
    // Alert if the number is not between 0 and 100
    alert(`${fizzNum} is not between 0 and 100`);
  }
}

// //Arrays and Loops
// const array = [1, 2, 3, 4, 5];
// const arraySquared = array.map(x => x ** 2);
// const arraySquaredAlt = [];
// array.forEach(num => arraySquaredAlt.push(num ** 2));
//   // const arraySquaredAlt = [];
//   // for (let i = 0; i < array.length; i++) {
//   //   arraySquaredAlt.push(array[i] ** 2);
//   // }

// console.log(arraySquared); // Output: [1, 4, 9, 16, 25]
// console.log(arraySquaredAlt); // Output: [1, 4, 9, 16, 25]


// Palindrome Checker

function isPalindrome(str) {
  const universal = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return universal === universal.split('').reverse().join('');
}
// Using a loop, write a function that adds all the values in an array
const values = [121, -111, 123, 23, 10, -101, 30];
function addArrayValues(){
  let sum = 0;
  for (let i = 0; i < values.length; i++) {
    sum += values[i];
  }
  return sum;
}
// array.reduce() method executes a reducer function on each element of the array, resulting in a single output value.
// array.forEach() method executes a provided function once for each array element.
function addArrayValuesAlt(){
  return values.reduce((acc, val) => acc + val, 0);
}
function addArrayValuesAlt2(){
  let sum = 0;
  values.forEach(index => {
    sum += values[index];
  });
  return sum;
}
// Objects
const car = {
  make: 'Toyota',
  model: 'Camry',
  year: 2020,
  color: 'blue',
  mileage: 15000,
  engine:{
    cylinders: 4,
  },
  getCylinders: function() {
    return this.engine.cylinders;
  }
};
// Accessing object properties
console.log(car.make); // Output: Toyota
car.getCylinders(); // Output: 4
// Exercise 5: Pokemon API imported from pokémonAPI.js
pokedex();