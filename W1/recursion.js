// Sum Of Array Using Recursion

// function sumOfArray(array){
//     if(array.length === 0){

//         return 0
//     }else{

//         return array[0] + sumOfArray(array.slice(1));
//     }
// }

// let array = [1,2,3,4,5]

// console.log(sumOfArray(array));
// let arr = [1,2,3,4,5,5,5]

// function MaxOCC(arr){
//     if(arr.length === 0){
//         return 0
//     }

//     let max = Math.max(...arr)
//     let count = 0
//     for(let val of arr){
//         if(val === max){
//             count ++
//         }
//     }
//     return count

// }
// console.log(MaxOCC(arr));

//  factorial of a number

// function fun(val){
//     if(val === 0){
//         return 1;
//     }

//     return val * fun(val - 1)

// }

// console.log(fun(3));

function range(start,end){
    if(end - start <2){
        return undefined
    }
    if(end - start === 2){
        return [start + 1]
    }
    else
    {
        var list = range(start,end - 1)
        list.push(end -1)
        return list
    }

}

console.log(range(2,5));