class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        
    }

}
class LinkedList{
    constructor(value){
        const newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
        this.length = 1

    }

    Push(value) {
    let newNode = new Node(value)
    if(!this.head){
        this.head = newNode
        this.tail = newNode
    }else{
        this.tail.next = newNode
       
        this.tail = newNode
        
    }
    this.length ++
    return this    
    }

    Sum(){
        let sum = 0
        let currrent = this.head
        while(currrent){
            sum += currrent.value
            currrent = currrent.next
        }
        return sum
    }

    printList() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
//

}

let NewLinkedList = new LinkedList(2)

// console.log(NewLinkedList);

NewLinkedList.Push(3)

// console.log(NewLinkedList.Push(5));

// console.log(NewLinkedList.Sum());

//NewLinkedList.printList()


console.log(NewLinkedList.Sum()); 





