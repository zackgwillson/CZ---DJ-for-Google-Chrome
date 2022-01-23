document.getElementById("1").addEventListener("click", p1);
document.getElementById("2").addEventListener("click", p2);
document.getElementById("3").addEventListener("click", p3);
document.getElementById("4").addEventListener("click", p4);
document.getElementById("5").addEventListener("click", p5);
document.getElementById("6").addEventListener("click", p6);
document.getElementById("7").addEventListener("click", p7);
document.getElementById("8").addEventListener("click", p8);
document.getElementById("9").addEventListener("click", p9);
 
 
document.getElementById("D1").addEventListener("click", D1);
document.getElementById("D2").addEventListener("click", D2);
document.getElementById("D3").addEventListener("click", D3);
document.getElementById("D4").addEventListener("click", D4);
document.getElementById("D5").addEventListener("click", D5);
document.getElementById("D6").addEventListener("click", D6);
document.getElementById("D7").addEventListener("click", D7);
 
document.getElementById("pauseD1").addEventListener("click", pauseD1);
document.getElementById("pauseD2").addEventListener("click", pauseD2);
document.getElementById("pauseD3").addEventListener("click", pauseD3);
document.getElementById("pauseD4").addEventListener("click", pauseD4);
document.getElementById("pauseD5").addEventListener("click", pauseD5);
document.getElementById("pauseD6").addEventListener("click", pauseD6);
document.getElementById("pauseD7").addEventListener("click", pauseD7);
 
 
document.getElementById("restartD1").addEventListener("click", restartD1);
document.getElementById("restartD2").addEventListener("click", restartD2);
document.getElementById("restartD3").addEventListener("click", restartD3);
document.getElementById("restartD4").addEventListener("click", restartD4);
document.getElementById("restartD5").addEventListener("click", restartD5);
document.getElementById("restartD6").addEventListener("click", restartD6);
document.getElementById("restartD7").addEventListener("click", restartD7);
 
 
document.getElementById("P1").addEventListener("click", P1);
document.getElementById("M1").addEventListener("click", M1);
document.getElementById("M2").addEventListener("click", M2);
document.getElementById("M3").addEventListener("click", M3);
document.getElementById("M4").addEventListener("click", M4);
document.getElementById("M5").addEventListener("click", M5);
document.getElementById("M6").addEventListener("click", M6);
document.getElementById("M7").addEventListener("click", M7);
document.getElementById("M8").addEventListener("click", M8);
document.getElementById("M9").addEventListener("click", M9);
 
 
document.getElementById("pauseP1").addEventListener("click", pauseP1);
document.getElementById("pauseM1").addEventListener("click", pauseM1);
document.getElementById("pauseM2").addEventListener("click", pauseM2);
document.getElementById("pauseM3").addEventListener("click", pauseM3);
document.getElementById("pauseM4").addEventListener("click", pauseM4);
document.getElementById("pauseM5").addEventListener("click", pauseM5);
document.getElementById("pauseM6").addEventListener("click", pauseM6);
document.getElementById("pauseM7").addEventListener("click", pauseM7);
document.getElementById("pauseM8").addEventListener("click", pauseM8);
document.getElementById("pauseM9").addEventListener("click", pauseM9);
 
 
document.getElementById("restartP1").addEventListener("click", restartP1);
document.getElementById("restartM1").addEventListener("click", restartM1);
document.getElementById("restartM2").addEventListener("click", restartM2);
document.getElementById("restartM3").addEventListener("click", restartM3);
document.getElementById("restartM4").addEventListener("click", restartM4);
document.getElementById("restartM5").addEventListener("click", restartM5);
document.getElementById("restartM6").addEventListener("click", restartM6);
document.getElementById("restartM7").addEventListener("click", restartM7);
document.getElementById("restartM8").addEventListener("click", restartM8);
document.getElementById("restartM9").addEventListener("click", restartM9);
 
 
document.getElementById("Scratch1").addEventListener("click", Scratch1);
document.getElementById("Scratch2").addEventListener("click", Scratch2);
document.getElementById("Scratch3").addEventListener("click", Scratch3);
document.getElementById("Scratch4").addEventListener("click", Scratch4);
document.getElementById("Clap").addEventListener("click", Clap);
document.getElementById("Bark").addEventListener("click", Bark);
document.getElementById("CZ").addEventListener("click", CZ);
document.getElementById("Wu").addEventListener("click", Wu);
 
