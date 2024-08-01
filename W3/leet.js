let n = 8
let a=0;
let b=0;
function eql(n){
for(let i = 1, j=n;i<=n && j>=1;i++,j--){
   a=a+i
   b=b+j
   console.log(a,b);
   if(a===b){
    return i
   }
   
}

}

eql(n);