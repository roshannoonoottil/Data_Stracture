
//Linear Search

const array=[2,1,3,4,5,6,8]


function LinearSearch(array,value){

    for(let i=0;i<array.length;i++){

        if(array[i]==value){

            return i
        }
    }
    return -1

}
console.log(LinearSearch(array,6))