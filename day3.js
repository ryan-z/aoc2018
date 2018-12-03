const fs = require('fs')


let lines = fs.readFileSync('day3_input.txt')
		.toString()
		.split('\r\n');
lines.pop(); // account for the newline char at end of input
let claims = lines.map(line => {
	line = line.split("@ ")[1].split(": ");
	return {
		offsetX  : +line[0].split(",")[0],
		offsetY  : +line[0].split(",")[1],
		width	 : +line[1].split("x")[0],
		height	 : +line[1].split("x")[1],
		absWidth : +line[0].split(",")[0] + +line[1].split("x")[0],
		absHeight: +line[0].split(",")[1] + +line[1].split("x")[1]
	}
})

// console.log(claims[claims.length - 1])

maxHeight = Math.max.apply(Math, claims.map(claim => claim.absHeight));
maxWidth = Math.max.apply(Math, claims.map(claim => claim.absWidth));
console.log(maxWidth)
// for(let i = 0; i < claims.length; i++) {

// }

// rectangle width: starts at index offsetX, ends at index offsetX+width
// rectangle height: starts at index offsetY, ends at index offsetY+height
// board total width: assuming left starts at 0, the right will be the widest rectangle (max offsetX + width)
// board total height: assuming top starts at 0, the height max will be the tallest rectangle (max of offsetY + height)