var Sc1 = new Audio(chrome.runtime.getURL("Scratch 1.mp3"));
var Sc2 = new Audio(chrome.runtime.getURL("Scratch 2.mp3"));
var Sc3 = new Audio(chrome.runtime.getURL("Scratch 3.mp3"));
var Sc4 = new Audio(chrome.runtime.getURL("Scratch 4.mp3"));
var Cl = new Audio(chrome.runtime.getURL("Clap.mp3"));
var Ba = new Audio(chrome.runtime.getURL("Bark.mp3"));
var Cz = new Audio(chrome.runtime.getURL("Russian Male CZ.mp3"));
var WU = new Audio(chrome.runtime.getURL("Wu.mp3"));
 
var d1 = new Audio(chrome.runtime.getURL("Super 1.mp3"));
var d2 = new Audio(chrome.runtime.getURL("Better 2.mp3"));
var d3 = new Audio(chrome.runtime.getURL("Super 3.mp3"));
var d4 = new Audio(chrome.runtime.getURL("Super 4.mp3"));
var d5 = new Audio(chrome.runtime.getURL("Super 5.mp3"));
var d6 = new Audio(chrome.runtime.getURL("Super 6.mp3"));
var d7 = new Audio(chrome.runtime.getURL("Super 7.mp3"));
var d8 = new Audio(chrome.runtime.getURL("Super 8.mp3"));
var d9 = new Audio(chrome.runtime.getURL("Super 9.mp3"));
 
