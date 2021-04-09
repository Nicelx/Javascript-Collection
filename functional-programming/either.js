const fs = require("fs");


const Right = (x) => ({
	chain: (f) => f(x),
	map: (f) => Right(f(x)),
	fold: (f, g) => g(x),
	inspect: () => `Right(${x})`,
});

const Left = (x) => ({
	chain: (f) => Left(x),
	map: (f) => Left(x),
	fold: (f, g) => f(x),
	inspect: () => `Left(${x})`,
});

const fromNullable = (x) => (x != null ? Right(x) : Left());

const findColor = (name) =>
	fromNullable(
		{
			red: "#ff4444",
			blue: "#3b5998",
			yellow: "#fff68f",
		}[name]
	);

const res = () =>
	findColor("red")
		.map((x) => x.toUpperCase())
		.map((x) => x.slice(1))
		.fold(
			() => "no color!",
			(color) => color
		);

// console.log(res());

// refactoring using the Either Monad

const getPort_ = () => {
	try {
		const str = fs.readFileSync("./curry.js", 'utf8');
		console.log(str)
		const config = JSON.parse(str);
		return config.port;
	} catch (e) {
		return 3000;
	}
};


const tryCatch = (f) => {
	try {
		return Right(f());
	} catch (e) {
		return Left(e);
	}
};

const readFileSync = path => tryCatch(() => fs.readFileSync(path))

const getPort = () =>
		readFileSync('config.json')
		.map((contents) => JSON.parse(contents))
		.map((config) => config.port)
		.fold(
			() => 8080,
			(x) => x
		);

const result = getPort();
console.log(result);
