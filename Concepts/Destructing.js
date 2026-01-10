
// Object to demonstrate destructuring
const user = {
    name : "Usama Javed",
    age : 25,
    isLoggedIn : true,
    lastLoginDays : ["Monday", "Wednesday", "Friday"]
};

/// Destructuring object properties
const { name, age } = user;

console.log("User name is " + name);
console.log("User age is " + age);

/// Destructuring with renaming
const { name: userName, age: userAge } = user;
console.log("Renamed User name is " + userName);
console.log("Renamed User age is " + userAge);

/// Destructuring with default values
const { country = "Unknown" } = user;
console.log("User country is " + country);

/// Function to display user info using destructuring
function displayUserInfo({ name, age, isLoggedIn, lastLoginDays }){
    console.log(`User Name: ${name}`);
    console.log(`User Age: ${age}`);
    console.log(`Is Logged In: ${isLoggedIn}`);
    console.log(`Last Login Days: ${lastLoginDays.join(", ")}`);
}

displayUserInfo(user);

/// Destructuring nested objects
const product = {
    id : 1,
    name : "Smartphone",
    price : 30000,
    specifications : {
        ram : "8GB",
        storage : "128GB",
        processor : "Snapdragon 865"
    }
};

const { specifications: { ram, storage, processor } } = product;
console.log("Product RAM: " + ram);
console.log("Product Storage: " + storage);
console.log("Product Processor: " + processor);

/// Function to display product info using destructuring
function displayProductInfo({ name, price, specifications: { ram, storage, processor } }){
    console.log(`Product Name: ${name}`);
    console.log(`Product Price: ${price}`);
    console.log(`RAM: ${ram}`);
    console.log(`Storage: ${storage}`);
    console.log(`Processor: ${processor}`);
}

displayProductInfo(product);