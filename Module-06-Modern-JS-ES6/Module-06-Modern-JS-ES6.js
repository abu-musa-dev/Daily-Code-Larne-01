function greetUser(name) {
  return `Hello, ${name}!`;
}

console.log(greetUser("Musa"));

const currentYear = new Date().getFullYear();
console.log(currentYear);

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);

console.log(doubled);

function isEven(number) {
  return number % 2 === 0;
}

console.log(isEven(8));

const users = ["Musa", "John", "Sarah"];

users.forEach(user => {
  console.log(user);
});

const appInfo = {
  name: "Demo App",
  version: "1.0.1"
};

console.log(appInfo);

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello"));


function isEven(num) {
  return num % 2 === 0;
}

console.log(isEven(10));
function findMax(arr) {
  return Math.max(...arr);
}

console.log(findMax([10, 20, 30, 40]));


function countVowels(str) {
  return str.match(/[aeiou]/gi)?.length || 0;
}

console.log(countVowels("JavaScript"));

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));


function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

console.log(sumArray([1, 2, 3, 4, 5]));


function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

console.log(isPalindrome("madam"));

const sum = (a, b) => a + b;
console.log(sum(5, 10)); // Output: 15

const isEven = (num) => num % 2 === 0;
console.log(isEven(8)); // Output: true

const findMax = (a, b, c) => Math.max(a, b, c);
console.log(findMax(12, 45, 23)); // Output: 45

const reverseString = (str) => str.split('').reverse().join('');
console.log(reverseString("hello")); // Output: "olleh"
const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
console.log(factorial(5)); // Output: 120
const filterEvens = (arr) => arr.filter(num => num % 2 === 0);
console.log(filterEvens([1, 2, 3, 4, 5, 6])); // Output: [2, 4, 6]