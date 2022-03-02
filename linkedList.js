class Node {
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class LinkedList {
    constructor(value){
        this.head={
            value: value,
            next: null
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
        this.tail = newNode;
        this.length++;
    }
    prepend(value){
        const newNode = new Node(value)
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }
    insert(index,value){
        if (index==0) return this.prepend(value);
        if (index>=this.length) return this.append(value);
        const newNode = new Node(value);
        newNode.next = this.getNode(index-1).next;
        this.getNode(index-1).next = newNode;
        this.length++;
    }
    remove(index){
        if (index>=this.length) index=this.length-1;
        if (index==0) {
            this.head=this.head.next;
        }else{
            this.getNode(index-1).next = this.getNode(index+1);
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
// let list = new LinkedList(10);
// list.append(5);
// list.append(16);
// list.prepend(1);
// list.insert(3,99);
// console.log(list.print());
// list.remove(1);
// console.log(list.print());
// list.reverse();
// console.log(list.print());