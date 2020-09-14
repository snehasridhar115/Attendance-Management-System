function Validation() {
var roll number = document.getElementById('roll number');
var name = document.getElementById('name');
var leave = document.getElementById('leave');
if (textAlphanumeric(roll number, "* For username please use numbers and letters *")) {
if (inputAlphabet(name, "* For username please use only letters *")) {
if (trueSelection(leave, "* Please Choose any one option")) {
return true;
}
}
}
return false;
}
function textAlphanumeric(inputtext, alertMsg) {
var alphaExp = /^[0-9a-zA-Z]+$/;
if (inputtext.value.match(alphaExp)){
return true;
}
else {
document.getElementById('p5').innerText = alertMsg;
inputtext.focus();
return false;
}
}
function inputAlphabet(inputtext, alertMsg) {
var alphaExp = /^[a-zA-Z]+$/;
if (inputtext.value.match(alphaExp)) {
return true;
}
else {
document.getElementById('p6').innerText = alertMsg;
inputtext.focus();
return false;
}
}
function trueSelection(inputtext, alertMsg) {
if (inputtext.value == "Please Choose") {
document.getElementById('p7').innerText = alertMsg;
inputtext.focus();
return false;
}
else {
return true;
}
}