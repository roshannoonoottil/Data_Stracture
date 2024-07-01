function stringReverseUsingStack(str){
    let stack = []
    for(let char of str){
        stack.push(char)
    }
    let rev = '';
    while(stack.length > 0){
        rev += stack.pop()
    }
    return rev
}

strrev =  stringReverseUsingStack('Anu')

console.log(strrev);



