function myFunction(x){
if(x==1){
var input1 = document.getElementById("q1_input").value;
var response1 = document.getElementById("q1_response");
if(input1 == "B"){
response1.innerHTML = "CORRECT!";
}
else{
response1.innerHTML = "INCORRECT!";
}
}
if(x==2){
var input2 = document.getElementById("q2_input").value;
var response2 = document.getElementById("q2_response");
if(input2 == "F"){
response2.innerHTML = "CORRECT!";
}
else{
response2.innerHTML = "INCORRECT!";
}

}
if(x==3){
var input3 = document.getElementById("q3_input").value;
var response3 = document.getElementById("q3_response");
if(input3 == "D"){
response3.innerHTML = "CORRECT!";
}
else{
response3.innerHTML = "INCORRECT!";
}

}

}
