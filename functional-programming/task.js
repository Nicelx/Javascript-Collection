const { Task } = require("./types");
const { compose } = require("ramda");
const fs = require("fs");

const Box = (f) => ({
	map: (g) => Box(compose(f, g)),
	fold: f,
});

// console.log(Box(() => 2).map(two => two + 1).fold())
//////////////////////////////

Task.of(2).map((two) => two + 1); // Task(2)

let result = Task((rej, res) => res(2))
	.map((two) => two + 1)
	.chain((three) => Task.of(three + 1))
	.map((four) => four * 2);
// result.fork();

// result.fork(console.error, console.log)
// console.log(result);
////////////////////////////////////////

const app_ = () =>
	fs.readFile("config.json", "utf-8", (err, contents) => {
		console.log(err, contents);
		if (err) throw err;

		const newContents = contents.replace(/3/g, "6");

		fs.writeFile("config1.json", newContents, (err, _) => {
			if (err) throw err;
			console.log("success!");
		});
	});

const readFile = (path, enc) =>
	Task((rej, res) => 
		fs.readFile(path, enc, (err, contents) => 
			(err ? rej(err) : res(contents))));

const writeFile = (path,contents) =>
	Task((rej, res) => 
		fs.writeFile(path, contents, (err, contents) => 
			(err ? rej(err) : res(contents))));


const app = () => 
	readFile("config.json", "utf-8")  // Task(contents)
	.map(contents => contents.replace(/3/g, "6"))
	.chain(newContents => writeFile('config1.json', newContents))

// app();
app().fork(console.error, () => console.log('success'))

// practise

// SETUP
// =========================
const posts = {1: {title: "First"}, 2: {title: "Second"}}

const comments = {First: [{id: 1, body: "Brilliant!"}], Second: [{id: 2, body: "Unforgivable"}]}

const getPost = id =>
  new Task((rej, res) =>
    setTimeout(() => posts[id] ? res(posts[id]) : rej('not found'), 200))

const getComments = post =>
  new Task((rej, res) =>
    setTimeout(() => res(comments[post.title]), 200))


// Ex1: Use the result of getPost() and upperCase the title. Posts and comments are defined above and look like {title: String} and {id: Int, body: String} respectively.
// =========================
const postTitle = id => // uppercase the title of the result of getPost()
  getPost(id)
	.map(obj => obj.title)
	.map(title => title.toUpperCase())