/*
Naomi Chen
June 15 function and object 
*/
console.log(`Naomi Chen`)
//function to print something
function msg() {
    console.log("Hello World!")

} // only see function when you call the function 
// function to print numbers beterrn 1 and 3, inclusive 
function printcount() {
    for (let x = 1; x <= 3; x++) {
        console.log(x)
    }
}

// function that passes a name as argument
function greeting(name) {
    console.log(`Welcome to JavaScript ${name}`)
} // greating("Martha") <-- how you call function in the broswer

// function that passes multiple arguement
function fullname(firstname, lastname) {
    console.log(`Welcome to JS ${firstname} ${lastname[0]}`) //${lastname[0]} to print the first character of last name
}

let firstname = "Martha"
let lastname = "Smith"

fullname(firstname, lastname)

//function without parameters but returns value 
function sumxy() {
    let x = 10
    let y = -2
    return x + y
    // any lines after the first return will not be excuted
    x = x + 2
    y = y + 5
    return x + y
}

// function with parameters and returns a value
function sum(x, y) {
    return x + y
}
// calling sum()
let s = sum(5, 10)
console.log(`The sum is ${s}`)

// function check if a number is positive
function checkpositive(number) {
    if (number > 0)
        return true
    else {
        return false
    }
}

// call the function
let n = 2
let check = checkpositive(n)
console.log(`Is number ${n} positive? ${check}`)
//or
console.log(`Is number ${n} positive? ${checkpositive(n)}`)

// save function in a variable annonymous function
/* function sum(num1. num2){
    return num1+num1
} */ // other way 
const addition = function (num1, num2) {
    return num1 + num2
}
/* regular variable function 
const product = function(num1,num2){
    return num1*num2
}
*/
//arrow function 
const product = (num1, num2) => { return num1 * num2 }

// anonumous function 
(
    function () {
        console.log("This is an anonymous function")
    }
)();

(
    () => { console.log("This is an anonymous function using aeeow") }
)();

// object 
/* real-world objects are all around us, and they each have attributes and behaviors that can describe 
- attributes describe the heatures that an object has.
- behaviors describe actions that an object can perform */
// car is the object

let car = {
    // attributes (properties)
    make: "Jeep",
    year: 2021,
    model: "Wrangler",
    startmilage: 10,
    endmilage: 50,

    //behaviors (methods, function)
    accelerate: function () { return this.model },
    brake: function () { return this.make },
    distancetravel: function () { return this.endmilage - this.startmilage }
}
// add a method, `start` to the car object
car.start = function () {
    return `${this.make} ${this.model} is running`
}

// add a property `proce`
car.price = 32000