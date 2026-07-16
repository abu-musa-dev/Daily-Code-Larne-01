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
git add .
git commit -m "feat: add factorial calculation using recursion"
git push
// max-number.js
function findMax(arr) {
  return Math.max(...arr);
}
console.log(findMax([10, 5, 20, 8])); // Output: 20
git add .
git commit -m "feat: add function to find maximum number in array"
git push// palindrome.js
function isPalindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedStr = cleanStr.split("").reverse().join("");
  return cleanStr === reversedStr;
}
console.log(isPalindrome("madam")); // Output: true
// vowel-count.js
function countVowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}
console.log(countVowels("javascript")); // Output: 3
git add .
git commit -m "feat: add vowel count function"
git push// fizzbuzz.js
function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) return "FizzBuzz";
  if (num % 3 === 0) return "Fizz";
  if (num % 5 === 0) return "Buzz";
  return num.toString();
}
console.log(fizzBuzz(15)); // Output: FizzBuzz
git add .
git commit -m "feat: add simple fizzbuzz algorithm"
git push// celsius-to-fahrenheit.js
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
console.log(celsiusToFahrenheit(30)); // Output: 86