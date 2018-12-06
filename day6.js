const fs = require('fs')
let lines = fs.readFileSync('day6_input.txt')
		.toString()
		.split('\r\n');
lines.pop(); // account for the newline char at end of input

const grid = {}

manhattanDistance = function(p, q) {
    return Math.abs(p.x - q.x) + Math.abs(p.y - q.y)
}


findClosestPoint = function(thisPoint, points) {
    let leastDistance = Number.MAX_SAFE_INTEGER;
    let closestPoint;
    for(let i = 0; i < points.length; i++) {
        if(thisPoint.id != points[i].id) {
            const distance = manhattanDistance(thisPoint, points[i])
            if (distance < leastDistance) {
                leastDistance = distance;
                closestPoint = points[i].id;
            }
        }
    }
    return closestPoint;
}

makeRectange = function (pointA, pointB) {
    
}

let points = lines.map(line => {
    return {
        id: line.split(" ")[0] + line.split(" ")[1],
        x:  line.split(", ")[0],
        y:  line.split(", ")[1],
    }}
);
for(let i = 0; i < points.length; i++) {
    const closestPoint = findClosestPoint(points[i], points)
    points[i].closest = closestPoint
    // console.log(`closest point to ${points[i].id} is ${closestPoint}`);
}


console.log(points);
// console.log(manhattanDistance(points[1], points[2]))


