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

cost2 = toaster + shirt + shirt;
cost2=cost2*tax;
// Calculates the area of a circle given the radius
let result = 0
function circleArea(radius){
  return (Math.pow(radius,2))*Math.PI;
}
// Generates a random password between 8 and 100 characters long
function password() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
  const length = Math.floor(Math.random() * (100 - 8 + 1)) + 8;
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    result += chars[randomIndex];
  }
  return result;
}
// It is important to use functions for better reactive response and less hard-coding. 
// They are especially useful because of how reusable they are. They can do repetitive tasks
// or specific task. Using them right can save you hundreds lines in the right scenario, especially
// for tasks that repeat a bunch of the same elements.
// Conditionals
let age = 20;
// If age is less than or equal to 18 or greater than or equal to 65
// Otherwise, print "You are not eligible for a discount."
// If and else statements are for true or false statements
if (age <= 18 || age >= 65) {
  console.log("You are elligible for a discount.");
} else {
  console.log("You are not elligible for a discount.");
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
