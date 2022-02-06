var question001 = ["What is html ?"];
var choices001 = ["<input onclick=correct001() name=button001 type=radio />2<br /><input onclick=incorrect001() name=button001 type=radio />4<br /><input onclick=incorrect001() name=button001 type=radio />7<br />"];


var question002 = ["What is html ?"];
var choices002 = ["<input onclick=correct002() name=button002 type=radio />2<br /><input onclick=incorrect001() name=button002 type=radio />4<br /><input onclick=incorrect002() name=button002 type=radio />7<br />"];


var question003 = ["What is html ?"];
var choices003 = ["<input onclick=correct003() name=button003 type=radio />2<br /><input onclick=incorrect003() name=button003 type=radio />4<br /><input onclick=incorrect003() name=button003 type=radio />7<br />"];


var question004 = ["What is html ?"];
var choices004 = ["<input onclick=correct004() name=button004 type=radio />2<br /><input onclick=incorrect004() name=button004 type=radio />4<br /><input onclick=incorrect004() name=button004 type=radio />7<br />"];

var a;
var b;
var c;
var z;


window.onload = function() {
    a = 0;
    message.innerHTML = question001;
    option.innerHTML = choices002;
    click.innerHTML = "<button onclick=set002()>Submit</button>";
}

function correct001() {
    a = 1;
}

function incorrect001() {
    a = 0;
}

function set002() {
    b = 0;
    message.innerHTML = question002;
    option.innerHTML = choices002;
    click.innerHTML = "<button onclick=set003()>Submit</button>";

}

function correct002() {
    b = 1;
}

function incorrect002() {
    b = 0;
}

function set003() {
    c = 0;
    message.innerHTML = question003;
    option.innerHTML = choices003;
    click.innerHTML = "<button onclick=result001()>Score</button>";

}

function correct003() {
    c = 1;
}

function incorrect003() {
    c = 0;
}

function result001() {
    z = a + b + c;
    message.innerHTML = "End of quiz";
    options.innerHTML = "";
    comment.innerHTML = "your score is " + z;

}