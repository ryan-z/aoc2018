const fs = require('fs')


let lines = fs.readFileSync('day3_input.txt')
		.toString()
		.split('\r\n');
lines.pop(); // account for the newline char at end of input
let claims = lines.map((line, index) => {
	line = line.split("@ ")[1].split(": ");
	return {
		claimNo : index+1,
		offsetX  : +line[0].split(",")[0],
		offsetY  : +line[0].split(",")[1],
		width	 : +line[1].split("x")[0],
		height	 : +line[1].split("x")[1],
		valid: true
	}
})

// maxHeight = Math.max.apply(Math, claims.map(claim => claim.absHeight));
// maxWidth = Math.max.apply(Math, claims.map(claim => claim.absWidth));

gameboard = Array(1000).fill(0).map(_ => Array(1000).fill(0));

function main() {
	for(let i = 0; i < claims.length; i++) {
		for(let x = claims[i].offsetX; x < claims[i].offsetX + claims[i].width; x++) {
			for(let y = claims[i].offsetY; y < claims[i].offsetY + claims[i].height; y++) {
				gameboard[x][y] += 1;
			}
		}
	}

	// have to go through from the beginning to flag for part 2
	for(let i = 0; i < claims.length; i++) {
		for(let x = claims[i].offsetX; x < claims[i].offsetX + claims[i].width; x++) {
			for(let y = claims[i].offsetY; y < claims[i].offsetY + claims[i].height; y++) {
				if(gameboard[x][y] >= 2) {
					claims[i].valid = false;
				}
			}			
		}
	}
	

	let counter1 = 0;
	for(let i = 0; i < 1000; i++){
		for(let j = 0; j < 1000; j++) {
			if(gameboard[i][j] >= 2) {
				counter1++;
			}
		}
	}
	console.log(counter1); // Part 1 answer


	for(let i = 0; i < claims.length; i++) {
		if(claims[i].valid === true){
			console.log(claims[i]) // Part 2 answer (claimNo value)
			return;
		}
	}


	
}

main();
