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
