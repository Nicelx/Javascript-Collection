const { Task } = require("./types");
const { compose } = require("ramda");

const Box = (f) => ({
	map: (g) => Box(compose(f, g)),
	fold: f,
});

// console.log(Box(() => 2).map(two => two + 1).fold())
//////////////////////////////

Task.of(2).map((two) => two + 1); // Task(2)

let result = Task((rej, res) => res(2))
	.map((two) => two + 1)
	.map(three => three * 2)
// result.fork();

console.log(result);
