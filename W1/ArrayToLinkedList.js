class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

function ArrayToLinkedList(array){

    if(array.length === 0){
        return null
    }

    let head = new Node(array[0]);
    let current = head;
    for(let i = 1; i < array.length; i++){
        current.next = new Node(array[i])
        current = current.next
        
    }
    return head;
}

function PrintList(head){
    let current = head;
    while(current != null){
        console.log(current.value)
        current = current.next
    }
}

const array =[3,4,6,2,4,6,7]

PrintList(ArrayToLinkedList(array))