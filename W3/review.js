class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
class BST{
    constructor(){
        this.root =null
    }
    insert(value){
        const newNode = new Node(value)
        if(!this.root){
            this.root = newNode
        }else{
            this.insetNode(this.root,newNode)
        }
    }
    insetNode(root,newNode){
        if(newNode.value <root.value){
            if(!root.left){
                root.left = newNode
            }else{
                this.insetNode(root.left,newNode)
            }
        }else{
            if(!root.right){
                root.right = newNode
            }else{
                this.insetNode(root.right,newNode)
            }
        }
    }
    //Traversal

    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)    
        }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
            
        }
    }
}

let newBST = new BST()

newBST.insert(8)
newBST.insert(9)
newBST.insert(6)
newBST.insert(10)
newBST.insert(7)

console.log(newBST);
newBST.preOrder(newBST.root)
