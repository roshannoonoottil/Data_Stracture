// function merge(ar1,ar2){
//     let com = []
//     let i = 0
//     let j = 0
//     while(i < ar1.length && j < ar2.length){
//         if(ar1[i] < ar2[j]){
//             com.push(ar1[i])
//             i++
//         }else
//         {
//             com.push(ar2[j])
//             j++
//         }
//     }
//     while(i < ar1.length){
//         com.push(ar1[i])
//         i++
//     }
//     while(j < ar2.length){
//         com.push(ar2[j])
//         j++
//     }

//     return com

// }

// function mergeSort(arr){
//     if(arr.length === 1) return arr
//     let mid = Math.floor(arr.length/2)
//     let left = arr.slice(0,mid)
//     let right = arr.slice(mid)
//     return merge(mergeSort(left),mergeSort(right))
// }

// console.log(mergeSort([2,3,1,6,5,4,7,8]));77777777777777777777



//Recursion String Reverse

// let str = "hi"
// let  i=0
// function reverse(str,i){
   
//     if(i == str.length){
//         return ""
//     }

//     return reverse(str,i+1)+str[i]

// }

// console.log(str === reverse(str,i));


// const as = [
//     {af:4,pol:[5,35,5]},
//     {af:4,pol:[5,35,5]},
//     {af:4,pol:[5,35,5]},
//     {af:4,pol:[5,35,5]}    
// ]


// var sum = 0


// for(let i = 0;i < as.length; i++){
//     sum += as[i].af
//     sum += as[i].pol.reduce((a,b)=>{
//     return a+=b
//     },0)
    
// }
// console.log(sum);

// let str = "anumol"
// let i = 0
// function reverse(str,i){
//     if(i == str.length){
//         return ""
//     }
//     return reverse(str,i+1)+str[i]

// }

// console.log(reverse(str,i));

class HashTable {
    constructor(size = 7) {
        this.dataMap = new Array(size)
    }
   
    _hash(key) {
        let hash = 0
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length
        }
        return hash
    }

    set(key,value) {
        let index = this._hash(key)
        if(!this.dataMap[index]) this.dataMap[index] = []
        
        this.dataMap[index].push([key, value])
        return this
    }

    get(key) {
        let index = this._hash(key)
        if(this.dataMap[index]) {
            for(let i = 0; i < this.dataMap[index].length; i++) {
                if(this.dataMap[index][i][0] === key) {
                    return this.dataMap[index][i][1]
                }
             }
         }
         return undefined
     }

    keys() {
        let allKeys = []
        for(let i = 0; i < this.dataMap.length; i++) {
            if(this.dataMap[i]) {
                for(let j = 0; j < this.dataMap[i].length; j++) {
                    allKeys.push(this.dataMap[i][j][0])
                }
            }
        }
        return allKeys
    }
}

let myHashTable = new HashTable()
myHashTable.set('bolts', 1400)
myHashTable.set('washers', 50)
console.log(myHashTable);