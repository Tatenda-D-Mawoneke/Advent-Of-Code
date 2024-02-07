export function addCommaAtEnd(input) {
    const lines = input.split("\n");
    let numbers = [];
    for (let index = 0; index < lines.length; index++) {
        lines[index] = lines[index].trim();
        numbers[index] = Number(lines[index]);
    }
    return numbers;
}
export function solvePart1(input) {
    let totalFuelRequired = 0;
    for (let index = 0; index < input.length; index++) {
        const fuelRequired = input[index];
        totalFuelRequired += Math.floor(fuelRequired / 3) - 2;
    }
    return totalFuelRequired;
}
export function solvePart2(input) {
    let totalFuelRequired = 0;
    for (let index = 0; index < input.length; index++) {
        const number = input[index];
        const fuelRequired = Math.floor(number / 3) - 2;
        totalFuelRequired += fuelRequired;
        if (fuelRequired <= 0) {
            return 0;
        }
        totalFuelRequired += solvePart2([fuelRequired]);
    }
    return totalFuelRequired;
}
