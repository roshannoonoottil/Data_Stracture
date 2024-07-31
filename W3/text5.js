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
        const newNode =  new Node(value)
        if(!this.root){
            this.root = newNode
        }else{
            this.insertNode(this.root, newNode)
        }
    }
    insertNode(root,newNode){
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
    inOrder(root){
        let arr = []
        function traverse(node){
        if(node){
            traverse(node.left)
            arr.push(node.value)
            traverse(node.right)
        }
    }
    traverse(root)
        return arr
    }
}

let bst = new BST()
bst.insert(5)
bst.insert(3)
bst.insert(4)
bst.insert(7)
bst.insert(6)

console.log(bst.inOrder(bst.root));

