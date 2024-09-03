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
    insert(value){
        const newNode = new Node(value)
        if(!this.root){
            this.root = newNode
            return this
        }
        let temp = this.root
        while(true){
            if(newNode.value === temp.value)return undefined
            if(newNode.value < temp.value){
                if(!temp.left){
                    temp.left = newNode
                    return this
                }
                temp = temp.left
            }else{
                if(!temp.right){
                    temp.right = newNode
                    return this
                }
                temp = temp.right
            }
        }
    }
    contains(value){
        if(!this.root) return false
        let temp = this.root
        while(temp){
            if(value < temp.value){
                temp = temp.left
            }else if(value > temp.value){
                temp = temp.right
            }else{
                return true
            }
        }
        return false
    }
    delete(value) {
        this.root = this._deleteNode(this.root, value);
    }
    
    _deleteNode(node, value) {
        if (!node) return null;
    
        if (value < node.value) {
            node.left = this._deleteNode(node.left, value);
        } else if (value > node.value) {
            node.right = this._deleteNode(node.right, value);
        } else {
            if (!node.left) return node.right;
            if (!node.right) return node.left;
    
            node.value = this._findMin(node.right).value;
            node.right = this._deleteNode(node.right, node.value);
        }
        return node;
    }
    
    _findMin(node) {
        while (node.left) {
            node = node.left;
        }
        return node;
    }
    
}

let bst = new BST()
bst.insert(10)
bst.insert(8)
bst.insert(15)
bst.insert(5)
bst.delete(15)
// console.log(bst.contains(5));
console.log(bst);