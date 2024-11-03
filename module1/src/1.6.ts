// Functions
// ----------------
//1. Normal function
//2. arrow function

function add(num1: number, num2: number): number {
  return num1 + num2;
}
add(2, 5);

const addArrow = (num1: number, num2: number): number => num1 + num2;

// object -->function -->method

const person = {
  name: "John",
  age: 25,
  balance: 100,
  addBalance(balance: number): string {
    // return this.balance + balance; //for return number
    return `My new balance is: ${this.balance + balance}`; //for return string
  },
};

const arr: number[] = [1, 2, 3, 4, 5];

const newArray: number[] = arr.map((elem: number): number => elem * elem);
