const fs = require('fs')


let lines = fs.readFileSync('day2_input.txt')
		.toString()
		.split('\r\n');


twos = 0;
threes = 0;

for(let i = 0; i < lines.length; i++) {
	const letterCounts = {};
	for(let j = 0; j < lines[i].length; j++) {
		if(letterCounts[lines[i][j]]) {
			letterCounts[lines[i][j]]++;
		} else { 
			letterCounts[lines[i][j]] = 1
		}
	}
	if(Object.values(letterCounts).includes(2)) {
		twos++;
	}
	if(Object.values(letterCounts).includes(3)) {
		threes++;
	}
	
}
console.log(twos * threes)

for(let outer = 0; outer < lines.length - 1; outer++) {
	for(let inner = outer + 1; inner < lines.length; inner++) {
		let strikes = 0;
		for(let letter = 0; letter < lines[0].length; letter++) {
			if(lines[outer][letter] != lines[inner][letter]) {
				strikes++;
			}
			if(strikes > 1) {
				break;
			}
		}
		if(strikes === 1) {
			console.log(lines[outer],lines[inner])
			return;
		}
	}
}
