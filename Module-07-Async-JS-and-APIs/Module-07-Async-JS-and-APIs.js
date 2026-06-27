let num = 17;

if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}


let a = 10;
let b = 25;

if (a > b) {
  console.log(a);
} else {
  console.log(b);
}


let text = "JavaScript";

let reverse = text.split("").reverse().join("");

console.log(reverse);


let text = "Programming";
let count = 0;

for (let char of text.toLowerCase()) {
  if ("aeiou".includes(char)) {
    count++;
  }
}

console.log(count);


let numbers = [1, 2, 2, 3, 4, 4, 5];

let unique = [...new Set(numbers)];

console.log(unique);

let word = "madam";

let reverse = word.split("").reverse().join("");

if (word === reverse) {
  console.log("Palindrome");
} else {
  console.log("Not Palindrome");
}

let numbers = [10, 20, 30, 40];

let sum = 0;

for (let num of numbers) {
  sum += num;
}

console.log(sum);


let number = 15;

if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}