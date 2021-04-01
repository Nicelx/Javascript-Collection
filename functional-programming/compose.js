const { curry, compose } = require("ramda");

const add = (x, y) => x + y;

const toUpper = str => str.toUpperCase();

const exclaim = str => str + '!'

const first = xs => xs[0]

// const compose = (f,g) => x => f(g(x))

// const shout = compose(first, compose(exclaim, toUpper))
// const shout = compose(first, exclaim, toUpper)

const loudFirst = compose(toUpper, first)
const shout = compose(exclaim, loudFirst)

console.log(shout('tears'))