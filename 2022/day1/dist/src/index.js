"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solvePart2 = exports.solvePart1 = void 0;
function solvePart1(input) {
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
exports.solvePart1 = solvePart1;
function solvePart2(input) {
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
exports.solvePart2 = solvePart2;
