class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Queue{
    constructor(value){
        const newNode = new Node(value)
        this.first = newNode
        this.last = newNode
        this.length = 1
        return this
    }
    enqueue(value){
        const newNode = new Node(value)
        if(!this.first){
            this.first = newNode
            this.last = newNode
        }else{
            this.last.next  = newNode
            this.last = newNode
        }
        this.length ++
        return this
    }
    dequeue(){
        if(!this.first) return undefined
        let temp = this.first
        if(this.first === 1){
            this.last = null
        }else{
            this.first = this.first.next
            temp.next = null
        }
        this.length --
        return temp
    }
    display(){
        let current = this.first
        while(current){
            console.log(current.value);
            current = current.next
        }
    }
}

let newQueue = new Queue(1)

newQueue.enqueue(5)
newQueue.enqueue(7)
newQueue.dequeue()
newQueue.dequeue()
newQueue.enqueue(9)

newQueue.display()

//console.log(newQueue);