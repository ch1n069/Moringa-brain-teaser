var question001 = ["What is html ?"];
var choices001 = ["<input onclick=correct001() name=button001 type=radio />Hyper text mark up language<br /><input onclick=incorrect001() name=button001 type=radio />css<br /><input onclick=incorrect001() name=button001 type=radio />text languge<br />"];


var question002 = ["What is html ?"];
var choices002 = ["<input onclick=correct002() name=button002 type=radio />Hyper text markup language <br /><input onclick=incorrect001() name=button002 type=radio />Cscading stylesheet<br /><input onclick=incorrect002() name=button002 type=radio />DOm<br />"];


var question003 = ["What is html ?"];
var choices003 = ["<input onclick=correct003() name=button003 type=radio />Hyper-text-markup-language<br /><input onclick=incorrect003() name=button003 type=radio />fork<br /><input onclick=incorrect003() name=button003 type=radio />css<br />"];


var question004 = ["What is html ?"];
var choices004 = ["<input onclick=correct004() name=button004 type=radio />Hyper text<br /><input onclick=incorrect004() name=button004 type=radio />garden<br /><input onclick=incorrect004() name=button004 type=radio />php<br />"];

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
    click.innerHTML = "<button onclick=result001()>Repeat</button>";

}

function correct003() {
    c = 1;
}

function incorrect003() {
    c = 0;
}


//this is the result function //
function result001() {
    z = a + b + c;
    message.innerHTML = "End of quiz";
    //makes the  fields dissapear
    options.innerHTML = "";
    comment.innerHTML = "your score is " + z;
    click001.innerHTML = "<button onclick=result001()>repeat</button>"



}