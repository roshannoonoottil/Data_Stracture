class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;

    }
}
class binaryTree{
    constructor(){
        this.root = null;
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
    isBST(node=this.root,min=null,max=null){
        if(node===null){
          return true;
        }
        
        if((min!=null && node.value<=min)||(max!=null && node.value>=max)){
          return false;
        }
        
        return this.isBST(node.left,min,node.value) && this.isBST(node.right,node.value,max);
      }
}

const BT = new binaryTree()
BT.insert(10)
BT.insert(5)
BT.insert(15)
BT.insert(2)
BT.insert(7)

console.log(BT.isBST());