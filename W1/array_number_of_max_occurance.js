function Maxoccurrence(array){
    if(array.length === 0){
        return 0;
    }

    Maxvalue = Math.max(...array)

    let count = 0

    for(let value of array){
        if(value === Maxvalue){
            count++;
    }
    }
    return count
}   
let array = [1,2,3,4,4,4,4,5,5,5]

console.log(Maxoccurrence(array));

