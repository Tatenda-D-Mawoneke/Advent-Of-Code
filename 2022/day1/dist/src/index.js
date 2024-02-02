"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calorieCounterTopThree = exports.calorieCounter = void 0;
function calorieCounter(input) {
    let highestsum = 0;
    let currentSum = 0;
    for (let index = 0; index < input.length; index++) {
        const element = input[index];
        if (element == "") {
            if (currentSum > highestsum) {
                highestsum = currentSum;
            }
            currentSum = 0;
            continue;
        }
        currentSum += Number(element);
    }
    return highestsum;
}
exports.calorieCounter = calorieCounter;
function calorieCounterTopThree(input) {
    let totalSum = 0;
    let highestCalorieSums = [0, 0, 0];
    let currentSum = 0;
    for (let index = 0; index < input.length; index++) {
        const element = input[index];
        if (element == "") {
            const min = Math.min(...highestCalorieSums);
            const indexOfMin = highestCalorieSums.indexOf(min);
            if (currentSum > highestCalorieSums[indexOfMin]) {
                highestCalorieSums[indexOfMin] = currentSum;
                console.log(highestCalorieSums);
            }
            currentSum = 0;
            continue;
        }
        currentSum += Number(element);
    }
    highestCalorieSums.forEach((element) => {
        totalSum += element;
    });
    return totalSum;
}
exports.calorieCounterTopThree = calorieCounterTopThree;
