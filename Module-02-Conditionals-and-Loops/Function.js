// even-odd.js
function checkEvenOdd(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}
console.log(checkEvenOdd(7)); // Output: Odd

// git add .
// git commit -m "feat: add even-odd number checker"
// git push// even-odd.js
function checkEvenOdd(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}
console.log(checkEvenOdd(7)); // Output: Odd

git add .
git commit -m "feat: add array sum calculation function"
git push// reverse-string.js
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello")); // Output: olleh


git add .
git commit -m "feat: add string reversal function"
git push// factorial.js
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120