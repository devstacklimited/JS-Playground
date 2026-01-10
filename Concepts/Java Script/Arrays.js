

const numbers = [10, 20, 30, 40, 50];

/// Accessing array elements
console.log("First element: " + numbers[0]);
console.log("Third element: " + numbers[2]);

/// Modifying array elements
numbers[1] = 25;
console.log("Modified second element: " + numbers[1]);

/// Adding elements to the array
numbers.push(60);
console.log("Array after adding an element: " + numbers);

/// Removing the last element from the array
const removedElement = numbers.pop();
console.log("Removed element: " + removedElement);
console.log("Array after removing the last element: " + numbers);

/// Iterating through the array
console.log("Iterating through the array:");
numbers.forEach((num, index) => {
    console.log("Element at index " + index + ": " + num);
});

/// Function to calculate the sum of array elements
function sumArray(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

const total = sumArray(numbers);
console.log("Sum of array elements: " + total);

/// Function to find the maximum element in the array
function maxInArray(arr){
    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

const maxElement = maxInArray(numbers);
console.log("Maximum element in the array: " + maxElement);

/// Function to find the minimum element in the array
function minInArray(arr){
    let min = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}

const minElement = minInArray(numbers);
console.log("Minimum element in the array: " + minElement);