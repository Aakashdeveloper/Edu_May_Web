array is a collection of homogenious as well as hetrogenious data type 

var a = []
var a = [2,4,5,6,7,3]  (array of number)
var b = ['dg','fbf','fbdfb','fbfd']  (array of string)
var c = [true,true,false,false,true]  (array of Boolean)

var d = [345,'3534','dgdf',true,434,345,"ffd","gf45",false,false]

var city = ['London','NewYork','Delhi','Amsterdam'];

city.length
4
city[0]
"London"
city[1]
"NewYork"
city[city.length-1]
"Amsterdam"

var city = ['London','NewYork','Delhi','Amsterdam'];
undefined
city.push('Helsinki')
5
city
(5) ["London", "NewYork", "Delhi", "Amsterdam", "Helsinki"]
city.push('Dubai','Venice')
7
city
(7) ["London", "NewYork", "Delhi", "Amsterdam", "Helsinki", "Dubai", "Venice"]




var city = ["London", "NewYork", "Delhi", "Amsterdam", "Helsinki", "Dubai", "Venice"]
city.pop()
"Venice"
city
(6) ["London", "NewYork", "Delhi", "Amsterdam", "Helsinki", "Dubai"]

city.pop(2)

var city = ["London", "NewYork", "Delhi", "Amsterdam", "Helsinki", "Dubai", "Venice"]
undefined
city.pop()
"Venice"
city
(6) ["London", "NewYork", "Delhi", "Amsterdam", "Helsinki", "Dubai"]
city.pop(2)
"Dubai"
city
(5) ["London", "NewYork", "Delhi", "Amsterdam", "Helsinki"]
city.pop(20000000)
"Helsinki"

var city = ["London", "NewYork", "Delhi", "Amsterdam", "Helsinki", "Dubai", "Venice"]

city.shift()
"London"
city
(6) ["NewYork", "Delhi", "Amsterdam", "Helsinki", "Dubai", "Venice"]
city.unshift('Nice')
7
city
(7) ["Nice", "NewYork", "Delhi", "Amsterdam", "Helsinki", "Dubai", "Venice"]

push > add in the end of array
pop > remove always remove the last value
shift > remove the first value
unshift> add the value in the begining 


var city = ["London", "NewYork", "Dubai", "Venice"]
city.splice(index,deletecount,value)


var city = ["London", "NewYork", "Dubai", "Venice"]
undefined
city.splice(2,0,'Delhi','Amsterdam')
[]

city
(6) ["London", "NewYork", "Delhi", "Amsterdam", "Dubai", "Venice"]
city.splice(3,1)
["Amsterdam"]

city
(5) ["London", "NewYork", "Delhi", "Dubai", "Venice"]
city.splice(2,1,'Mumbai')
["Delhi"]

city
(5) ["London", "NewYork", "Mumbai", "Dubai", "Venice"]

var city = ["London", "NewYork", "Delhi", "Dubai", "Venice"]

city.slice(1)
(4) ["NewYork", "Delhi", "Dubai", "Venice"]
city
(5) ["London", "NewYork", "Delhi", "Dubai", "Venice"]
city.slice(2,5)
(3) ["Delhi", "Dubai", "Venice"]


var a = [1,2,3]
var b =[2,'a','b']

a+b
"1,2,32,a,b"
a.concat(b)
(6) [1, 2, 3, 2, "a", "b"]



var myarr = ["London", "NewYork",['Red','Yellow',['Audi','BMW','Merc'],'Green','Orange'], "Delhi", "Dubai", "Venice"]
undefined
myarr[0]
"London"
myarr[1]
"NewYork"
myarr[2]
(5) ["Red", "Yellow", Array(3), "Green", "Orange"]
myarr[2][1]
"Yellow"
myarr[2][2]
(3) ["Audi", "BMW", "Merc"]
myarr[2][2][0]
"Audi"

var myarr = ["London", "NewYork",['Red','Yellow',['Audi','BMW','Merc'],'Green','Orange'], "Delhi", "Dubai", "Venice"]
undefined
myarr.flat()
(10) ["London", "NewYork", "Red", "Yellow", Array(3), "Green", "Orange", "Delhi", "Dubai", "Venice"]
myarr.flat(2)
(12) ["London", "NewYork", "Red", "Yellow", "Audi", "BMW", "Merc", "Green", "Orange", "Delhi", "Dubai", "Venice"]


var myarr = ["London", "delhi",1,33,62,'Skoda','audi',true,9,false,'Green']
undefined
myarr.sort()
(11) [1, 33, 62, 9, "Green", "London", "Skoda", "audi", "delhi", false, true]
var myarr = ["London", "delhi",1,33,62,'Skoda','audi',true,9,false,'Green','goa']
undefined
myarr.sort()
(12) [1, 33, 62, 9, "Green", "London", "Skoda", "audi", "delhi", false, "goa", true]
myarr.reverse()
(12) [true, "goa", false, "delhi", "audi", "Skoda", "London", "Green", 9, 62, 33, 1]

var city = ["London", "NewYork", "Red", "Yellow", "Audi", "BMW", "Merc", "Green", "Orange", "Delhi", "Dubai", "Venice"]
city.indexOf('London')
0
city.indexOf('Gray')
-1
city.indexOf('Delhi')
9
city.indexOf('Nice')
-1

var a = "hi"
var b = ["Hi","Hello"]
undefined
Array.isArray(a)
false
Array.isArray(b)
true