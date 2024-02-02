"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solvePart2Recursively = exports.solvePart2 = exports.solvePart1 = void 0;
function solvePart1(input, startingIndex) {
    let result = 0;
    for (let index = 0; index < input.length - 1; index++) {
        let firstNum = input[index];
        for (let index = 0; index < input.length - 1; index++) {
            let secondNum = input[index + 1];
            if (firstNum + secondNum == 2020) {
                result = firstNum * secondNum;
            }
        }
    }
    return result;
}
exports.solvePart1 = solvePart1;
function solvePart2(input) {
    let result = 0;
    if (input.length < 3) {
        return result;
    }
    for (let i = 0; i < input.length - 2; i++) {
        for (let j = i + 1; j < input.length - 1; j++) {
            for (let k = j + 1; k < input.length; k++) {
                const firstNum = input[i];
                const secondNum = input[j];
                const thirdNum = input[k];
                if (firstNum + secondNum + thirdNum === 2020) {
                    return firstNum * secondNum * thirdNum;
                }
            }
        }
    }
    return result;
}
exports.solvePart2 = solvePart2;
function solvePart2Recursively(input) {
    if (input.length < 3) {
        return 0;
    }
    const firstNum = input.shift();
    if (!firstNum) {
        return 0;
    }
    for (const secondNum of input) {
        for (const thirdNum of input) {
            if (firstNum + secondNum + thirdNum === 2020) {
                return firstNum * secondNum * thirdNum;
            }
        }
    }
    return solvePart2Recursively(input);
}
exports.solvePart2Recursively = solvePart2Recursively;
