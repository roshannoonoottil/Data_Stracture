// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null
//     }
// }
// class stack{
//     constructor(value){
//     const newNode = new Node(value) 
//     this.top = newNode
//     this.length = 1
//     }

//     push(value){
//         const newNode = new Node(value)
//         if(!this.top){
//             this.top = newNode
//         }else{
//             newNode.next = this.top
//             this.top = newNode
//         }
//     this.length ++
//     return this

//     }
//     pop(){
//         if(this.length ===0)return undefined
//         let temp = this.top
//         this.top = this.top.next
//         this.top.next = null
//         this.length --
//         return this
//     }
// }

// let newStack = new stack(1)
// newStack.push(2)
// newStack.pop()
// console.log(newStack);


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
    }

    enqueue(value){
        const newNode = new Node(value)
        if(!this.first){
            this.first = newNode
            this.last = newNode
        }else{
            this.last.next = newNode
            this.last = newNode

        }
        this.length ++
        return this
    }
    dequeue(){
        if(this.first) return undefined
        let temp = this.first
        if(this.length === 1){
            this.last = null
        }else{
            this.first = this.first.next
            this.next = null
        }
        this.length --
        return temp
    }
}

let newQueue = new Queue(1)
console.log(newQueue);