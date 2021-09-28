export default class Counter {
	constructor(init = 0) {
		this.value = init;
	}
	increase = () => {
		this.value++;
	}
	decrease(){
		this.value--;
	}
	reset(){
		this.value = 0;
	}
}