
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
  return Number(cost2.toFixed(2));
}
// Calculates the area of a circle given the radius
let result = 0
function circleArea(radius){
  return Math.pow(Number(radius),2)*Math.PI;
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
export { circleArea, password, calcTax };
// It is important to use functions for better reactive response and less hard-coding. 
// They are especially useful because of how reusable they are. They can do repetitive tasks
// or specific task. Using them right can save you hundreds lines in the right scenario, especially
// for tasks that repeat a bunch of the same elements.
// Conditionals
