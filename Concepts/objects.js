

/// Key value pairs to store related data 
/// Dictonary like structure
const user = {
    name : "Usama Javed",
    age : 25,
    isLoggedIn : true,
    lastLoginDays : ["Monday", "Friday"]
}

/// Accessing object properties
console.log(user.name);
console.log(user.age);
console.log(user.isLoggedIn);
console.log(user.lastLoginDays);

/// Modifying object properties
user.age = 28;
console.log("Updated age: " + user.age);

/// Adding new property to object
user.country = "Pakistan";
console.log("Country: " + user.country);

/// Nested object
const product = {
    id : 1,
    name : "Laptop",
    price : 50000,
    specifications : {
        ram : "16GB",
        storage : "512GB SSD",
        processor : "Intel i7"
    }
}

/// Accessing nested object properties
console.log("Product Name: " + product.name);
console.log("RAM: " + product.specifications.ram);
console.log("Storage: " + product.specifications.storage);
console.log("Processor: " + product.specifications.processor);

/// Modifying nested object properties
product.specifications.ram = "32GB";
console.log("Updated RAM: " + product.specifications.ram);

/// Adding new property to nested object
product.specifications.graphicsCard = "NVIDIA GTX 1660";
console.log("Graphics Card: " + product.specifications.graphicsCard);

/// Function to display user info
function displayUserInfo(userObj){
    console.log(`User Name: ${userObj.name}`);
    console.log(`User Age: ${userObj.age}`);
    console.log(`Is Logged In: ${userObj.isLoggedIn}`);
    console.log(`Last Login Days: ${userObj.lastLoginDays.join(", ")}`);
}

displayUserInfo(user);

/// Function to display product info
function displayProductInfo(productObj){
    console.log(`Product Name: ${productObj.name}`);
    console.log(`Price: ${productObj.price}`);
    console.log(`Specifications:`);
    console.log(`  RAM: ${productObj.specifications.ram}`);
    console.log(`  Storage: ${productObj.specifications.storage}`);
    console.log(`  Processor: ${productObj.specifications.processor}`);
    if(productObj.specifications.graphicsCard){
        console.log(`  Graphics Card: ${productObj.specifications.graphicsCard}`);
    }
}

displayProductInfo(product);