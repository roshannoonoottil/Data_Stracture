// function stringReverseUsingStack(str){
//     let stack = []
//     for(let char of str){
//         stack.push(char)
//     }
//     let reverse = '';
//     while(stack.length > 0){
//         reverse += stack.pop()
//     }
//     return reverse
// }

function stringReverseUsingStack(str){
    let stack= []
    for(let char of str){
        stack.push(char)
    }

    let reverse = '';
    while(stack.length > 0){
        reverse += stack.pop()
    }
    return reverse
}
console.log(stringReverseUsingStack('Haiiii'));