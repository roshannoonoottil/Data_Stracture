
//Reverse String

function reverseString(str){
    if(str.length <= 1){
        return str;
    }

    return str.charAt(str.length-1)+reverseString(str.substring(0,str.length-1));

}

console.log(reverseString("array"));