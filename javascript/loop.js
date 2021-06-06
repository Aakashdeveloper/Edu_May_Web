for
for of
////////

for > generate series of value or help to iterate over Array
///////
for(i=0;i<5;i++){
    console.log(i)
}

0
1
2
3
4

var city = ["London", "NewYork", "Delhi", "Amsterdam", "Dubai", "Venice"]

for(i=0;i<city.length;i++){
    console.log(city[i])
}

var myarr = ["London", "NewYork",['Red','Yellow','Orange'], "Venice"]
for(i=0;i<myarr.length;i++){
    console.log(myarr[i])
}

var myarr = ["London", "NewYork",['Red','Yellow','Orange'], "Venice"]
for(i=0;i<myarr.length;i++){
    for(j=0;j<myarr[i].length;j++){
        console.log(myarr[i][j])
    }
}

var a = "London"
a[0]
"L"
a[1]
"o"

var myarr = ["London", "NewYork",['Red','Yellow','Orange'], "Venice"]
for(i=0;i<myarr.length;i++){
    if(Array.isArray(myarr[i])){
        for(j=0;j<myarr[i].length;j++){
            console.log(myarr[i][j])
        }
    }else{
        console.log(myarr[i])
    }
}


var city = ["London", "NewYork", "Delhi", "Amsterdam", "Dubai", "Venice"]
for(mycity of city){
    console.log(mycity)
}


var city = ["London", "NewYork",['Red','Yellow','Orange'], "Venice"]
for(mycity of city){
    if(Array.isArray(mycity)){
        for(color of mycity){
            console.log(color)
        }
    }else{
        console.log(mycity)
    }   
}