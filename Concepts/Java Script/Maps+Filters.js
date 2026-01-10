
// Maps 
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);
console.log("Squared Numbers: " + squaredNumbers);

const doubledNumbers = numbers.map(num => num * 2);
console.log("Doubled Numbers: " + doubledNumbers);

// Filters
const mixedNumbers = [10, 15, 20, 25, 30, 35, 40];
const evenNumbers = mixedNumbers.filter(num => num % 2 === 0);
console.log("Even Numbers: " + evenNumbers);

const greaterThanTwenty = mixedNumbers.filter(num => num > 20);
console.log("Numbers Greater Than 20: " + greaterThanTwenty);

// Reduce 
const sum = numbers.reduce((total, index) => total + index, 0);
console.log("Sum of Numbers: " + sum);

const cart = [
    { product: "Laptop", price: 100 },
    { product: "Phone", price: 200 },
    { product: "Tablet", price: 500 }
];

const totalPrice = cart.reduce((total, item) => total + item.price, 0);
console.log("Total Price of Cart: " + totalPrice);

// Chaining Map and Filter
const chainedResult = numbers
    .map(num => num * 3)
    .filter(num => num > 10);

console.log("Chained Map and Filter Result: " + chainedResult);