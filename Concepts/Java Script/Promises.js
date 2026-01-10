
// Promieses in JavaScript

// Creating a new Promise
setTimeout(() => {
    console.log("This message is shown after 2 seconds");
}, 2000);

const fetchData = () => {
    return new Promise((resolve, reject) => {
        const success = true; // Simulating success or failure
        setTimeout(() => {
            if (success) {
                resolve("Data fetched successfully!");
            } else {
                reject("Error fetching data.");
            }
        }, 1500);
    });
}

// Using the Promise with then and catch
fetchData()
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });


// Async/Await syntax
const fetchDataAsync = async () => {
    try {
        const data = await fetchData();
        console.log("Async/Await: " + data);
    } catch (error) {
        console.log("Async/Await: " + error);
    }
}

fetchDataAsync();

// Promise.all to handle multiple promises
const promise1 = new Promise((resolve) => setTimeout(() => resolve("First Promise resolved"), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve("Second Promise resolved"), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve("Third Promise resolved"), 1500));

Promise.all([promise1, promise2, promise3])
    .then(results => {
        console.log("All promises resolved:");
        results.forEach(result => console.log(result));
    })
    .catch(error => {
        console.log("One of the promises failed: " + error);
    });

// Promise.race to get the first resolved promise
Promise.race([promise1, promise2, promise3])
    .then(firstResult => {
        console.log("First promise resolved: " + firstResult);
    })
    .catch(error => {
        console.log("Error in race: " + error);
    });

// Function to simulate an API call with a promise
const simulateApiCall = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url === "https://api.example.com/data") {
                resolve({ data: "Sample data from API" });
            } else {
                reject("404 Not Found");
            }
        }, 1000);
    });
}

// Using the simulateApiCall function
simulateApiCall("https://api.example.com/data")
    .then(response => {
        console.log("API Call Success: ", response.data);
    })
    .catch(error => {
        console.log("API Call Error: ", error);
    });