export function policyParser(input) {
    const policyPassword = input.split(":");
    const policy = policyPassword[0].trim();
    const password = policyPassword[1].trim();
    const policyBoundsandChar = policy.split(" ");
    const policyBounds = policyBoundsandChar[0].split("-");
    const policyChar = policyBoundsandChar[1];
    const policyMinBound = Number(policyBounds[0]);
    const policyMaxBound = Number(policyBounds[1]);
    const policyParams = {
        password: password,
        policyChar: policyChar,
        policyMinBound: policyMinBound,
        policyMaxBound: policyMaxBound,
    };
    return policyParams;
}
export function addCommaAtEnd(input) {
    const lines = input.split("\n");
    for (let index = 0; index < lines.length; index++) {
        lines[index] = lines[index].trim();
    }
    return lines;
}
export function solvePart1(input) {
    let result = 0;
    input.forEach((policyAndPassword) => {
        const policyParams = policyParser(policyAndPassword);
        let count = 0;
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
export function solvePart2(input) {
    let result = 0;
    for (let index = 0; index < input.length; index++) {
        const policyParams = policyParser(input[index]);
        if (policyParams.password[policyParams.policyMinBound - 1] ==
            policyParams.password[policyParams.policyMaxBound - 1]) {
            continue;
        }
        if (policyParams.password[policyParams.policyMinBound - 1] !=
            policyParams.password[policyParams.policyMaxBound - 1]) {
            if (policyParams.password[policyParams.policyMinBound - 1] == policyParams.policyChar ||
                policyParams.password[policyParams.policyMaxBound - 1] == policyParams.policyChar) {
                result++;
            }
        }
    }
    return result;
}
