class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedList{
    constructor(value){
        const newNode = new Node(value)
        this.head= newNode
        this.tail= newNode
        this.length=1
    }
    // push
    push(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    // pop

    pop(){
        if(!this.head)return undefined
        let temp = this.head
        let pre = this.tail

        while(temp.next){
            pre = temp
            temp = temp.next
        }
        this.tail = pre
        this.tail.next = null
        this.length--
        if(this.length === 0){
            this.head = null
            this.tail = null
        }
        return temp
    }

    // unshift

    unshift(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

    shift(){
        if(!this.head) return undefined
        let temp = this.head
        this.head = this.head.next
        this.length--
        if(this.length==0){
            this.tail = null
        }
        temp.next = null
        return temp
    }

    get(index){
        if(index < 0 || index >= this.length) return undefined
        let temp = this.head
        for(let i=0;i< index; i++){
            temp = temp.next
        }
        return temp
    }

    set(index,value){
        let temp = this.get(index)
        if(temp){
            temp.value = value
            return true
        }
        return false
    }

    insert(index,value){
        if(index < 0 || index > this.length) return false
        if(index === this.length) return this.push(value)
        if(index === 0) return this.unshift(value)
            
            const newNode = new Node(value)
            const temp = this.get(index - 1)
            newNode.next = temp.next
            temp.next = newNode
            this.length ++
            return true
    }

    remove(index){
        if(index < 0 || index >= this.length) return undefined
        if(index === 0) return this.shift()
        if(index === this.length-1) return this.pop()

        const before = this.get(index - 1)
        const temp = before.next

        before.next = temp.next
        temp.next = null
        this.length --
        return temp
    }

    reverse(){
        let temp = this.head
        this.head = this.tail
        this.tail = temp

        let next = temp.next
        let prev = null
         for( let i = 0; i < this.length; i++){
            next = temp.next
            temp.next = prev
            prev = temp
            temp = next
         }
         return this
    }
}

let myLinkedList = new LinkedList(1)

console.log("Link List : ",  myLinkedList);

console.log("after push : ",  myLinkedList.push(2));

// console.log("after pop : ",  myLinkedList.pop());

// console.log("after unshift : ",  myLinkedList.unshift(4));
console.log("insert : ",  myLinkedList.insert(1,1));

console.log("after insert : ",  myLinkedList);

console.log("remove : ",  myLinkedList.remove(1));

console.log("after remove : ",  myLinkedList);

console.log("reverse : ",  myLinkedList.reverse());







