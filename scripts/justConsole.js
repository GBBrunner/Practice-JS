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