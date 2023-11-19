const fs = require('fs');

// Function to turn the .txt file content into a JS list of lists
const readInputFile = (path) => {
    const fileContent = fs.readFileSync(path, 'utf-8');
    const paragraph = fileContent.split('\n');

    const result = [];
    let caloriesList = []

    paragraph.forEach(paragraph => {
        if (paragraph.trim().length === 0) {
            // If empty paragraph, push the current list and start a new one
            result.push(caloriesList);
            caloriesList = []; // Reset list
        } else {
            const numbers = paragraph.split('\n').map(Number);
            caloriesList = caloriesList.concat(numbers);
        }
    });

    if (caloriesList.length > 0) {

        result.push(caloriesList);
    }
    return result;
}

const finalList = readInputFile('./input.txt')
// console.log(finalList)

// Function that sum all items in a list
const sumArr = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    };
    return sum;
};

// List of lists
const elfs = finalList;

// List of summed lists
const newList = [];

// Interact over the "elfs" list and sum every list
for (let i = 0; i < elfs.length; i++) {
    newList.push(sumArr(elfs[i]));
};

// Check if a list of sums was created
//console.log(newList)

//Simple sort algorithm
for (let i = 0; i < newList.length - 1; i++) {
    for (let j = 0; j < newList.length - 1; j++) {
        if (newList[j] > newList[j + 1]) {
            let temp = newList[j];
            newList[j] = newList[j + 1];
            newList[j + 1] = temp;
            //console.log(newList);
        }
    }
}

//Print the sorted list
//console.log(newList);

// Prints the largest integer in the list sorted list
console.log(Math.max(...newList));

// Sum the last 3 integers in the soted array
console.log(`The sum of the top 3 elfs carryng the most calories: ${newList[newList.length - 1] + newList[newList.length - 2] + newList[newList.length - 3]} `)

module.exports = sumArr
