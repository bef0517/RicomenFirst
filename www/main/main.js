window.onload = function(){
var UserID = localStorage.getItem('UserID');
if (UserID === null){$(function(){$.magnificPopup.open({items:{src:'<div class="inline-popup">有難うございます</div>'}, type:'inline'});
document.getElementById("buttonX").setAttribute("disabled", true);
document.getElementById("buttonX").style.backgroundColor = "Gray";
document.getElementById("buttonY").setAttribute("disabled", true);
document.getElementById("buttonY").style.backgroundColor = "Gray";
document.getElementById("buttonZ").setAttribute("disabled", true);
document.getElementById("buttonZ").style.backgroundColor = "Gray";})} 
else{
document.getElementById("buttonX").style.backgroundColor = "#1285ffa8";
document.getElementById("buttonY").style.backgroundColor = "#1285ffa8";
document.getElementById("buttonZ").style.backgroundColor = "#1285ffa8";}};


var body = document.getElementsByTagName('body')[0];
 
//新規登録画面遷移

function linkUrlA() {
    location.href = 'entry/first.html'
};
 
var bt3 = document.getElementById('button3');
bt3.addEventListener('click', function(){
    body.classList.add('anime3');
    setTimeout(linkUrlA, 400);
});

//人物リコメンド画面遷移

function linkUrlB() {
    location.href = 'people/people1.html'
};
 
var bt4 = document.getElementById('buttonY');
bt4.addEventListener('click', function(){
    body.classList.add('anime3');
    setTimeout(linkUrlB, 400);
});

//物リコメンド画面遷移

function linkUrlC() {
    location.href = 'object/object1.html'
};
 
var bt5 = document.getElementById('buttonZ');
bt5.addEventListener('click', function(){
    body.classList.add('anime3');
    setTimeout(linkUrlC, 400);
});
