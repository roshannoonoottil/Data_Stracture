class Node{
    constructor(value){
        this.value = value
        this.next = null
        // this.prev = null
    }
    
}


class LinkedList{
    constructor(value){
        const newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
        this.length = 1
    }

    push(value){
    
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
    
}

let newLinkList = new LinkedList(1)

// console.log(newLinkList);

console.log(newLinkList.push(2));
