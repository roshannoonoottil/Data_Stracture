//Facrorial Recursion

function factorialRecursion(n){

    if(n<=1){

        return 1;
    }
    
    return n * factorialRecursion(n-1)
}

console.log(factorialRecursion(5));