Javascript Fundamentals.js


// Guide to JavaScript Hoisting
// Hoisted
name = 'Kristine';
console.log(name); // 'Kristine'
var name;

// Initializers not hoisted
console.log(age); // undefined
var age = 33;



// Comprehensive list of Javascript Data Types
// Boolean
var truthy = true;
var notTruthy = false;

// Null
var nully = null;

// Undefined
var notDefined;

// Number
var age = 12;

// String
var name = "Kristine";
var nameTwo = 'Jordan';

// Symbol
var mySym = Symbol('foo');

console.log(mySym);



// Guide to JavaScript Objects
user.grades.math
90
user.grades.science
80
console.log(user.grades);
VM264:1 {math: 90, science: 80, languageArts: 100}
undefined
console.log(user.grades.langu);
VM267:1 undefined
undefined
console.log(user.grades.languageArts);
VM270:1 100
undefined
user.grades.coding = 99;
99
console.log(user);
VM284:1 {name: "Kristine", age: 12, city: "Scottsdale", grades: {…}}
undefined
console.log(user.grades.coding);
VM294:1 99
undefined
user.age = 13;
13
console.log(user.age);
VM308:1 13


var user = {
  name: 'Kristine',
  age: 12,
  city: 'Scottsdale',
  grades: {
    math: 90,
    science: 80,
    languageArts: 100
  }
}
user.age = 13;
user.grades.coding = 95;

// How to Check for Data Types in JavaScript
typeof 12;
// "number"

typeof 'Astros';
// "string"

typeof true;
// "boolean"

typeof { name: "Kristine" };
// "object"

var age;
// undefined

typeof age;
// "undefined"

age = null;
// null

typeof age;
// "object"

// How to Perform Type Casting in JavaScript

"100" + 42; // "10042"
42 + "100"; // "42100"
"100" - 42; // 58
100 + null; // 100

var ageOne = 12;
String(ageOne); // '12'
ageOne.toString(); // '12'

var ageTwo = '33';
Number(ageTwo); // 33
parseInt(ageTwo); // 33
parseFloat(ageTwo); // 33
+ ageTwo; // 33
parseInt('5555555555 is my phone number'); // 5555555555
parseInt('foo 5555555555 is my phone number'); // NaN
Number("100") + 42; // 142

Number(true); // 1
Number(false); // 0



// Working with String Functions - Part 1

var str = 'The quick brown fox jumped over the lazy dog';

// str.length(); // VM2349:1 Uncaught TypeError: str.length is not a function

str.length; // 44

str.charAt(2); // "e"

str.charAt(200); // ""

str.concat(' again and again'); // "The quick brown fox jumped over the lazy dog again and again"

str; // "The quick brown fox jumped over the lazy dog"

str.includes('quick'); // true

str.endsWith('dog'); // true

str.startsWith('Foo'); // false


// Working with String Functions - Part 2

str.repeat(5); // "The quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dog"

str.match(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/) // null

'555-555-5555'.match(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/) // (4) ["555-555-5555", "555-", undefined, "555-", index: 0, input: "555-555-5555"]0: "555-555-5555"1: "555-"2: undefined3: "555-"index: 0input: "555-555-5555"length: 4__proto__: Array(0)

str.replace('fox', 'wolf'); // "The quick brown wolf jumped over the lazy dog"

'555-555-5555 is my phone number'.search(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/) // 0

'Hi, 555-555-5555 is my phone number'.search(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/) // 4

str.indexOf('jumped'); // 20

str.lastIndexOf('jumped'); // 20

var str2 = str.concat('again and again');

str2.indexOf('again'); // 44
str2.lastIndexOf('again'); // 54



// Working with String Functions - Part 3

str.slice(4, 10); // "quick "

str.slice(-8); // "lazy dog"

str.slice(10); // "brown fox jumped over the lazy dog"

str.toUpperCase(); // "THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG"

str.toLowerCase(); // "the quick brown fox jumped over the lazy dog"

var messyString = '    Hi there    ';

messyString.trim(); // "Hi there"





// JavaScript Arithmetic Operators

2 + 2; // 4

2 - 2; // 0

2 / 2; // 1

2 * 10; // 20

5 % 2; // 1

10 % 2; // 0

8 % 2; // 0

2 ** 10; // 1024

var num = 2;

num++; // 2

++num; // 4

num; // 4

num--; // 4

num; // 3

--num; // 2

2++; // VM3506:1 Uncaught ReferenceError: Invalid left-hand side expression in postfix operation

++2; // VM3508:1 Uncaught ReferenceError: Invalid left-hand side expression in prefix operation

