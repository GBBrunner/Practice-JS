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
export { multiply, divide, welcomeMessage};