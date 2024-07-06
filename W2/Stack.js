class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}
class Stack{
    constructor(value){
        const newNode = new Node(value)
        this.top = newNode;
        this.length = 1
        return this
    }
    push(value){
        const newNode = new Node(value)
        if(!this.top){
            this.top = newNode
        }else{
            newNode.next = this.top
            this.top = newNode
        }
        this.length ++
        return this

    }
    pop(){

        let temp = this.top
        if(!this.top) return undefined
        this.top = this.top.next
        temp.next = null
        this.length --
        return temp
    }
}

let newStack = new Stack(1)
newStack.push(2)
newStack.push(3)
newStack.pop()

console.log(newStack);