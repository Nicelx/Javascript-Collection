let out;

const curry = (f) => (x) => (y) => f(x, y);

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
const idOdd = modulo(2);

// out = idOdd(3);


const filter = curry((f, xs) => xs.filter(f))
const getOdds = filter(isOdd)
out = getOdds([1,2,3,4,5])

console.log(`out 1 = ${out}`);

