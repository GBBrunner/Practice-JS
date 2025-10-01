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
export { checkDiscount };