class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

class BST{
    constructor(){
        this.root=null;
    }
    isEmpty(){
        return this.root==null;
    }
    insert(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.root=node;
        }else{
            this.insertChild(this.root,node);
        }
    }
    
    insertChild(root,node){
        if(node.value<root.value){
            if(root.left==null){
                root.left=node;
            }else{
                this.insertChild(root.left,node);
            }
        }else{
            if(root.right==null){
                root.right=node;
            }else{
                this.insertChild(root.right,node);
            }
        }
    }
    
    search(root,value){
        if(!root){
            return false;
        }
        if(root.value==value){
            return true;
        }
        if(value<root,value){
            return this.sarch(root.left,value);
        }else{
            return this.search(root.right,value);
        }
    }
    
    min(root){
        if(!root.left) return root.value;
         return this.min(root.left);
    }
    
    max(root){
        if(!root.right) return root.value;
        return this.max(root.right);
    }
    
   
    
    //BFS
    
    breadthFS(){
        let queue=[];
        queue.push(this.root);
        while(queue.length){
            let curr=queue.shift();
            console.log(curr.value);
            if(curr.left){
                queue.push(curr.left);
            }
            if(curr.right){
                queue.push(curr.right);
            }
        }
    }
    
    // delete node 
    
    delete(value){
        //console.log("one")
        this.root=this.deleteNode(this.root,value);
        return 0
    }
    
    deleteNode(root,value){
        
        if(root==null) return root;
        if(value<root.value){
           // console.log("two")
            root.left=this.deleteNode(root.left,value);
        }else if(value>root.value){
            root.right=this.deleteNode(root.right,value);
        }else{
            if(!root.left && !root.right){
               // console.log("three")
                return null;
            }
            if(!root.left){
                return root.right;
            }
            else if(!root.right){
                return root.left;
            }
            
            root.value=this.min(root.right);
            root.right=this.deleteNode(root.right,root.value);
        }
        return root;
    }
    
    
    
}

const bst=new BST();
bst.insert(10);
bst.insert(4);
bst.insert(16);
console.log(bst.search(bst.root,16))
// console.log(bst.min(bst.root));
// console.log(bst.max(bst.root));
// console.log("**")
// bst.preOrder(bst.root);
// console.log("**")
// bst.inOrder(bst.root);
// console.log("**")
// bst.postOrder(bst.root)
// console.log("**")
// bst.breadthFS()
// bst.delete(4);
// bst.inOrder(bst.root);
// bst.delete(16);
// bst.inOrder(bst.root);