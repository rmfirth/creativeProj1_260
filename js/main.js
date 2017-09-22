function myFunction(x){
if(x==1){
var input1 = document.getElementById("q1_input");
var response = document.getElementById("q1_response");
if(input1 == "B"){
response.innerHTML = "CORRECT!";
}
else{
response.innerHTML = "INCORRECT!";
}
}
if(x==2){
var input2 = document.getElementById("q2_input")
response = document.getElementById("q2_response");
if(input1 == "F"){
response.innerHTML = "CORRECT!";
}
else{
response.innerHTML = "INCORRECT!";
}

}
if(x==3){
var input3 = document.getElementById("q3_input")
var response = document.getElementById("q3_response");
if(input1 == "D"){
response.innerHTML = "CORRECT!";
}
else{
response.innerHTML = "INCORRECT!";
}

}

}
