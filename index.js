// Greet function 
function greet() {
// Open window with the text "What is your Name?"
var name;
name = prompt("What is your Name?");
//Alert saying Hello and the person's name. 
if (name) {
alert ("Hello, "+name+"")
} else {
alert ("Hello")   
}
//Prompt asking How old the user is. 
var ageStr;
ageStr = prompt("How old are you?");
//Convert user's answer into a number. 
var age = parseInt(ageStr, 10);
//Confirm asking if the user has had a birthday yet this year. 
birthday = confirm("Have you had a birthday yet this year?");
var date;
date = new Date().getFullYear();
//Alert telling the user what year they" were born in. 
var birthday;
if (birthday) {
alert ("You were born in "+(date-age)+"")}
else {
alert ("You were born in "+(date-(age + 1))+"");
}
}
birthdayYet();