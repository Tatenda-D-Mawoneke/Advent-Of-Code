interface Policy {
	password: string;
	policyChar: string;
	policyMinBound: number;
	policyMaxBound: number;
}

export function policyParser(input: string): Policy {
	const policyPassword: string[] = input.split(":");
	const policy: string = policyPassword[0].trim();
	const password: string = policyPassword[1].trim();
	const policyBoundsandChar: string[] = policy.split(" ");
	const policyBounds: string[] = policyBoundsandChar[0].split("-");
	const policyChar: string = policyBoundsandChar[1];
	const policyMinBound: number = Number(policyBounds[0]);
	const policyMaxBound: number = Number(policyBounds[1]);

	const policyParams: Policy = {
		password: password,
		policyChar: policyChar,
		policyMinBound: policyMinBound,
		policyMaxBound: policyMaxBound,
	};
	return policyParams;
}

export function addCommaAtEnd(input: string): string[] {
	const lines: string[] = input.split("\n");
	for (let index = 0; index < lines.length; index++) {
		lines[index] = lines[index].trim()
	}
	return lines;
}

export function solvePart1(input: string[]) {
	let result = 0;

	input.forEach((policyAndPassword) => {
		const policyParams: Policy = policyParser(policyAndPassword);

		let count: number = 0;
		for (let index = 0; index < policyParams.password.length; index++) {
			if (policyParams.password[index] == policyParams.policyChar) {
				count++;
			}
		}

		if (count >= policyParams.policyMinBound && count <= policyParams.policyMaxBound) {
			result++;
		}
	});

	return result;
}

export function solvePart2(input: string[]): number {
	let result = 0;

	for (let index = 0; index < input.length; index++) {
		const policyParams: Policy = policyParser(input[index]);

		if (
			policyParams.password[policyParams.policyMinBound - 1] ==
			policyParams.password[policyParams.policyMaxBound - 1]
		) {
			continue;
		}

		if (
			policyParams.password[policyParams.policyMinBound - 1] !=
			policyParams.password[policyParams.policyMaxBound - 1]
		) {
			if (
				policyParams.password[policyParams.policyMinBound - 1] == policyParams.policyChar ||
				policyParams.password[policyParams.policyMaxBound - 1] == policyParams.policyChar
			) {
				result++;
			}
		}
	}
	return result;
}
