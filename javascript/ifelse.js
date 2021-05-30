if(condition){
    // do something
}else{
   // do something
}



/////////////
var a = 89787
if(a%2 == 0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
Number 89787 is odd

var a = 8978
if(a%2 == 0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
Number 8978 is even

var name = "Priya"
if(name=="Nikita"){
    console.log(`Hi ${name} you are admin`)
}else if(name == "Bhumika"){
    console.log(`Hi ${name} you are super admin`)
}else if(name == "Priya"){
    console.log(`Hi ${name} you are user`)
}else{
    console.log(`Hi ${name} you are unkown`)
}

var a = 1
if(a){
    console.log("hii")
}else{
    console.log("Bie")
}
"hii"

var a = 0
if(a){
    console.log("hii")
}else{
    console.log("Bie")
}
"Bie"

var a = -1
if(a){
    console.log("hii")
}else{
    console.log("Bie")
}
"Hii"

///////
truthy => any number either +ve or -ve except 0 , string ,true
falsy => 0, false, null

//////
ternary (single line if else)
var a = 10

a>10 ? "Hiii" : "Bie"
"Bie"

var a = 10
a==10 ? "Hiii" : "Bie"
"Hiii"

var a = 10
a==10 ? a+1:a-1
11
var a = 10
a>10 ? a+1:a-1
9