export function solvePart1(input: number[], startingIndex?: number): number {
	let result: number = 0;

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

export function solvePart2(input: number[]) {
	let result: number = 0;
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

export function solvePart2Recursively(input: number[]): number {
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
