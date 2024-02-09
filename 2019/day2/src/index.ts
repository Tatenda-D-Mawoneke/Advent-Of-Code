export function addCommaAtEnd(input: string): number[] {
	const lines: string[] = input.split(",");
	let numbers: number[] = [];
	for (let index = 0; index < lines.length; index++) {
		lines[index] = lines[index].trim();
		numbers[index] = Number(lines[index]);
	}
	return numbers;
}

export function solvePart1(
	inputIntcodeArray: number[],
	inputAddress1?: number,
	inputAddress2?: number
): number {
	const addition: number = 1;
	const multiplication: number = 2;
	const halt: number = 99;

	if (inputAddress1) {
		inputIntcodeArray[1] = inputAddress1;
	}
	if (inputAddress2) {
		inputIntcodeArray[2] = inputAddress2;
	}
	for (let index = 0; index < inputIntcodeArray.length; index += 4) {
		// console.log(inputIntcodeArray);
		const opcode = inputIntcodeArray[index];
		const num1Position: number = inputIntcodeArray[index + 1];
		const num2Position: number = inputIntcodeArray[index + 2];
		const positionIndex: number = inputIntcodeArray[index + 3];
		if (opcode == addition) {
			inputIntcodeArray[positionIndex] =
				inputIntcodeArray[num1Position] + inputIntcodeArray[num2Position];
		}
		if (opcode == multiplication) {
			inputIntcodeArray[positionIndex] =
				inputIntcodeArray[num1Position] * inputIntcodeArray[num2Position];
		}
		if (opcode == halt) {
			break;
		}
	}

	return inputIntcodeArray[0];
}

export function solvePart2(inputIntcodeArray: number[], desiredOutput: number): number {
	for (let noun = 0; noun < 100; noun++) {
		for (let verb = 0; verb < 100; verb++) {
			let copyInputIntcodeArray: number[] = Object.assign([], inputIntcodeArray);
			const output = solvePart1(copyInputIntcodeArray, noun, verb);
			if (output == desiredOutput) {
				return 100 * noun + verb;
			}
		}
	}
	return NaN;
}
