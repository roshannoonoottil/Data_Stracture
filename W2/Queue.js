class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Queue{
    constructor(value){
        const newNode = new Node(value)
        this.front = newNode
        this.rear = newNode
        this.length = 1
        return this
    }

    enqueue(value){
        const newNode = new Node(value)
        if(!this.front){
            this.front = newNode
            this.rear = newNode
        }else{
            this.rear.next = newNode
            this.rear = newNode
        }
        this.length++
        return this
    }
    dequeue(){
        if(!this.front)return undefined
        let temp = this.front
        if(this.length === 1){
            this.rear = null
        }else{
            this.front = this.front.next
            temp.next = null
        }
        this.length --
        return this
    }

    display(){
        let current = this.front
        while(current){
            console.log(current.value);
            current = current.next
        }
    }
}

let newQueue = new Queue(1)
newQueue.enqueue(2)
newQueue.enqueue(3)

// console.log(newQueue);
newQueue.display()