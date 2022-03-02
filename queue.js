class Node {
	constructor(value){
		this.value = value;
		this.next = null;
	}
}
class Queue {
	constructor(){
		this.first = null;
		this.last = null;
		this.length = 0;
	}
	peek(){
		return this.first;
	}
	enqueue(value){
		const newNode = new Node(value);
		if(this.length==0){
			this.last = newNode;
			this.first = newNode;
		}else{
			this.last.next = newNode;
			this.last = newNode;
		}
		this.length++;
	}
	dequeue(){
		if(this.length==0) return 'The queue is empty !!';
		if (this.first===this.last) this.last = null;
		this.first = this.first.next;
		this.length--;
	}
	isEmpty(){
		if (this.length === 0) return true;
		return false;
	}
}
// const myQueue = new Queue();
// myQueue.enqueue('Joy');
// myQueue.enqueue('Matt');
// myQueue.enqueue('Pavel');
// myQueue.enqueue('Samir');