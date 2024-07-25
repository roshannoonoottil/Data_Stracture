class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null   
     }
}
class BST{
    constructor(){
        this.root = null
    }
    isEmpty(){
        return this.root === null
    }
    insert(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.root = newNode
        }else{
            this.insetNode(this.root, newNode)
        }
    }
    insetNode(root, newNode){
        if(newNode.value < root.value){
            if(!root.left){
                root.left = newNode
            }else{
                this.insetNode(root.left, newNode)
            }
        }else{
           if(!root.right){
            root.right = newNode
           }else{
            this.insetNode(root.right, newNode)
           }
        }
    }
}

let nBST = new BST()
nBST.insert(9)
nBST.insert(6)
nBST.insert(8)
nBST.insert(10)

console.log(nBST);