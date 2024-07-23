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
            this.insertNode(this.root, newNode)
        }
    }
    insertNode(root, newNode){
        if(newNode.value < root.value){
            if(!root.left){
                root.left = newNode
            }else{
                this.insertNode(root.left, newNode)
            }
        }else{
            if(!root.right){
                root.right = newNode
            }else{
                this.insertNode(root.right, newNode)
            }
        }
    }
    search(root,value){
        if(!root){
            return false
        }else{
            if(root.value === value){
                return true
            }else if(value < root.value){
                return this.search(root.left, value)
            }else{
                return this.search(root.right, value)
            }
        }
    }
    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    }
}

let newBST = new BST()
newBST.insert(10)
newBST.insert(5)
newBST.insert(15)
newBST.insert(2)
newBST.insert(7)
newBST.insert(12)
newBST.insert(17)

console.log(newBST);
console.log(newBST.search(newBST.root, 6));