//LINKED LISTS

//Node containing data and reference to the next node
class Node{
    constructor(data, next){
        this.data = data; // data that needs to be stored in the list
        this.next = next; // address/reference to the next node in the list
    }
}

// Class to hold our data structure(The linkedlist itself)
class LinkedList{
    constructor(){
        this.head = null; // First node on the LinkedList
        this.tail = null; // Last node on the LinkedList
    }



// Add an element at the start of the list. Algorithmic Complexity - O(1) = constant time
prepend(value){
// create a new node
    const newNode = new Node(value, this.head);
        // Change head to be the newly created node
        this.head = newNode;
        //Check if the LinkedList was empty. If the LinkedList was empty, the new node will be the tail and the head.
        this.tail = this.tail ? this.tail : newNode;

        return this;
    }

//Add an element at the end of the list. Algorithmic Complexity = O(1)
append(value){
    //create a new node
    const newNode = new Node(value);
        
        //Check if the LinkedList is empty.
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;

            return;
        }

        //Make the last  item refer to the new node
        this.tail.next = newNode;
        //Make the newly added node the tail node
        this.tail = newNode;

}

// Traverse a LinkedList. Visit each node of the LinkedList. Algorithmic Complexity = O(n)
traverse() {
    let currentNode = this.head

    while(currentNode){
        console.log(currentNode.data);
        currentNode = currentNode.next;
    }
}

//Accessing an element in the LinkedList. Algorithmic Complexity = O(n)
find(value){
    let currentNode = this.head;

    while(currentNode){
        if(currentNode.data === value){
            return currentNode;
        }
        currentNode = currentNode.next;
    }
    return null;
}

//Delete an element from the start of an array. Algorithmic Complexity = O(1)
deleteHead(){
    //check if the head is empty. If it is empty, we do not need to delete anything.
    if(!this.head){
        return;
    }

    //if there is more than one node in the LinkedList

    if(this.head.next){
        this.head = this.head.next;
    } else {
        this.head = null;
        this.tail = null;
    }
}

//Transform the LinkedList to an array.
toArray(){
    const items = [];
    let currentNode = this.head;

    while(currentNode){
        items.push(currentNode.data);
        currentNode = currentNode.next;
    }
    

    return items;
}

}

const list = new LinkedList();

list.append(4);
list.append(3);
list.append(7);
list.append(6);
console.log(list.toArray());

list.prepend(1);
console.log(list.toArray());

list.deleteHead();
console.log(list.toArray());