var someNum = 10;

var someOtherNum = -someNum;

someOtherNum; // -10

var strNum = '100';

var convertedNum = + strNum;

convertedNum; // 100



// Guide to Compound Assignment Operators in JavaScript

var name = 'Tiffany';

var sum = 0;

var gradeOne = 100;

var gradeTwo = 80;

sum += gradeOne; // 100

sum; // 100

sum += gradeTwo; // 180

sum *= gradeTwo; // 14400


// Order of Operations in JavaScript


/* Order of Operations
   PEMDAS -> PEDMAS
   Please Excuse My Dear Aunt Sally
   Paranthesis
   Exponents
   Multiplication 5 / 5 * 4
   Division
   Addition
   Subtraction
*/

var num = 5 + (5 * 10) / 6**2 - 1;
var num = 5 / 5 * 4;




// Basic Syntax for Using Conditionals in JavaScript

var age = 10;
var ageTwo = '12';

if (age === ageTwo) {
  console.log('They are equal');
}

if (age !== ageTwo) {
  console.log('Not equal');
}

if (age >= 25) {
  console.log('Old enough to rent a car');
}

if (age <= 10) {
  console.log('You can eat from the kid menu');


// Guide to If/Else Conditionals in JavaScript

var age = 30;

if (age <= 10) {
  console.log('You can eat from the kid menu');
} else {
  console.log('Adult menu time for you');
}



// Compound Conditionals in JavaScript

if (age <= 10) {
  console.log("You can eat from the kid's menu");
  console.log("You are not old enough to drive");
  console.log("You are not old enough to rent a car");
} else if (age >= 16 && age < 25) {
  console.log("You can not eat from the kid's menu");
  console.log("You are old enough to drive");
  console.log("You are not old enough to rent a car");
} else if (age >= 25) {
  console.log("You can not eat from the kid's menu");
  console.log("You are old enough to drive");
  console.log("You are old enough to rent a car");
}




// How to Build a Switch Statement in JavaScript to Check for Data Types

var dataPoint = {};

switch (typeof dataPoint) {
  case "string":
    console.log("It's a string");
    break;
  case "number":
    console.log("It's a number");
    break;
  case "boolean":
    console.log("It's a boolean");
    break;
  default:
    console.log('No matches');
}



// Basic Syntax for Building Functions in JavaScript

function hiThere () {
    console.log('Hi there');
}

hiThere(); // Hi there

function hiThereTwo() {
    return 'Hi there again';
}

hiThereTwo(); // "Hi there again"

var storedText = hiThere(); // Hi there

storedText; // undefined

var storedTextTwo = hiThereTwo();

storedTextTwo; // "Hi there again"




// How Variable Scope Works in JavaScript

var userObj = {
  email: 'sample@example.com',
  fullName: 'Kristine Hudgens'
}

function dashboardGreeting() {
  var userObj = {
    email: 'sample2@example.com',
    fullName: 'Jordan Hudgens'
  }
  console.log("Hi there, ".concat(userObj.fullName));
}

dashboardGreeting();
console.log(userObj.fullName);



// Differences Between Function Expressions and Function Declarations

// function declaration
function greeting(){
return "Hi there!";
}

// FUNCTION EXPRESSOIN (ALSO KNOWN AS ANONYMOUS FUNCTIONS)
// a function expression is a function that is stored inside of a variable.

// That's where the anonymous part comes in. And here we can just return say Hi there again and this is going to perform pretty much the same way in most cases.

var greeting = function () {
return 'Hi there again';
};

// You're also supposed to have a semi-colon at the end of a function expression

// f you have something that you need to be able to move around or a function you need to be able to create at any given point. That is what function expressions are for, where as a declaration like this is only when you have it outside of that block. 


var greeting = function () {
 return "Hi there!";
};

var age = 4;

if (age <= 10) {
  var buildMenu = function () {
    return "Kids' Menu";
  };

  function wrongMenuBuilder () {
    return "Wrong Kids' Menu";
  }

  console.log(buildMenu());
  console.log(wrongMenuBuilder());
}



// How to Work with Function Arguments in JavaScript
// This guide describes how to utilize function arguments/parameters in javaScript. Additionally, we'll examine how to define default values for function arguments.


function fullName(firstName, LastName) {
return lastName.toUpperCase() + ", " + firstName.toUpperCase();
}

function sample(arg1, arg2) {
console.log(arg1);
console.log(arg2);
}



// Im going to cover one other task here. Which is how to be able to build something and to have default values...have say two arguments inside of it that need to be supplied and then one of them you want to make optional.


// I want to have something where English is the default language but we can override it if we want to.

// The way you can override that here is, I can say language and then set this equal to so we can perform assignment here and we can say language or English.


function fullName(firstName, lastName, language) {
    var language = language || 'English'; 
    return lastName.toUpperCase() + ", " + firstName.toUpperCase() + " - " + language;
}

console.log(fullName('Jordan', 'Hudgens', 'Spanish'));



// Function Arguments: Reference vs Value
// if we pass in an object you may be surprised to learn that it behaves much differently than if you passed in a variable. And the reason for this is because we have the concept of reference vs value

// n Javascript functions you are going to pass in objects and those are going to get treated by reference which mean they're not actually grabbing the values they're grabbing a reference to the original object

// When we pass an object in as an argument it is going to be treated as a reference which means that the function is going to go and look at the reference to the object.

// So in this case when we called some user it got redirected up to someUser and it said Ok someUser has a name attribute. And now we're going to change it. 


var someUser = {
    name: 'Jordan'
}

function nameFormatter (user) {
    return user.name = 'Oops';
}

nameFormatter(someUser); // "Oops"

someUser; // Object {name: "Oops"}

var someName = 'Tiffany';

function someOtherNameFormatter(name) {
    return name = 'Oops';
}

someOtherNameFormatter(someName); // "Oops"

someName; // "Tiffany"



// YOU CAN AVOID THE CHANGE TO THE OBJECT BY PASSING IN THE DOT NOTATION OF THE ITEM YOU WANT REFERENCED EXACTLY. 
function nameFormatter (userName) {
    return userName = 'Oops';
}

someUser.name; // "Oops"

someUser.name = 'Kristine';

nameFormatter(someUser.name); // "Oops"

someUser.name; // "Kristine"





// Introduction to JavaScript Closures
// being able to add dynamic value inside of a function. and then call it with the dot notation because it returns an object. 


function battingAverage () {
  var hits = 100;
  var atBats = 300;

  return {
    getCurrentAverage: function () {
      return (hits/atBats);
    },
    updateHitsAndAtBats: function (hit, atBat) {
      hits += hit;
      atBats += atBat;
    }
  }
}

var altuve = battingAverage();
console.log(altuve.getCurrentAverage());
altuve.updateHitsAndAtBats(0, 20);

console.log(altuve.getCurrentAverage());

// Introduction to HTML Scripting with Built in JavaScript Functions
document.getElementsByClassName('b1')[0].innerHTML = 'Hi there';

// Essentially was a briefing on what type of things you can do in the browser to have dynamic content and change things in the browser with JS. Since it is a client side browser. 



// Introduction to the 'this' Keyword in JavaScript

// SINGLETON METHOD- easy to understand. 
$('.btn-guide').click(function(event) {
    event.preventDefault();
    console.log($(this));
});



// How to Use the 'this' Keyword in JavaScript Programs

// one of the most common ways to use it which is inside of objects

var guide = {
  title: 'Guide to Programming',
  content: 'Content goes here...',
  visibleToUser: function (viewingUserRole) {
    if (viewingUserRole === 'paid') {
      return true;
    }
  },
  renderContent: function(userRole) {
    if (this.visibleToUser(userRole)) {
      console.log(this.title + " - " + this.content);
    } else {
      this.content = '';
      console.log(this.title + " - " + this.content);
    }
  }
}

user = { role: 'paid' };
guide.renderContent(user.role);



// How to Create Arrays in JavaScript
// This introductory lesson walks through the various ways that you can create arrays in JavaScript. Additionally, we examine how we can query elements in arrays using the bracket syntax.

// Now there are a couple ways to do this. Say that you want an array with three elements inside of it, we can pass it in just like this.

var generatedArray = new Array(3);

var generatedArray = new Array('Altuve', 'Correa', 'Spring');
// I don't use that way too often and the only time I'll usually use it is when I want to create an array and I don't know what the values are going to be, but I happen to know how many elements are going to be inside and then I use exactly what I did up here.

// array literal syntax
var literalArray = [1, 2, 3];

literalArray; // (3) [1, 2, 3]



var mixedArray = ['Hi', 1, ['a', 'b', 'c'], { name: 'Kristine' }, function greeting() { console.log('hey there');}]


// Now let's talk about how we can actually get things out of the arrays. So let's start with our most basic one.

var playerName = literalArray[1];

playerName; // "Correa"


mixedArray[4]; // function greeting( ) { console.log('hey there');}

mixedArray[4](); // hey there



// Guide to Adding and Removing Array Elements in JavaScript
// push, pop, shift, and unshift functions


var arr = ['Altuve', 'Bregman', 'Correa', 'Springer'];

arr.pop(); // "Springer"

arr; // ['Altuve', 'Bregman', 'Correa']

arr.push('Bagwell'); // 4

arr; // ['Altuve', 'Bregman', 'Correa', 'Bagwell']

arr.shift(); // ['Bregman', 'Correa', 'Bagwell']

arr.unshift('Kyle'); // 4

arr; // ['Kyle', 'Bregman', 'Correa', 'Bagwell']



// How to Use the Splice Function in JavaScript to Remove Specific Array Elements

arr; // ["Altuve", "Bregman", "Springer"]

arr.splice(1, 2); // ["Bregman", "Springer"]

arr; // ["Altuve"]
.splice(index, # of items to remove in a row)

var arr = ['Altuve', 'Bregman', 'Correa', 'Springer'];

var foundElement = arr.indexOf('Correa');

foundElement; // 2

arr.splice(foundElement, 1); // ["Correa"]

arr; // ["Altuve", "Bregman", "Springer"]

arr.splice(1, 2); // ["Bregman", "Springer"]

arr; // ["Altuve"]


// Guide to For Loops in JavaScript-For loops provided by JavaScript: traditional for loops, the for in loop, and the functional forEach loop.

// most common ways to use loops in javascript development is when you are looping through collections of data. That's where our first example is going to take us. I created a player's array right here and it's just an array of strings.
var players = [
  'Altuve',
  'Bregman',
  'Correa',
  'Springer'
];
//for loop, have to set up incrementer, condition for stopping and increment it)
for (var i = 0; i < players.length; i++) {
  console.log(players[i]);
}


the for in loop.

var players = [
  'Altuve',
  'Bregman',
  'Correa',
  'Springer'
];


for (player in players) {
console.log(player);
console.log(players[player]);
}


For Each loop.

players.forEach(function(element) {
console.log(element);
});



var players = [
  'Altuve',
  'Bregman',
  'Correa',
  'Springer'
];

for (player in players) {
  console.log(players[player]);
}

for (var i = 0; i < players.length; i++) {
  console.log(players[i]);
}

players.forEach(function(element) {
  console.log(element);
});






// How to Loop Through a JavaScript Object

var student = {
  name: 'Kristine',
  age: 12,
  city: 'Scottsdale'
};

for (var key in student) {
  console.log(key + " => " + student[key]);
}

OR 


var student = {
  name: 'Kristine',
  age: 12,
  city: 'Scottsdale'
};

for (var key in student) {
  console.log(key + " => " + student.key);
}

// name => undefined
// VM2501:2 age => undefined
// VM2501:2 city => undefined
// undefined

// hit run everything still works on the key side but not on the value side and this is a reason why I wanted to show you the second type of syntax because up until this entire time we've only used the key value pair syntax and then we used the dot syntax.


// So that is how you can loop over a collection that is an object using the for in loop in javascript.

var student = {
  name: 'Kristine',
  age: 12,
  city: 'Scottsdale'
};

for (var key in student) {
  console.log(key + " => " + student[key]);
}



// Guide to While and Do/While Loops in JavaScript

var players = [
  'Altuve',
  'Bregman',
  'Correa',
  'Springer'
];

var i = 0;
while (i < players.length) {
  console.log(players[i]);
  i++;
}

// If I hit run this runs and it works we get all 4 of our players printed out. So that is good.

// That is a traditional while loop, it has a close cousin called the "do while" loop and the syntax for that is very similar except almost in reverse.


var players = [
  'Altuve',
  'Bregman',
  'Correa',
  'Springer'
];

var i = 21;
do {
  console.log(players[i]);
  i++;
} while (i < players.length)

// When you have do and then while right here it is going to give you a slightly different set of behavior. It is because with a do loop the condition is checked after the iteration, with a while loop it's checked first.

// That may not seem like a big deal and if I hit clear right here and then run it everything works identically in this scenario and that's perfectly fine. However let's imagine a scenario where I set i equal to 21.

// that is the main difference is that with a while loop it does its conditional check first. With a do while loop, it is always going to go through the program at least one time.

 // I have through the years found myself needing to use a do while loop even more than a while loop. Mainly because I never really use a while loop because for loops work much better. However a do while loop can do something that none of the other loops can do, that is it can perform and guarantee that it will run at least one time.

 var players = [
  'Altuve',
  'Bregman',
  'Correa',
  'Springer'
];

var i = 0;
while (i < players.length) {
  console.log(players[i]);
  i++;
}

var i = 21;
do {
  console.log(players[i]);
  i++;
} while (i < players.length)