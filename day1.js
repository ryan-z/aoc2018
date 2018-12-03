const fs = require('fs')
let current_freq = 0;
let pastFreqs = {}

let lines = fs.readFileSync('day1_input.txt')
		.toString()
		.split('\r\n')
		.map(line => {
	if(line.substring(0,1) === '+') {
		return parseInt(line.substring(1), 10)
	}
	else {
		return parseInt(line, 10)
	}
});

let i = 0
while(true) {
	i++
	for(const line of lines) {
        current_freq += line;
        if(pastFreqs[current_freq]) {
            console.log(current_freq);
            console.log('index:', i)
            return;
        }
        pastFreqs[current_freq] = true;
    }
}
