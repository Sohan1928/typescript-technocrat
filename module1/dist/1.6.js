"use strict";
// Functions
// ----------------
//1. Normal function
//2. arrow function
function add(num1, num2) {
    return num1 + num2;
}
add(2, 5);
const addArrow = (num1, num2) => num1 + num2;
// object -->function -->method
const person = {
    name: "John",
    age: 25,
    balance: 100,
    addBalance(balance) {
        // return this.balance + balance; //for return number
        return `My new balance is: ${this.balance + balance}`; //for return string
    },
};
const arr = [1, 2, 3, 4, 5];
const newArray = arr.map((elem) => elem * elem);
