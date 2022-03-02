class Node {
	constructor(value){
		this.value = value;
		this.bellow = null;
	}
}
class Stack {
	constructor(){
		this.bottom = null;
		this.top = null;
		this.length = 0;
	}
	push(value){
		const newNode = new Node(value);
		if(this.length == 0){
			this.bottom = newNode;
			this.top = newNode;
		}else{
			const temp = this.top;
			this.top = newNode;
			this.top.bellow = temp;
		}
		this.length++;
	}
	pop(){
		if (this.top==null) return null;
		if (this.top===this.bottom) this.bottom = null;
		this.top = this.top.bellow;
		this.length--;
	}
	peek(){
		return this.top.value;
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
