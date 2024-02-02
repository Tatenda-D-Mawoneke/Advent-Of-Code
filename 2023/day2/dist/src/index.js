export function elfGame(cubes, games) {
    let gameCount = 0;
    outerloop: for (let i = 1; i <= Object.keys(games).length; i++) {
        let currentGame = `Game ${i}`;
        let turns = games[currentGame].split(";");
        for (let j = 0; j < turns.length; j++) {
            let currentTurn = turns[j];
            let currentTurnCubesArray = currentTurn.split(",");
            for (let k = 0; k < currentTurnCubesArray.length; k++) {
                let cube = currentTurnCubesArray[k].split(" ");
                cube.forEach((element, index, cube) => {
                    if (element == "") {
                        cube.splice(index, 1);
                    }
                });
                let cubeKey = cube[1];
                let cubeAmount = Number(cube[0]);
                if (cubeAmount > cubes[cubeKey]) {
                    continue outerloop;
                }
            }
        }
        gameCount += Number(currentGame.split(" ")[1]);
    }
    return gameCount;
}
export function trueElfGame(games) {
    // let total: number = 0;
    // for (const key in games) {
    // 	if (Object.prototype.hasOwnProperty.call(games, key)) {
    // 		const element = games[key];
    // 	}
    // }
    return 1;
}
