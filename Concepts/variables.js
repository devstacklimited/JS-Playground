

/// Variable declaration
let myAge = 25;
// Constant declaration
const myName = "Usama Javed";
/// Single parameter arrow function
const greet = name => "Hello I'm " + name;

/// Simple way to write a function and pass a value to string interpolation
function introduce(){
    myAge = 28;
    console.log(`${greet(myName)}, and I am ${myAge} years old.`);
    console.log('This is my first JavaScript program!');
}
introduce();