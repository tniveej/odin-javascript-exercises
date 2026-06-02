console.log(23+97)
let add = 0
add = 1+2+3+4+5+6
console.log(add)
console.log((4+6+9)/77)

let a = 10
console.log(a)
a = 20
let b = 7*a
console.log(b)

const max = 57
const actual = max - 13
const percentage = actual/max
console.log(percentage)

const string = "The revolution will not be televised.";
console.log(string);
const badString = string;
console.log(badString);

const single = 'Single quotes';
const double = "Double quotes";
const backtick = `Backtick`;

console.log(single);
console.log(double);
console.log(backtick);

const name = "Chris";
const greeting = `Hello, ${name}`;
console.log(greeting); // "Hello, Chris"

const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined); // "Hello, how are you?"

const button = document.querySelector("button")

function greet() {
    const name = prompt("What is your name?");
    const greeting = document.querySelector("#greeting");
    greeting.textContent = `Hello ${name}, nice to see you!`;
}

button.addEventListener("click", greet);

// let condition = prompt("What is the official name of Javascript")

// if (condition == "ECMAScript") {
//     alert("right!")
// } else {
//     alert("You don't know EMACScript?")
// }

// let any_number = prompt("Give me a number")
// if (any_number > 0) {
//     alert(1)
// } else if ( any_number < 0 ) {
//     alert(-1)
// } else {
//     alert (0)
// }

// let result = (a + b < 4) ? 'Below' : 'Over';

// let message = (login == 'Employee') ? 'Hello' : 
// (login == 'Director') ? 'Greetings' : 
// (login == '') ? 'No Login' : '' ;

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(text.length);

function add7 (number) {
  return number + 7 
}

let capitalize = (string) => string.toLowerCase()[0].toUpperCase() + string.toLowerCase().slice(1);

function lastLetter(string) {
  return string.at(-1);
}

let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

for (let i = 1; i<=answer; i++) {
  let num = "";
  if (i%3 == 0){
    num = "Fizz";
  }
  if (i%5 == 0) {
    num = num + "Buzz"
  }
  (num === "") ? num = i: "";
  console.log(num)
}
