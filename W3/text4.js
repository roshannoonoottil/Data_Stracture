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
  search(root, value){
    if(!root){
        return false
    }else{
        if(root.value === value){
            return true
        }else if(value < root.value){
            return this.search(root.left,value)
        }else{
            return this.search(root.right,value)
        }
    }
  }
  min(root){
    if(!root.left) return root.value
    return this.min(root.left)
  }
  max(root){
    if(!root.right) return root.value
    return this.max(root.right)
  }
}

let nbst = new BST()
nbst.insert(6)
nbst.insert(7)
nbst.insert(5)
nbst.insert(9)
nbst.insert(4)

console.log(nbst.search(nbst.root,3));

console.log(nbst.min(nbst.root));