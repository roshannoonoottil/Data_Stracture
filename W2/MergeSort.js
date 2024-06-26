function merge(arr1,arr2){
    let comb = []
    let i = 0
    let j = 0
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            comb.push(arr1[i])
            i++
        }else{
            comb.push(arr2[j])
            j++
        }
    }
    while(i < arr1.length){
        comb.push(arr1[i])
        i++
    }
    while(j < arr2.length){
        comb.push(arr2[j])
        j++
    }
    return comb
}

function mergeSort(array){
    if(array.length === 1) return array
    let mid = Math.floor(array.length/2)
    let left = array.slice(0,mid)
    let right = array.slice(mid)
    return merge(mergeSort(left),mergeSort(right))
}
console.log(mergeSort([7,9,8,4,6,5,3,1,2]));
