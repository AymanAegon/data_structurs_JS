class Node {
	constructor(value){
		this.value = value;
		this.bellow = null;
	}
}
class Stack {
	constructor(){
		this.arr = [];
		this.length = 0;
	}
	push(value){
		this.arr.push(value);
		this.length++;
	}
	pop(){
		if (this.length == 0) return 'Empty';
		this.arr.pop();
		this.length--;
	}
	peek(){
		return this.arr[this.length-1];
	}
	isEmpty(){
		if (this.length === 0) return true;
		return false;
	}
}
// const myStack = new Stack();
// myStack.push('google');
// myStack.push('Udemy');
// myStack.push('discord');