function p1(){
    d1.play();
}
function p2(){
    d2.play();
}
function p3(){
    d3.play();
}
function p4(){
    d4.play();
}
function p5(){
    d5.play();
}
function p6(){
    d6.play();
}
function p7(){
    d7.play();
}
function p8(){
    d8.play();
}
function p9(){
    d9.play();
}
 
 
function D1(){
    chrome.runtime.sendMessage({greeting: "D1play"}, function(response) {});
}
function D2(){
    chrome.runtime.sendMessage({greeting: "D2play"}, function(response) {});
}
function D3(){
    chrome.runtime.sendMessage({greeting: "D3play"}, function(response) {});
}
function D4(){
    chrome.runtime.sendMessage({greeting: "D4play"}, function(response) {});
}
function D5(){
    chrome.runtime.sendMessage({greeting: "D5play"}, function(response) {});
}
function D6(){
    chrome.runtime.sendMessage({greeting: "D6play"}, function(response) {});
}
function D7(){
    chrome.runtime.sendMessage({greeting: "D7play"}, function(response) {});
}
function pauseD1(){
    chrome.runtime.sendMessage({greeting: "D1pause"}, function(response) {});
}
function pauseD2(){
    chrome.runtime.sendMessage({greeting: "D2pause"}, function(response) {});
}
function pauseD3(){
    chrome.runtime.sendMessage({greeting: "D3pause"}, function(response) {});
}
function pauseD4(){
    chrome.runtime.sendMessage({greeting: "D4pause"}, function(response) {});
}
function pauseD5(){
    chrome.runtime.sendMessage({greeting: "D5pause"}, function(response) {});
}
function pauseD6(){
    chrome.runtime.sendMessage({greeting: "D6pause"}, function(response) {});
}
function pauseD7(){
    chrome.runtime.sendMessage({greeting: "D7pause"}, function(response) {});
}
function restartD1(){
    chrome.runtime.sendMessage({greeting: "D1restart"}, function(response) {});
}
function restartD2(){
    chrome.runtime.sendMessage({greeting: "D2restart"}, function(response) {});
}
function restartD3(){
    chrome.runtime.sendMessage({greeting: "D3restart"}, function(response) {});
}
function restartD4(){
    chrome.runtime.sendMessage({greeting: "D4restart"}, function(response) {});
}
function restartD5(){
    chrome.runtime.sendMessage({greeting: "D5restart"}, function(response) {});
}
function restartD6(){
    chrome.runtime.sendMessage({greeting: "D6restart"}, function(response) {});
}
function restartD7(){
    chrome.runtime.sendMessage({greeting: "D7restart"}, function(response) {});
}
function P1(){
    chrome.runtime.sendMessage({greeting: "P1play"}, function(response) {});
}
function M1(){
    chrome.runtime.sendMessage({greeting: "M1play"}, function(response) {});
}
function M2(){
    chrome.runtime.sendMessage({greeting: "M2play"}, function(response) {});
}
function M3(){
    chrome.runtime.sendMessage({greeting: "M3play"}, function(response) {});
}
function M4(){
    chrome.runtime.sendMessage({greeting: "M4play"}, function(response) {});
}
function M5(){
    chrome.runtime.sendMessage({greeting: "M5play"}, function(response) {});
}
function M6(){
    chrome.runtime.sendMessage({greeting: "M6play"}, function(response) {});
}
function M7(){
    chrome.runtime.sendMessage({greeting: "M7play"}, function(response) {});
}
function M8(){
    chrome.runtime.sendMessage({greeting: "M8play"}, function(response) {});
}
function M9(){
    chrome.runtime.sendMessage({greeting: "M9play"}, function(response) {});
}
function pauseP1(){
    chrome.runtime.sendMessage({greeting: "P1pause"}, function(response) {});
}
function pauseM1(){
    chrome.runtime.sendMessage({greeting: "M1pause"}, function(response) {});
}
function pauseM2(){
    chrome.runtime.sendMessage({greeting: "M2pause"}, function(response) {});
}
function pauseM3(){
    chrome.runtime.sendMessage({greeting: "M3pause"}, function(response) {});
}
function pauseM4(){
    chrome.runtime.sendMessage({greeting: "M4pause"}, function(response) {});
}
function pauseM5(){
    chrome.runtime.sendMessage({greeting: "M5pause"}, function(response) {});
}
function pauseM6(){
    chrome.runtime.sendMessage({greeting: "M6pause"}, function(response) {});
}
function pauseM7(){
    chrome.runtime.sendMessage({greeting: "M7pause"}, function(response) {});
}
function pauseM8(){
    chrome.runtime.sendMessage({greeting: "M8pause"}, function(response) {});
}
function pauseM9(){
    chrome.runtime.sendMessage({greeting: "M9pause"}, function(response) {});
}
function restartP1(){
    chrome.runtime.sendMessage({greeting: "P1restart"}, function(response) {});
}
function restartM1(){
    chrome.runtime.sendMessage({greeting: "M1restart"}, function(response) {});
}
function restartM2(){
    chrome.runtime.sendMessage({greeting: "M2restart"}, function(response) {});
}
function restartM3(){
    chrome.runtime.sendMessage({greeting: "M3restart"}, function(response) {});
}
function restartM4(){
    chrome.runtime.sendMessage({greeting: "M4restart"}, function(response) {});
}
function restartM5(){
    chrome.runtime.sendMessage({greeting: "M5restart"}, function(response) {});
}
function restartM6(){
    chrome.runtime.sendMessage({greeting: "M6restart"}, function(response) {});
}
function restartM7(){
    chrome.runtime.sendMessage({greeting: "M7restart"}, function(response) {});
}
function restartM8(){
    chrome.runtime.sendMessage({greeting: "M8restart"}, function(response) {});
}
function restartM9(){
    chrome.runtime.sendMessage({greeting: "M9restart"}, function(response) {});
}
 
 
function Scratch1(){
    Sc1.play();
}
function Scratch2(){
    Sc2.play();
}
function Scratch3(){
    Sc3.play();
}
function Scratch4(){
    Sc4.play();
}
function Clap(){
    Cl.play();
}
function Bark(){
    Ba.play();
}
function CZ(){
    Cz.play();
}
function Wu(){
    WU.play();
}
