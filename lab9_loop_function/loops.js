console.log("Naomi Chen")
console.log("====Example 1: for loop as a counter ====")

let i = 1;
for (i; i < 5; i++) {
    console.log(`iteration = ${i}`)
}

console.log("==== Example 2: for loop as a decrement counter =====")
//create a loop counter from 10 to 0
for (let n = 10; n >= 0; n--) {
    console.log(`iteration = ${n}`)
}

console.log("==== Example 3: condition inside the loop ====")
//check how many even numbers are in between -5 and 5
let counter = 0
for (let m = -5; m < 5; m++) {
    console.log(`iteration = ${m}`)
    if (m % 2 === 0 && m !== 0) {
        counter++
    }
}
console.log(`There is/are ${counter} even numbers`)

console.log("==== Example 4: while loop as a counter =====")
// display number from 0-4
let p = 0
while (p <= 4) {
    console.log(`iteration = ${p}`)
    p++
}

console.log("==== Example 5: while loop application =====")
// guess number game
const SECRET = 8
let guessnumber = parseInt(prompt("Guess a number between 1 and 10"))
while (guessnumber !== SECRET) {
    //console.log(`${guessnumber} is a wrong guess, try agian!`)
    guessnumber = parseInt(prompt("Guess another number between 1 and 10"))

}
console.log(`Great! You guessed it right! the number is ${SECRET}`)

console.log("==== Example 6: while loop application in a list=====")
let colors = ["megenta", "olive", "babyblue"] // index 0,1,2
let sizeofcolors = colors.length
let index = 0
while (index < sizeofcolors) {
    console.log(colors[index])
    index++
}
console.log("==== Example 7: while loop to simulate a password log-in=====")
// terminate the loop if password fails in three attempts
const password = "peterpan"
let userpassword = prompt("Enter a password")
let numberattempt = 0
while (userpassword !== password) {
    numberattempt++
    if (numberattempt > 2) {
        console.log("Your account is locked!")
        break
    }
    userpassword = prompt(`Attempt = ${3 - numberattempt} left, Enter password again`)


}
console.log("Have a good day!")

console.log("==== Example 8: do-while loop to simulate a withdraw from a bank account=====")
// user try to widthraw money from an account with balance of $1000.
let balance = 1000
let widthraw = 0
do {
    widthraw = parseInt(prompt("How much do you want to widthdraw?"))
    if (widthraw <= balance) {
        balance = balance - widthraw
        break
    }
    else {
        console.log("Insufficient amount, try again!")
    }
} while (widthraw > balance)
console.log(`Your new balance is ${balance}`)




console.log("==== Exercise: simulate a bank transaction =====")
//simulate the collection of a pin number of 4 digits
// ask the user to pick a transaction: view the balamce, deposit, widthdraw --> flow control (if, else, else)
// ask the user if they want another transaction (if yes, another step 2) (do while loop, run step 2 first)
// print result (no)
const pinnum = "1234"
let userpin = prompt("Enter your Pin Number")
let attempts = 0
while (userpin !== pinnum) {
    attempts++
    if (attempts > 2) {
        console.log("Your account is locked!")
        break
    }
    userpin = prompt(`Attempt = ${3 - attempts} left, Enter password again`)
}

let balance1 = 1000
let option
let widthdraw1 = 0
let deposit = 0
let anotherTra
do {
    option = parseInt(prompt("Choose an option: 1. view your balance, 2. Deposit, 3.Widthfraw"))
    if (option === 1) {
        console.log(`Your balance is ${balance1}`)
    }
    else if (option === 2) {
        deposit = parseInt(prompt("Enter the amount of money you want to deposit: "))
        balance1 = deposit + balance1
        console.log(`You have deposited ${deposit}. Your new balance is ${balance1}`)
    }
    else if (option === 3) {
        widthdraw1 = parseInt(prompt("Enter the amount of money you want to withdraw:"))
        balance1 = balance1 - widthdraw1
        console.log(`You have withdrawn ${widthdraw1}. Your new balance is ${balance1}`)

    }
    else if (widthdraw1 > balance1) {
        console.log("Insufficient balance for widthdrawal")
    }

    anotherTra= prompt("Do you want another transaction? (yes/no)")
} while (anotherTra === 'yes')

console.log("Have a good day!.")




