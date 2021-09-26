"use strict";

const body = document.querySelector("body");

class Counter {
	constructor(init = 0) {
		this.count = init;
		this.display();
	}
	increase = () => { // 바인딩 문제
		this.count += 1;
		console.log(this.count);
	}
	decrease(){
		this.count -= 1;
		console.log(this.count);
	}
	reset(){
		this.count = 0;
	}
	display(){
		body.insertAdjacentHTML('afterbegin',
			`<h1 class='display'>${this.count}</h1>
			<button class='btnInc'>+</button>
			<button class='btnDec'>-</button>
			<button class='btnRe'>reset</button>`);
		// const btnInc =  document.createElement("button")
		// const btnDec =  document.createElement("button")
		// const display =  document.createElement("h1")
		// btnInc.classList.add('btnInc');
		// btnInc.innerHTML = "+";
		// btnDec.classList.add('btnDec');
		// btnDec.innerHTML = "-";
		// display.innerHTML = this.state.count;
		// document.body.appendChild(btnInc);
		// document.body.appendChild(btnDec);
		// document.body.appendChild(display);
	}
}

const init = () => {
	const counter1 = new Counter();
	body.querySelector('.btnInc').addEventListener('click', counter1.increase);
	body.querySelector('.btnDec').addEventListener('click', () => counter1.decrease());
	body.querySelector('.btnRe').addEventListener('click', () => counter1.reset());
}

init();