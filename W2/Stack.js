class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class stack{
    constructor(value){
        const newNode = new Node(value)
        this.top = newNode
        this.length = 1
    }

push(value){
    const newNode = new Node(value)
    if(!this.top){
        this.top = newNode
    }else{
        newNode.next = this.top
        this.top = newNode
    }
    // this.length ++
    return this
}
pop(){
    if(!this.top) return undefined
    let temp = this.top
    this.top = this.top.next
    temp.next = null
    this.length --
    return this
}
    
}

let newStack = new stack(1)
newStack.push(3)
// newStack.pop()
// newStack.pop()
 newStack.push(4)



console.log(newStack);