function insertionSort(array){
    let temp
    for(let i = 1 ; i < array.length ; i++){
        temp = array[i]
        for(var j = i - 1; array[j] > temp && j > -1 ; j--){
            array[j+1] = array[j]
        }
        array[j+1] = temp
    }
    return array
}
console.log(insertionSort([8,9,7,4,6,5,2,1,3]));