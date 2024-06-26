

function Merge(arr1,arr2){
    let combined = []
    let i = 0
    let j = 0
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            combined.push(arr1[i])
            i++
        }else{
            combined.push(arr2[j])
            j++
        }
    }
    while(i < arr1.length){
        combined.push(arr1[i])
        i++
    }
    while(j < arr2.length){
        combined.push(arr2[j])
        j++
    }
    return combined
}

console.log(Merge([1,4,6,8],[2,3,5,7]));





