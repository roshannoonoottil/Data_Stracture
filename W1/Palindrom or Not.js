// Palindrome or Not

function Palindrome(str){
    if(str.length == 0){
        return true;
    }
    if(str[0] != str[str.length-1]){
        return false;
    }
    return Palindrome(str.slice(1,str.length-1));
}

console.log(Palindrome("MALAYALAM"));   
// str = "malayalam"

// console.log(str === str.split('').reverse('').join(''));