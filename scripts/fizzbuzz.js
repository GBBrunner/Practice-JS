
// FizzBuzz Challenge
// If the number is divisible by 3, print "Fizz".
// If the number is divisible by 5, print "Buzz".
// If the number is divisible by both 3 and 5, print "FizzBuzz".
// Otherwise, print the number itself.
function fizzBuzz(n) {
  const fizzNum = Number(n);
  if (!Number.isFinite(fizzNum)) {
    return { ok: false, message: "Please enter a valid number" };
  }
  if (!(fizzNum > 0 && fizzNum <= 100)) {
    return { ok: false, message: `${fizzNum} is not between 0 and 100` };
  }
  let fizzBuzzOutput = "";
  if (fizzNum % 3 === 0) fizzBuzzOutput += "Fizz";
  if (fizzNum % 5 === 0) fizzBuzzOutput += "Buzz";
  if (fizzBuzzOutput === "") fizzBuzzOutput = String(fizzNum);
  return { ok: true, message: fizzBuzzOutput };
}
export { fizzBuzz };