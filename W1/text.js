// let arr=[6,5,4,3,9,8,0]
// let t=10

// 1st approach //
/*
for(let i=0;i<arr.length;i++)
{
    for(let j=i+1;i<arr.length-1;j++)
        {
            if(arr[i]+arr[j]==t){
                console.log('got it',arr[i],arr[j])
            }
        }
}
*/


// 2nd approach //

/*
let nums = new Set()

for(let i=0;i<arr.length;i++){
   
    let res=t-arr[i];   
    if(nums.has(res)){
        console.log(arr[i],res)
    }
    nums.add(arr[i]);

}
*/

// let arr=[4,7,3,4,6,2,5,8,6,4]
// let m=4

// let n=arr.length
// for(let i=0;i<n;i++){
// if(arr[i]==m){
//     let res=arr[i]
//     arr.push(res)
//     arr.splice(i,1)
// }
// }
// console.log(arr);


class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedList{
    constructor(value){
        const newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
        this.length = 1
    }
}

let newLinkedList = new LinkedList(10)

console.log(newLinkedList);