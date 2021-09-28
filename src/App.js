"use strict";
import Counter from './Counter.js';

const App = () => {

	const list = document.querySelector(".counterList");
	const btnAdd = document.querySelector(".btnAdd");

	let newID = 0;
	let COUNTERS = [{
		id: newID,
		counter: new Counter(),
	}];

	const addCounter = () => {
		const counterOBJ = {
			id: ++newID,
			counter: new Counter(),
		}
		COUNTERS.push(counterOBJ);
		list.insertAdjacentHTML('beforeend',
		`<li id=${newID}>
			<h1 class='display'>0</h1>
			<button class='btnInc'>+</button>
			<button class='btnDec'>−</button>
			<button class='btnRe'>Reset</button>
			<button class='btnDel'>×</button>
		</li>`);
	}

	const btnControl = (e) => {
		const button = e.target.innerHTML;
		const targetLi = e.target.parentNode;
		const display = targetLi.children[0];
		const index = COUNTERS.findIndex((counter) => counter.id == targetLi.id);
		const counter = COUNTERS[index].counter;
		
		if (button == '+') {
			counter.increase();
			display.innerHTML = counter.value;
		}
		if (button == '−') {
			counter.decrease();
			display.innerHTML = counter.value;
		}
		if (button == 'Reset') {
			counter.reset();
			display.innerHTML = counter.value;
		}
		if (button == '×') {
			list.removeChild(targetLi);
			const newCounter = COUNTERS.filter((counter) => {
				return counter.id != targetLi.id;
			});
			COUNTERS = newCounter;
		}
	}
	
	list.addEventListener('click', btnControl);
	btnAdd.addEventListener('click', addCounter);
}

App();