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
search(root, value){
    if(!root){
        return false
    }else{
        if(value === root.value){
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
min(root){
    if(!root.left){
        return root.value
    }else{
        return this.min(root.left)
    }
}
max(root){
    if(!root.right){
        return root.value
    }else{
        return this.max(root.right)
    }
}
delete(value){
    this.root = this.deleteNode(this.root, value)
}
deleteNode(root, value){
    if(!root) return root
    if(value < root.value){

        root.left = this.deleteNode(root.left, value)

    }else if(value > root.value){

        root.right = this.deleteNode(root.right, value)

    }else{
        if(!root.left && !root.right){
            return null
        }
        if(!root.left){
            return root.right
        }
        if(!root.right){
            return root.left
        }
        root.value = this.min(root.right)
        root.right = this.deleteNode(root.right, root.value)
    }
    return root

}



}

let nBST = new BST()
nBST.insert(9)
nBST.insert(6)
nBST.insert(8)
nBST.insert(10)
console.log("-------------------");
console.log(nBST.search(nBST.root, 6)); 
console.log("---------preOrder----------");
nBST.preOrder(nBST.root)
console.log("-------------------");
console.log(nBST);
console.log("--------inOrder-----------");
nBST.inOrder(nBST.root)
console.log("--------postOrder-----------");
nBST.postOrder(nBST.root)
console.log("--------Min & Max-----------");
console.log(nBST.min(nBST.root));
console.log(nBST.max(nBST.root));
console.log("==============");
nBST.delete(6)
console.log(nBST);
