const { curry } = require("ramda");
let out;

// const curry = (f) => (x) => (y) => f(x, y);

// const add = (x, y) => x + y;

// const toPair = (f) => ([x, y]) => f(x, y);
// const fromPair = (f) => (x, y) => f([x, y]);

// const flip = (f) => (y, x) => f(x, y);

// const curry = f => x => y => f(x,y)

// out1 = fromPair(toPair(add))(1, 2);
// out2 = flip(add)(2, 2);
// let curriedAdd = curry(add)

// const increment = curriedAdd(1);
// out3 = increment(2)

// ***********************************

// const uncurry = (f) => (x, y) => f(x)(y);

const modulo = curry((x, y) => y % x);
const isOdd = modulo(2);

// out = idOdd(3);

const filter1 = curry((f, xs) => xs.filter(f));

const getOdds = filter1(isOdd);
out = getOdds([1, 2, 3, 4, 5]);

const replace = curry((regex, replacement, str) =>
	str.replace(regex, replacement)
);
const replaceVowels = replace(/[AEUIO]/gi, "!");
out2 = replaceVowels("Hey i haave words");

console.log(out2);


const getProp = (prop) => (obj) => {
	if(obj[prop]) {
		return obj[prop]
	}
	else {
		throw new Error('property doesn\'t exist');
	}
};

const getSurnames = getProp('surname')
const getNames = getProp('name')

const arr = [
	{
		name: "asdf",
		surname: "asdf",
	},
	{
		name: "22222",
		surname: "as22222df",
	},
	{
		name: 'slon',
		surname: 'slonich'
	}
];
const result = arr.map(getNames);
console.log(result)
