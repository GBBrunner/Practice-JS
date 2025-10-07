// Changes HTML content (kept as side effect on load)
document.getElementById('myDiv').innerHTML = '<span>Hello World! This <span style="color:red; font-weight:700;">was</span> changed by the JS!"</span>'

const subtractVar = (x,y) => x - y;
// In-Class Exercise 1: Helper Functions (pure functions)

function multiply(a, b) {
  return Number(a) * Number(b);
}

function divide(a, b) {
  return Number(a) / Number(b);
}

function welcomeMessage() {
  return "Welcome to the site!";
}

export { multiply, divide, welcomeMessage };