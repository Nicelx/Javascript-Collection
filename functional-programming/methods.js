const fs = require("fs");
const { Task, Either, Id } = require("./types");
const { Right, Left, fromNullable } = Either;
const { List, Map } = require("immutable-ext");

Task.of(2)
	.map((two) => two * 2)
	.fork(console.log, console.log);
Id.of(2)
	.map((two) => two * 2)
	.extract();
Either.of(2)
	.map((two) => two * 2)
	.fold(console.log, console.log);
List.of(2)
	.map((two) => two * 2)
	.toJS();

const htttpGet = (path, params) => Task.of(`${path}: result`);

const getUser = (x) => htttpGet("/user", { id: x });
const getTimeline = (x) => htttpGet(`/timelint/${x}`, {});
const getAds = () => htttpGet("/ads", {});

Promise.all([getUser, getTimeline, getAds]);
// Promise([result, result, result])

// [getUser, getTimeline, getAds].map(f =>f())

// [pr1,pr2,pr3]   [Promise] -> Promise([]) - traverse

List([getUser, getTimeline, getAds])
	.traverse(Task.of, (f) => f())
	.fork(console.log, (x) => console.log(x.toJS()));

const greaterThan5 = (x) => (x.length > 5 ? Right(x) : Left("not greater than 5"));

const looksLikeEmail = (x) => (x.match(/@/gi) ? Right(x) : Left("not an email"));

const email = "blahh@yadda.com";
const res = List([greaterThan5, looksLikeEmail]).traverse(Either.of, (v) => v(email));
// [Either, Either] .. Either([])


res.fold(console.log, x => console.log(x.toJS()))

Either.of(List.of(4)).map(xs => Either.of(3))
// Either(List(Either))
// Either(Either(List))
// Either(List)


// 

const eitherToTask = e =>
  e.fold(Task.rejected, Task.of)

const fake = id =>
  ({id: id, name: 'user1', best_friend_id: id + 1})

const Db = ({
  find: id =>
    Task((rej, res) =>
      setTimeout(() =>
        res(id > 2 ? Right(fake(id)) : Left('not found')),
        100))
})

const send = (code, json) =>
  console.log(`sending ${code}: ${JSON.stringify(json)}`)

Db.find(3)  // Task(Either(user))
.chain(eitherToTask)  //Task(User)
.chain(u => Db.find(u.best_friend_id))
.chain(eitherToTask)
.fork(error => send(500, {error}),
                    u => send(200, u))
