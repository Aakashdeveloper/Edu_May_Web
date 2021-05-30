var a = 10
var b = 20
a+b
30


///
es5
/////
function add(a,b){
    return a+b
}

add(1,2)
3

add(18,90)
108

add("hii","test")
"hiitest"


function isEven(userInput){
    var out;
    if(userInput%2==0){
       out = `Number ${userInput} is even`
    }else{
        out = `Number ${userInput} is odd`
    }
    return out
}

isEven(4)
"Number 4 is even"
isEven(41)
"Number 41 is odd"

//es6
var add = (a,b) => {return a+b}
add(1,2)
3

var isEven = (userInput) => {
    var out;
    if(userInput%2==0){
       out = `Number ${userInput} is even`
    }else{
        out = `Number ${userInput} is odd`
    }
    return out
}