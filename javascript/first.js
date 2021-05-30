String  >  "hi" 'hey' '3535' "3534" 'true' "false" '35efs'
Number  > 656 7868767 867.45345 .354
Boolean > true / false 

es5 > ecmaScript 5
es6 > ecmaScript 6

//es5
var a = 10
var b = 20
var name = "John"
var pass = true

typeof(a)
"number"
typeof(name)
"string"
typeof(pass)
"boolean"
var d = "10"
undefined
typeof(d)
"string"

///es6
let a = 10
const b = 20

var a = 10
var b = 20

var a = 10
var b = 20
undefined
a+b
30 (add)
b-a
10
a-b
-10
a*b
200
a/b
0.5

a/b
0.5
a%b
10
4%2
0
4%3
1
4%4
0


3%4
3
2%4
2
1%4
1

var a = "hi"
var b = "javascript"

var a = "hi"
var b = "javascript"
undefined
a+b (concat)
"hijavascript"
a-b
NaN
a*b
NaN
a/b
NaN (not a number)

string + string = string
number + string = string
string + number = string
number + number = number

10+"20"+"30"
"102030"
"10"+20+30
"102030"
10+20+"30"
"3030"

10+"20"+"30"-1
102029
"10"+20+30-1
102029
10+20+"30"-1
3029

"hi"-1
NaN

"10"-1
9

"10"-"5"
5

"10"+"5"
"105"

"2"*5
10
"5"/3
1.6666666666666667
"10a"-1
NaN

2-"10a"
NaN


"10"+"5"

"
var a = 10
undefined
var a = "10"
undefined
var b = "20"
undefined
parseInt(a)
10
parseInt(b)
20
parseInt(a)+parseInt(b)
30
a+b
"1020"
var c = "10a"
undefined
parseInt(c)
10
var c = "hii"
undefined
parseInt(c)
NaN

var a = "10.4"
undefined
var b = "20.1"
undefined
parseInt(a)+parseInt(b)
30
parseFloat(a)+parseFloat(b)
30.5

parseInt(a)+parseInt(b)
30
parseFloat(a)+parseFloat(b)
30.5
Number(a)+Number(b)
30.5


///////
//es5

var name = "Avengers"
var ind = "Hollywood"

var out = "The "+name+" is from ind "+ind+"."
out
"The Avengers is from ind Hollywood."

var out = `The ${name} is from ind ${ind}.`
"The Avengers is from ind Hollywood."