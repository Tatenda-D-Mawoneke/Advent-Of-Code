export function numberCalibrator(words) {
    let total = 0;
    for (let i = 0; i < words.length; i++) {
        let numbers = [];
        let currentWord = words[i];
        for (let j = 0; j < currentWord.length; j++) {
            const num = Number(currentWord[j]);
            if (!isNaN(num)) {
                numbers.push(num);
                break;
            }
        }
        let reversedWord = currentWord.split("").reverse().join("");
        for (let k = 0; k < reversedWord.length; k++) {
            const num = Number(reversedWord[k]);
            if (!isNaN(num)) {
                numbers.push(num);
                break;
            }
        }
        const sum = Number(numbers.join(""));
        total += sum;
    }
    return total;
}
export function trueCalibrator(words) {
    let total = 0;
    words.forEach((word, i, words) => {
        let firstNum = helper(word, "start");
        let secondNum = helper(word, "end");
        let num = Number(`${firstNum}${secondNum}`);
        num;
        total += num;
    });
    return total;
}
function helper(word, startingPoint) {
    let num = 0;
    let numBuilder = "";
    const numbers = {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
    };
    if (startingPoint == "start") {
        for (let i = 0; i < word.length; i++) {
            let startingIndex = i;
            let startingChar = word[i];
            let foundNumber = parseInt(startingChar);
            if (foundNumber) {
                return foundNumber;
            }
            for (let j = startingIndex; j < word.length; j++) {
                numBuilder += word[j];
                foundNumber = numbers[numBuilder];
                if (foundNumber) {
                    return foundNumber;
                }
            }
            numBuilder = "";
        }
    }
    else if (startingPoint == "end") {
        for (let i = word.length - 1; i < word.length && i >= 0; i--) {
            let startingIndex = i;
            let startingChar = word[i];
            let foundNumber = parseInt(startingChar);
            if (foundNumber) {
                return foundNumber;
            }
            for (let j = startingIndex; j < word.length; j++) {
                numBuilder += word[j];
                foundNumber = numbers[numBuilder];
                if (foundNumber) {
                    return foundNumber;
                }
            }
            numBuilder = "";
        }
    }
    return num;
}
