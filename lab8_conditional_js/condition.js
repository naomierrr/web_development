console.log("Naomi Chen") // display something in the terminal (console.log)
console.log("==== Example 1: if statement ====")
let day = true;

if (day) {
    console.log("Good morning!")
} // its going to check "if" is true

console.log("==== Example 2: if-else statement ====")

let n1 = 8, n2 = 8
if (n1 === n2) {
    console.log("They are equal")
}
else {
    console.log("They are different")
}
console.log("==== Example 3: multyway condition statement ====")
// check if a number is positive, negative or zero
let number = 9
if (number > 0) {
    console.log(`Number ${number} is positve`)
}
else if (number < 0) {
    console.log(`Number ${number} is negative`)

}
else if (number === 0) {
    console.log("The number is zero")
}
else {
    console.log(`${number} is undefined!`)
}
console.log("==== Example 4: multyway condition statement in prompt function====")
//check if a user enters a number, didnt enter anything, or pressed cancel botton
let n = prompt("Enter a number: ")


if (n === null) {
    console.log("Cancel button was pressed")
}
else if (n === "") {
    console.log("OK button was pressed")
}
else if (isNaN(n)) {
    console.log(`${n} is a string`)
}
else {
    console.log(`${n} is a number`)
}
console.log("==== Example 5: nested conditional statement====")
//check if a password has at least 6 characters and no space
let password = prompt("Enter a password")

// to find the number of characters in a string, we use the method .length
if (password.length >= 6) {
    console.log(`Password ${password} has ${password.length} characters`)
    if (password.indexOf(" ") === -1) {
        console.log(`Password ${password} DOESN'T HAVE SPACE`)
    }
    else {
        console.log(`Password ${password} HAS SPACE`)
    }
}
else {
    console.log(`Password ${password} has less than 6 characters`)
}

console.log("==== Exercise ====")
let value = prompt("Enter a value: ")
if (value > 0) {
    console.log(`${value} is a positive number`)
}
else if (value < 0) {
    console.log(`${value} is a negative number`)
}
else if (value == 0) {
    console.log(`${value} is zero`)
}
else {
    console.log(`${value} is a string`)
}


console.log("=== Exercise 2")
let color = prompt("Enter a color")
if (color === "pink") {
    console.log(`You selected ${color} color`)
}
else if (color === "blue") {
    console.log(`You selected ${blue} color`)
}
else if (color === "black") {
    console.log(`You selected ${color} color`)
}
else {
    console.log(`Color is not in the list`)
}

console.log("=== Example 6: list ===")
let colors = ["meganta", "red", "olive", "orange", "babyblue", "hotpink"]
// all list has a index number that starts with 0 (left most item)
console.log(`The third color is ${colors[2]}`)

let selectcolor = prompt("Example 6: select a color using an index color")
switch (selectcolor) {
    case '0':
        console.log(`Selected color = ${colors[0]}`)
        break
    case '1':
        console.log(`Selected color = ${colors[1]}`)
        break
    case '2':
        console.log(`Selected color = ${colors[2]}`)
        break
    case '3':
        console.log(`Selected color = ${colors[3]}`)
        break
    case '4':
        console.log(`Selected color = ${colors[4]}`)
        break
    default:
        console.log("Color is not in the list")
}

console.log("=== Example 7: string === ")
let greeting = "Good evening"
console.log(`The seventh character is ${greeting[6]}`)





