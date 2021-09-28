"use strict";
import Counter from './Counter.js';

const App = () => {

	const list = document.querySelector(".counterList");
	const btnAdd = document.querySelector(".btnAdd");

	let newID = 0;
	let COUNTERS = [];

	const counterTemplete = (id, value) => {
		list.insertAdjacentHTML('beforeend',
		`<li id=${id}>
			<h1 class='display'>${value}</h1>
			<button class='btnInc'>+</button>
			<button class='btnDec'>−</button>
			<button class='btnRe'>Reset</button>
			<button class='btnDel'>×</button>
		</li>`);
	}

	const loadCounters = () => {
        const loadedCounters = localStorage.getItem("counters");
        if (loadedCounters != null) {
            const parsedCounters = JSON.parse(loadedCounters);
            parsedCounters.forEach((counter) => {
                paintCounters(counter.id, counter.counter);
			});
			newID = ++parsedCounters[parsedCounters.length-1].id;
		}
	}

	const saveCounters = () => {
		localStorage.setItem("counters", JSON.stringify(COUNTERS));
	}
	
	const paintCounters = (id, counter) => {
		const counterOBJ = {
			id: id,
			counter: new Counter(counter.value),
		}
		COUNTERS.push(counterOBJ);
		counterTemplete(id, counter.value);
	}

	const addCounter = () => {
		const counterOBJ = {
			id: newID,
			counter: new Counter(),
		}
		COUNTERS.push(counterOBJ);
		counterTemplete(newID, 0);
		saveCounters();
		newID++;
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
		saveCounters();
	}
	
	list.addEventListener('click', btnControl);
	btnAdd.addEventListener('click', addCounter);
	loadCounters();
}

App();