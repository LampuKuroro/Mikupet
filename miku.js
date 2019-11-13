

'use strict';
var mi = document.getElementById('mi');
var i1= "idle/i1.png";
var i2= "idle/i2.png";
var i3= "idle/i3.png";
var p1= "idle/p1.png";
var p2= "idle/p2.png";
var p3= "idle/p3.png";
var p4= "idle/p4.png";
var p5= "idle/p5.png";
var p6= "idle/p6.png";
var p7= "idle/p7.png";
var p8= "idle/p8.png";
document.getElementById("pet").addEventListener("click", doPet);
document.getElementById("sing").addEventListener("click", doSing);
document.getElementById("feed").addEventListener("click", doFeed);
document.getElementById("stop").addEventListener("click", doStop);
var hp =100;
var af = 100;
var mikuaudio = new Audio('music/firework.mp3');
function doPet(){
	window.check = 1;
	if(af>90){
        window.af = 100;
    }
    else{
        window.af = af+10;
    }
}
function doSing(){
	window.check = 2;
  setTimeout(function () {
	mikuaudio.src = 'music/firework.mp3';
	mikuaudio.play();
    }, 750);
}
function doStop(){
	window.check = 0;
  setTimeout(function () {
     	mikuaudio.pause();
	mikuaudio.currentTime = 0;
    }, 750);
}
function doFeed(){
	window.check = 3;
	if(hp>90){
        window.hp = 100;
    }
    else{
        window.hp = hp+10;
    }
}
var check = 0;
setInterval(health, 1000);
setInterval(affect, 1000);
idle();
setInterval(idle, 1000);

function idle() {
    if (check ==1){
        pet();
    }
    else if (check ==2){
        sing();
    }
    else if (check ==3){
        eat();
    }
    else if(check!== 0){
        return;
    }
    else{
  mi.src = i1;
  document.body.appendChild(mi);
  setTimeout(function () {  
    mi.src = i2;
    document.body.appendChild(mi);
    }, 250);
  setTimeout(function () {
    mi.src = i3;
    document.body.appendChild(mi);
    }, 500);
  setTimeout(function () {
     mi.src = i2;
     document.body.appendChild(mi);
    }, 750);
    }
}
function pet(){
    
    mi.src = p1;
  document.body.appendChild(mi);
  setTimeout(function () {  
    mi.src = p2;
    document.body.appendChild(mi);
    }, 250);
  setTimeout(function () {
    mi.src =p3;
    document.body.appendChild(mi);
    }, 500);
  setTimeout(function () {
     mi.src = p4;
     document.body.appendChild(mi);
    }, 750);
  setTimeout(function () {
     mi.src = p3;
     document.body.appendChild(mi);
    }, 1000);
  setTimeout(function () {
     mi.src = p4;
     document.body.appendChild(mi);
    }, 1250);
    setTimeout(function () {
     mi.src = p5;
     document.body.appendChild(mi);
    }, 1500);
    setTimeout(function () {
     mi.src = p6;
     document.body.appendChild(mi);
    }, 1750);
    setTimeout(function () {
     mi.src = p7;
     document.body.appendChild(mi);
    }, 2000);
    setTimeout(function () {
     mi.src = p8;
     document.body.appendChild(mi);
    }, 2250);
     window.check = 0;
}
function sing(){
    mi.src = "idle/s1.png";
  document.body.appendChild(mi);
  setTimeout(function () {  
    mi.src = "idle/s2.png";
    document.body.appendChild(mi);
    }, 250);
  setTimeout(function () {
    mi.src = "idle/s3.png";
    document.body.appendChild(mi);
    }, 500);
  setTimeout(function () {
     mi.src = "idle/s4.png";
     document.body.appendChild(mi);
    }, 750);
  setTimeout(function () {
     mi.src = "idle/s1.png";
     document.body.appendChild(mi);
    }, 1000);
  setTimeout(function () {
     mi.src = "idle/s5.png";
     document.body.appendChild(mi);
    }, 1250);
    setTimeout(function () {
     mi.src = "idle/s6.png";
     document.body.appendChild(mi);
    }, 1500);
    setTimeout(function () {
     mi.src = "idle/s7.png";
     document.body.appendChild(mi);
    }, 1750);
}
function eat(){
    mikuaudio.src = 'music/eating.mp3';
	mikuaudio.play();
    mi.src = "idle/e1.png";
  document.body.appendChild(mi);
  setTimeout(function () {  
    mi.src = "idle/e2.png";
    document.body.appendChild(mi);
    }, 250);
  setTimeout(function () {
    mi.src = "idle/e3.png";
    document.body.appendChild(mi);
    }, 500);
  setTimeout(function () {
     mi.src = "idle/e4.png";
     document.body.appendChild(mi);
    }, 750);
  setTimeout(function () {
     mi.src = p5;
     document.body.appendChild(mi);
    }, 1000);
  setTimeout(function () {
     mi.src = p6;
     document.body.appendChild(mi);
    }, 1250);
    setTimeout(function () {
     mi.src = p7;
     document.body.appendChild(mi);
    }, 1500);
    setTimeout(function () {
     mi.src = p8;
     document.body.appendChild(mi);
    }, 1750);
    document.getElementById('hp').innerHTML= hp;
    setTimeout(function () {
     window.check = 0;
    }, 1750);
    setTimeout(function () {
     mikuaudio.pause();
	mikuaudio.currentTime = 0;
    }, 1750);
}
function health(){
    if(hp>0){
        window.hp = hp-1;
    }
    document.getElementById('hp').innerHTML= hp;
}
function affect(){
    if(af>0){
        window.af =af-1;
    }
    document.getElementById('af').innerHTML= af;
}