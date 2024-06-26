let array = [1,2,3,4,5,6,7,8,9]

first = 0
last = array.length-1

function BinarySearch(array,value){

    while(first <= last){

    let mid = Math.floor((first+last)/2)

    if(value === array[mid])return mid
    if(value < array[mid]){
        last = mid - 1
    }else{
        first = mid + 1
    }
    }
    return -1
}

console.log(BinarySearch(array,1));