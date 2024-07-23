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
    // insert(value){
    //     const node = new Node(value);
    //     if(!this.root){
    //         this.root = node;
    //     }else{
    //         this.insertChild(this.root, node);
    //     }
    // }
    
    // insertChild(root, node){
    //     if(node.value < root.value){
    //         if(!root.left){
    //             root.left = node;
    //         }else{
    //             this.insertChild(root.left,node);
    //         }
    //     }else{
    //         if(!root.right){
    //             root.right = node;
    //         }else{
    //             this.insertChild(root.right,node);
    //         }
    //     }
    // }
    insert(value){
        const newNode = new Node(value)
        if(!this.root){
            this.root = newNode
        }else{
            this.insertChild(this.root,newNode)
        }
    }
    insertChild(root, newNode){
        if(newNode.value < root.value){
            if(!root.left){
                root.left = newNode
            }else{
                this.insertChild(root.left,newNode)
            }
        }else{
            if(!root.right){
                root.right = newNode
            }else{
                this.insertChild(root.right,newNode)
            }
        }
    }
}

const newBST = new BST()
newBST.insert(9)
newBST.insert(9)
newBST.insert(6)
newBST.insert(4)

console.log(newBST);