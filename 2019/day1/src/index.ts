export function addCommaAtEnd(input: string): number[] {
	const lines: string[] = input.split("\n");
	let numbers: number[] = [];
	for (let index = 0; index < lines.length; index++) {
		lines[index] = lines[index].trim();
		numbers[index] = Number(lines[index]);
	}
	return numbers;
}

export function solvePart1(input: number[]): number {
	let totalFuelRequired: number = 0;

	for (let index = 0; index < input.length; index++) {
		const fuelRequired: number = input[index];
		totalFuelRequired += Math.floor(fuelRequired / 3) - 2;
	}

	return totalFuelRequired;
}

export function solvePart2(input: number[]): number {
	let totalFuelRequired: number = 0;

	for (let index = 0; index < input.length; index++) {
		const number: number = input[index];
		const fuelRequired = Math.floor(number / 3) - 2;
		totalFuelRequired += fuelRequired;

		if (fuelRequired <= 0) {
			return 0;
		}

		totalFuelRequired += solvePart2([fuelRequired]);
	}

	return totalFuelRequired;
}
