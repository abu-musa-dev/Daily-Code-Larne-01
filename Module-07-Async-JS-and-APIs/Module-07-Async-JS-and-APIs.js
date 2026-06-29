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


let a = 10;
let b = 25;

if (a > b) {
  console.log(a);
} else {
  console.log(b);
}


let text = "JavaScript";

let reversed = text.split("").reverse().join("");

console.log(reversed);


let name = "OpenAI";

console.log(name.length);


let numbers = [10, 20, 30, 40];
let sum = 0;

for (let num of numbers) {
  sum += num;
}

console.log(sum);


let numbers = [5, 12, 8, 40, 18];

let max = Math.max(...numbers);

console.log(max);


let celsius = 30;

let fahrenheit = (celsius * 9) / 5 + 32;

console.log(fahrenheit);


let number = -5;

if (number > 0) {
  console.log("Positive");
} else if (number < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

let word = "madam";

let reversed = word.split("").reverse().join("");

if (word === reversed) {
  console.log("Palindrome");
} else {
  console.log("Not Palindrome");
}


let number = 15;

if (number % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

let a = 25;
let b = 40;

if (a > b) {
    console.log(a);
} else {
    console.log(b);
}

let text = "JavaScript";

let reversed = text.split("").reverse().join("");

console.log(reversed);