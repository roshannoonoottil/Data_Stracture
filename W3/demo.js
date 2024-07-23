let str = "roshan"
let nst2 = ""
let nstr = str[0].toUpperCase()
for(let i=1;i<str.length-1;i++){
    nst2 = nst2 + str[i]
}
let nstr1 = str[str.length-1].toUpperCase()



console.log(nstr + nst2 + nstr1);