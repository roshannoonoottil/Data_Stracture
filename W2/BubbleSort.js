function bubbleSort(arr){
    for(let i = arr.length-1; i > 0; i--){
        for(j = 0; j< i; j++){
            if(arr[j] > arr[j+1]){
            let temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
        }
        }
    }
    return arr
}

console.log(bubbleSort([8,9,6,7,3,5,4,1,2]));