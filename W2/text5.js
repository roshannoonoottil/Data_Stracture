// function merge(arr1,arr2){
//     let comb = []
//     let i =0
//     let j = 0
//     while(i < arr1.length && j < arr2.length){
//         if(arr1[i] <arr2[j]){
//             comb.push(arr1[i])
//             i++
//         }else{
//             comb.push([arr2[j]])
//             j++
//         }
//     }
//     while(i < arr1.length){
//         comb.push(arr1[i])
//         i++
//     }

//     while(j < arr2.length){
//         comb.push(arr2[j])
//         j++
//     }
//     return comb
// }

// function mergeSort(array){
//     if(array.length === 1) return array
//     let mid= Math.floor(array.length/2)
//     let left =array.slice(0,mid)
//     let right = array.slice(mid)
//     return merge(mergeSort(left),mergeSort(right))
// }

// console.log(mergeSort([8,9,6,7,5,3,4,1,2]));


class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Stack{
    constructor(value){
        const newNode = new Node(value)
        this.top = newNode
        this.length = 1
    }

}

function bubbleSort(array){
    for(let i =array.length -1; i >0 ;i++){
        for(let j =0;j<i;j++){
            if(array[j]>array[j+1]){
                let temp =array[j]
                array[j] =array[j+1]
                array[j+1] =temp
            }
        }
    }
    return array
}

console.log(bubbleSort([8,9,6,7,4,5,3,1,2]));