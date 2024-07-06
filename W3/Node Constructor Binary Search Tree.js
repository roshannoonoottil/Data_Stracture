class Node{
    constructor(value){
        this.value = value;
        this.left = null
        this.right = null
    }
}
class BST{
    constructor(){
        this.root = null
    }
    insert(value){
        const newNode = new Node(value)
        if(this.root === null){
            this.root = newNode
            return this
        }
        let temp = this.root
        while(true){
            if(newNode.value === temp.value) return undefined
            if(newNode.value < temp.value){
                if(temp.left === null){
                    temp.left = newNode
                    return this
                }
                temp = temp.left
            }else{
                if(temp.right === null){
                    temp.right = newNode
                    return this
                }
                temp = temp.right
            }
        }
    }
}

let myTree = new BST()

myTree.insert(10)
myTree.insert(5)
myTree.insert(8)
myTree.insert(2)
myTree.insert(9)
myTree.insert(13)
myTree.insert(5)



console.log(myTree);