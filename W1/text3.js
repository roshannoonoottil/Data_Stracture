// function binarySearch(arr,val){
//     let first = 0
//     let last =arr.length -1
//     while(first >= last){
//         let mid = Math.floor((first+last)/2)
//         if(val === arr[mid]) return mid
//         if(val < arr[mid]){
//             last = mid - 1
//         }
//         else{
//             first = mid+1
//         }
//     }
// }

function append(value){
    const newNode = new Node(value)
    if(!this.head)
{
    this.head= newNode
    this.tail = newNode
}else{
    this.tail.next =newNode
    this.tail =newNode
}
this.length ++
return this

}

function prepend(value){
    const newNode = new Node(value)
    if(!this.head){
        this.head = newNode
        this.tail = newNode
    }
    else{

        newNode.next = this.head
        this.head = newNode
    }
    this.length ++
    return this
}