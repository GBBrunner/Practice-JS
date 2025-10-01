
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
export { fizzBuzz };