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
const celsiusToFahrenheit = (c) => (c * 9) / 5 + 32;
console.log(celsiusToFahrenheit(30)); // Output: 86

const countVowels = (str) => (str.match(/[aeiou]/gi) || []).length;
console.log(countVowels("javascript")); // Output: 3

const isPalindrome = (str) => str === str.split('').reverse().join('');
console.log(isPalindrome("racecar")); // Output: true

const findLargest = (arr) => Math.max(...arr);
console.log(findLargest([10, 5, 20, 15])); // Output: 20

let a = 5;
let b = 10;
console.log(a + b);

let num = 8;

if(num % 2 === 0){
  console.log("Even");
}else{
  console.log("Odd");
}

let a = 10, b = 20;

console.log(a > b ? a : b);

let str = "hello";
console.log(str.split("").reverse().join(""));


let text = "javascript";
console.log(text.length);

let arr = [1,2,3,4];
let sum = 0;

for(let i=0;i<arr.length;i++){
  sum += arr[i];
}

console.log(sum);


let arr = [10,50,30,5];
console.log(Math.max(...arr));


let num = -10;

console.log(num >= 0 ? "Positive" : "Negative");
for(let i=1;i<=5;i++){
  console.log(i);
}


let text = "hello world";
console.log(text.toUpperCase());

// Task Manager প্রজেক্টের প্রাথমিক সেটিংস
const tasks = [];

const tasks = [];

function addTask(title) {
    const newTask = { id: tasks.length + 1, title: title, completed: false };
    tasks.push(newTask);
    return newTask;
}
const tasks = [];

function addTask(title) {
    // BUG FIX: খালি বা স্পেস দেওয়া টাস্ক ইনপুট নেওয়া যাবে না
    if (!title || title.trim() === "") {
        return "Error: Task title cannot be empty";
    }
    const newTask = { id: tasks.length + 1, title: title.trim(), completed: false };
    tasks.push(newTask);
    return newTask;
}

const tasks = [];
let nextId = 1; // REFACTOR: আইডি কাউন্টার আলাদা করা হলো

function addTask(title) {
    if (!title || title.trim() === "") {
        return "Error: Task title cannot be empty";
    }
    const newTask = { id: nextId++, title: title.trim(), completed: false };
    tasks.push(newTask);
    return newTask;
}

const tasks = [];
let nextId = 1;

function addTask(title) {
    try {
        if (typeof title !== "string") {
            throw new Error("Input must be a string");
        }
        if (!title || title.trim() === "") {
            return "Error: Task title cannot be empty";
        }
        const newTask = { id: nextId++, title: title.trim(), completed: false };
        tasks.push(newTask);
        return newTask;
    } catch (error) {
        return `Error: ${error.message}`; // ERROR HANDLING
    }
}

// ... আগের কোড ...

// TEST CASES: কোড টেস্ট করা হচ্ছে
console.log(addTask("Learn JavaScript")); // সফল হওয়া উচিত
console.log(addTask("   ")); // এরর মেসেজ আসা উচিত
console.log(addTask(12345)); // এরর হ্যান্ডলার ক্যাচ করা উচিত
const tasks = [];
let nextId = 1;

function addTask(title) {
    try {
        if (typeof title !== "string") {
            throw new Error("Input must be a string");
        }
        if (!title || title.trim() === "") {
            return "Error: Task title cannot be empty";
        }
        const newTask = { id: nextId++, title: title.trim(), completed: false };
        tasks.push(newTask);
        return newTask;
    } catch (error) {
        return `Error: ${error.message}`;
    }
}
// CLEANUP: অতিরিক্ত সব টেস্ট কনসোল লগ ডিলিট করা হলো
// CHORE: প্রাথমিক কাজের সুবিধার জন্য কিছু মক বা ডিফল্ট ডাটা যোগ করা হলো
const tasks = [
    { id: 100, title: "Mock task for testing", completed: false }
];
let nextId = 101; 

// ... বাকি কোড ...const tasksList = []; // RENAME: tasks থেকে tasksList করা হলো
let taskIdCounter = 1; // RENAME: nextId থেকে taskIdCounter করা হলো

function addTask(title) {
    try {
        if (typeof title !== "string") {
            throw new Error("Input must be a string");
        }
        if (!title || title.trim() === "") {
            return "Error: Task title cannot be empty";
        }
        const newTask = { id: taskIdCounter++, title: title.trim(), completed: false };
        tasksList.push(newTask);
        return newTask;
    } catch (error) {
        return `Error: ${error.message}`;
    }
}