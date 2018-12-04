const fs = require('fs')


let lines = fs.readFileSync('day4_input.txt')
		.toString()
		.split('\r\n');
lines.pop(); // account for the newline char at end of input

lines.sort((a,b) => {
	if(a.split("] ")[0] < b.split("] ")[0]) { return -1; }
    if(a.split("] ")[0] > b.split("] ")[0]) { return 1; }
    return 0;
})


console.log(lines)


const guards = {
	'691': {
		'minute': min,
		'delta' : dateDifference
		}
	
}