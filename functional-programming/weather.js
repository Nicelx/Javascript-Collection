// require('dotenv').config()

const API = process.env.API;
// const ZIP_CODE = "394062";
const ZIP_CODE = 55455;
const url = `api.openweathermap.org/data/2.5/weather?zip=${ZIP_CODE}&appid=${API}`;
const url2 = `api.openweathermap.org/data/2.5/weather?q=London&appid=${API}`;


but.addEventListener('click', () => alert('asdf'))
fetch(url)
	.then((response) => response.json())
	.then(console.log)
	.catch(console.error);
