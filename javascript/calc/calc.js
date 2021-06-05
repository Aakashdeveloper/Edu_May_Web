 /*
            function add(){
                var first = document.getElementById('first').value;
                var second = document.getElementById('second').value;
                var out = Number(first)+Number(second);
                document.getElementById('output').innerText=`Sum of number is ${out}`
            }
            function sub(){
                var first = document.getElementById('first').value;
                var second = document.getElementById('second').value;
                var out = Number(first)-Number(second);
                document.getElementById('output').innerText=`Sub of number is ${out}`
            }*/

function calc(opt){
    var first = document.getElementById('first').value;
    var second = document.getElementById('second').value;
    var out;
    if(opt=="Add"){
        out = `sum of ${Number(first)+Number(second)}`
    }else{
        out = `sub of ${Number(first)-Number(second)}`
    }
    document.getElementById('output').innerText=out
}