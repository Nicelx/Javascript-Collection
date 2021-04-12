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

const tryCatch = (f) => {
	try {
		return Right(f());
	} catch (e) {
		return Left(e);
	}
};
const parseJSON = (contents) => tryCatch(() => JSON.parse(contents));
const readFileSync = (path) => tryCatch(() => fs.readFileSync(path));
// const instead = string => tryCatch(() => string.toUpperCase())

const getPort = () =>
	readFileSync("config.json") //Right('')
		.chain((contents) => parseJSON(contents)) //Right(Right(contents))
		.map((config) => config.port)
		.fold(
			() => 8080,
			(x) => x
		);

const result = getPort();
console.log(result);

const fromNullable = (x) => (x != null ? Right(x) : Left(null));
// practise

// Ex1: Refactor streetName to use Either instead of nested if's
// =========================
const street_ = (user) => {
	const address = user.address;

	if (address) {
		return address.street;
	} else {
		return "no street";
	}
};

const street = (user) =>
	fromNullable(user.address) //Right/Left address
		.map((address) => address.street)
		.fold(
			() => "no street",
			(x) => x
		);

// Ex1: Refactor streetName to use Either instead of nested if's
// =========================
const streetName_ = (user) => {
	const address = user.address;

	if (address) {
		const street = address.street;

		if (street) {
			return street.name;
		}
	}

	return "no street";
};

const streetName = (user) =>
	fromNullable(user.address)
		.chain((address) => fromNullable(address.street))
		.map((street) => street.name)
		.fold(
			() => "no street",
			(x) => x
		);

// Ex2: Refactor parseDbUrl to return an Either instead of try/catch
// =========================
const parseDbUrl_ = (cfg) => {
	try {
		const c = JSON.parse(cfg); // throws if it can't parse
		return c.url.match(DB_REGEX);
	} catch (e) {
		return null;
	}
};

const parseDbUrl = (cfg) =>
	Right(cfg)
	.chain(c => tryCatch(() => JSON.parse(c)))
	// tryCatch(() => JSON.parse(cfg))
		.map((c) => c.url.match(DB_REGEX))
		.fold(
			() => null,
			(x) => x
		);



	// Ex3: Using Either and the functions above, refactor startApp
// =========================
const startApp_ = cfg => {
	const parsed = parseDbUrl(cfg)
   
	if(parsed) {
	  const [_, user, password, db] = parsed
	  return `starting ${db}, ${user}, ${password}`
	} else {
	  return "can't get config"
	}
   }
   
   const startApp = cfg => 
   	fromNullable(parseDbUrl(cfg))
	.map(([_, user, password, db]) => `starting ${db}, ${user}, ${password}`)
	.fold(() => 'cant"t get config', x=> x)