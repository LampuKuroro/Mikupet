

'use strict';
var mi = document.getElementById('mi');

function idle() {
  mi.src = "idle/i1.png";
  document.body.appendChild(mi);
  setTimeout(function () {  
    mi.src = "idle/i2.png";
    document.body.appendChild(mi);
    }, 250);
  setTimeout(function () {
    mi.src = "idle/i3.png";
    document.body.appendChild(mi);
    }, 500);
  setTimeout(function () {
     mi.src = "idle/i4.png";
     document.body.appendChild(mi);
    }, 750);
}
function pet(){
    mi.src = "idle/p1.png";
  document.body.appendChild(mi);
  setTimeout(function () {  
    mi.src = "idle/p2.png";
    document.body.appendChild(mi);
    }, 250);
  setTimeout(function () {
    mi.src = "idle/p3.png";
    document.body.appendChild(mi);
    }, 500);
  setTimeout(function () {
     mi.src = "idle/p4.png";
     document.body.appendChild(mi);
    }, 750);
  setTimeout(function () {
     mi.src = "idle/p3.png";
     document.body.appendChild(mi);
    }, 1000);
  setTimeout(function () {
     mi.src = "idle/p4.png";
     document.body.appendChild(mi);
    }, 1250);
}