
class Node {
	constructor(value){
		this.value=value;
		this.next=null;
		this.previous=null;
	}
}
class DoublyLinkedList {
	constructor(value){
		this.head={
			value: value,
			next: null,
			previous: null
		}
		this.tail=this.head;
		this.length=1;
	}
	getNode(index){
		var k=0;
		let currentNode = this.head;
		while(k!=index){
			currentNode = currentNode.next;
			k++;
		}
		return currentNode;
	}
	print(){
		let arr=[];
		let currentNode = this.head;
		while(currentNode !== null){
			arr.push(currentNode.value);
			currentNode = currentNode.next;
		}
		return arr;
	}
	append(value){
		const newNode = new Node(value)
		this.tail.next = newNode;
		newNode.previous = this.tail;
		this.tail = newNode;
		this.length++;
	}
	prepend(value){
		const newNode = new Node(value)
		newNode.next = this.head;
		this.head.previous = newNode;
		this.head = newNode;
		this.length++;
	}
	insert(index,value){
		if (index==0) return this.prepend(value);
		if (index>=this.length) return this.append(value);
		const leader = this.getNode(index-1);
		const follower = leader.next;
		const newNode = new Node(value);
		newNode.next = leader.next;
		leader.next = newNode;
		newNode.previous = follower.previous;
		follower.previous = newNode;
		this.length++;
	}
	remove(index){
		if (index>=this.length) index=this.length-1;
		if (index==0) {
			this.head = this.head.next;
			this.head.previous = null;
		}else if (index==this.length-1) {
			this.tail = this.tail.previous;
			this.tail.next = null;
		}else{
			const leader = this.getNode(index).previous;
			const follower = this.getNode(index).next;
			leader.next = follower;
			follower.previous = leader;
		}
		this.length--;
	}
	reverse(){
		var temp;
		for (var i = 0; i < parseInt(this.length/2); i++) {
			temp=this.getNode(i).value;
			this.getNode(i).value = this.getNode(this.length-1-i).value;
			this.getNode(this.length-1-i).value = temp;
		}
	}
}
// let list = new DoublyLinkedList(10);
// list.append(5);
// list.append(16);
// list.prepend(1);
// list.insert(3,99);
// console.log(list.print());
// list.remove(0);
// console.log(list.print());
// list.reverse();
// console.log(list.print());
