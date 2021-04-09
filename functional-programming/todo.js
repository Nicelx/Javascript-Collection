// import {curry} from 'ramda'
// import { curry } from 'ramda';
const {curry, compose} = R

const app = document.getElementById('app');
const inputToDoEl = app.querySelector('.controls__input')
const buttonToDoEl = app.querySelector('.controls__button')
const toDoListEl = app.querySelector('.todo-list')

buttonToDoEl.addEventListener('click', () => {
	const el = document.createElement('p');
	el.innerHTML = inputToDoEl.value;
	toDoListEl.appendChild(el)
})