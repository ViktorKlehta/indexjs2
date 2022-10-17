var op;

function func () {
    var result;
    var num1=Number(document.getElementById("num1").value);
    var num2=Number(document.getElementById("num2").value);
    result=num1*num2;
    document.getElementById("result").innerHTML=result;
}