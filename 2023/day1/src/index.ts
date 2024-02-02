export function numberCalibrator(words: string[]): number {
	let total: number = 0;
	for (let i = 0; i < words.length; i++) {
		let numbers: number[] = [];
		let currentWord: string = words[i];
		for (let j = 0; j < currentWord.length; j++) {
			const num: number = Number(currentWord[j]);
			if (!isNaN(num)) {
				numbers.push(num);
				break;
			}
		}
		let reversedWord = currentWord.split("").reverse().join("");
		for (let k = 0; k < reversedWord.length; k++) {
			const num: number = Number(reversedWord[k]);
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

export function trueCalibrator(words: string[]) {
	let total: number = 0;

	words.forEach((word, i, words) => {
		let firstNum: number = helper(word, "start");
		let secondNum: number = helper(word, "end");
		let num = Number(`${firstNum}${secondNum}`);
		num;
		total += num;
	});
	return total;
}

function helper(word: string, startingPoint: string): number {
	let num = 0;
	let numBuilder: string = "";
	const numbers: { [key: string]: number } = {
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
			let foundNumber: number = parseInt(startingChar);
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
	} else if (startingPoint == "end") {
		for (let i = word.length - 1; i < word.length && i >= 0; i--) {
			let startingIndex = i;
			let startingChar = word[i];
			let foundNumber: number = parseInt(startingChar);
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
