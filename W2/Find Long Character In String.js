// function longCharInString(str){
//     let charCount = {};
//     for(let char of str){
//         if(charCount[char]){
//             charCount[char]++;
//         }else{
//             charCount[char] = 1
//         }
//     }
//     let maxCount = 0
//     let longChar = '';
//     for(let char in charCount){
//         if(charCount[char] > maxCount){
//             maxCount = charCount[char]
//             longChar = char
//         }
//     }
//     return longChar
// }


function longCharInString(str){
    let charCount = {};
    for(let char of str){
        if(charCount[char]){
            charCount[char]++
        }else{
            charCount[char] = 1
        }
    }

    let maxCount = 0
    let longChar = '';
    for(let char in charCount){
        if(charCount[char] > maxCount){
            maxCount = charCount[char]
            longChar = char

        }
    }
    return longChar
}


let chr =longCharInString('imaaaeeen')
console.log(chr);