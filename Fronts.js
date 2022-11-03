class SLLNode {
    constructor(val) {
        this.value=val; 
        this.next=null;
    }
}

class SLL {
    constructor() {
        this.head=null;
    }

//Add Front

//Write a method that accepts a value and create a new node,
//assign it to the list head, and return a pointer to the new head node.
    addFront(value) {
        var newNode=new SLLNode(value);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }

    //Remove Front

//Write a method to remove the head node and return the new list head node.
//If the list is empty, return null.
    removeFront() {
        var removeNode = this.head;
        this.head = removeNode.next;
        removeNode.next = null;
        return this.head;
    }

//Front

//Write a method to return the value (not the node) at the head of the list.
//If the list is empty, return null.

    front() {
        if(this.head == null) {
            return null;
        } else {
            return this.head.value;
        }
    }
}

var mySLL = new SLL();
console.log(mySLL.front());
mySLL.addFront(10);
console.log(mySLL.front());
mySLL.addFront(5);
mySLL.addFront(3);






