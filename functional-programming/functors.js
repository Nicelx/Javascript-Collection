const Box = (x) => ({
	map: (f) => Box(f(x)),
	chain: f => f(x),
	fold: f => f(x),
	inspect: `Box(${x})`,
});

const first = xs => xs[0]

const halfTheFirstLargeNumber_ = xs => {
	const found = xs.filter(x => x >= 20)
	const answer = first(found)/2
	return `The answer is ${answer}`
}

const halfTheFirstLargeNumber = xs => 
	Box(xs)
	.map(xs => xs.filter(x=> x >= 20))
	.map(found => first(found)/2)
	.fold(answer => `The answer is ${answer}`)

const res = halfTheFirstLargeNumber([1,4,50])
console.log(res)

const nextCharForNumberString_ = (str) => {
	const trimmed = str.trim();
	const number = parseInt(trimmed);
	const nextNumber = new Number(number + 1);
	return String.fromCharCode(nextNumber);
};

const nextCharForNumberString = (str) => 
	Box(str)
	.map(x => x.trim())
	.map(trimmed => parseInt(trimmed, 10))
	.map(number => new Number(number + 1))
	.fold(String.fromCharCode)


const result = nextCharForNumberString(" 64 ");

// const result = () =>
// 	Box('a')
// 	.map(x => x.toUpperCase())
// 	.map(x => String.fromCharCode(x))

console.log(result);



/*
practice

// Ex1: Using Box, refactor moneyToFloat to be unnested.
// =========================
const moneyToFloat_ = str =>
  parseFloat(str.replace(/\$/, ''))

const moneyToFloat = str => Box(str).map(str => str.replace(/\$/, '')).fold(str => parseFloat(str))




// Ex2: Using Box, refactor percentToFloat to remove assignment
// =========================
const percentToFloat_ = str => {
  const float = parseFloat(str.replace(/\%/, ''))
  return float * 0.0100
}
const percentToFloat = str => Box(str).map(str => str.replace(/\%/, '')).map(str => parseFloat(str)).fold(float => float * 0.0100)





// Ex3: Using Box, refactor applyDiscount (hint: each variable introduces a new Box)
// =========================
const applyDiscount_ = (price, discount) => {
  const cents = moneyToFloat(price)
  const savings = percentToFloat(discount)
  return cents - (cents * savings)
}

const applyDiscount = (price, discount) => 
	Box(moneyToFloat(price))
	.fold(cents => 
		Box(percentToFloat(discount))
		.fold(savings => cents - (cents*savings))
	)
	
const applyDiscount = (price, discount) => 
	Box(moneyToFloat(price))
	.chain(cents => 
		Box(percentToFloat(discount))
		.map(savings => cents - (cents*savings))   // Box(Box(x))
	)
	.fold(x => x)


*/