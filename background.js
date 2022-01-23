var Drum1 = new Audio(chrome.runtime.getURL("Drum Pattern 1.mp3"));
var Drum2 = new Audio(chrome.runtime.getURL("Drum Pattern 2.mp3"));
var Drum3 = new Audio(chrome.runtime.getURL("New Drum Pattern 5.mp3"));
var Drum4 = new Audio(chrome.runtime.getURL("Drum Pattern 4.mp3"));
var Drum5 = new Audio(chrome.runtime.getURL("New Drum Pattern 3.mp3"));
var Drum6 = new Audio(chrome.runtime.getURL("Drum Pattern 6.mp3"));
var Drum7 = new Audio(chrome.runtime.getURL("Drum Pattern 7.mp3"));
 
var Piano1 = new Audio(chrome.runtime.getURL("Piano 1.mp3"));
var Melody1 = new Audio(chrome.runtime.getURL("Piano 2.mp3"));
var Melody2 = new Audio(chrome.runtime.getURL("Better Piano 3.mp3"));
var Melody3 = new Audio(chrome.runtime.getURL("Melody 5.mp3"));
var Melody4 = new Audio(chrome.runtime.getURL("Melody 2.mp3"));
var Melody5 = new Audio(chrome.runtime.getURL("Melody 3.mp3"));
var Melody6 = new Audio(chrome.runtime.getURL("Better Melody 4.mp3"));
var Melody7 = new Audio(chrome.runtime.getURL("Melody 6.mp3"));
var Melody8 = new Audio(chrome.runtime.getURL("Melody 8.mp3"));
var Melody9 = new Audio(chrome.runtime.getURL("Melody 7.mp3"));
 
 
Drum1.addEventListener('timeupdate', function(){
    var buffer = .22
    if(this.currentTime > this.duration - buffer){
        this.currentTime = 0
        this.play()
    }
});
Drum2.addEventListener('timeupdate', function(){
    var buffer = .22
    if(this.currentTime > this.duration - buffer){
        this.currentTime = 0
        this.play()
    }
});
Drum3.addEventListener('timeupdate', function(){
    var buffer = .22
    if(this.currentTime > this.duration - buffer){
        this.currentTime = 0
        this.play()
    }
});
Drum4.addEventListener('timeupdate', function(){
    var buffer = .22
    if(this.currentTime > this.duration - buffer){
        this.currentTime = 0
        this.play()
    }
});
Drum5.addEventListener('timeupdate', function(){
    var buffer = .22
    if(this.currentTime > this.duration - buffer){
        this.currentTime = 0
        this.play()
    }
});
Drum6.addEventListener('timeupdate', function(){
    var buffer = .22
    if(this.currentTime > this.duration - buffer){
        this.currentTime = 0
        this.play()
    }
});
Drum7.addEventListener('timeupdate', function(){
    var buffer = .22
    if(this.currentTime > this.duration - buffer){
        this.currentTime = 0
        this.play()
    }
});
Piano1.addEventListener('timeupdate', function(){
    var buffer = .22
    if(this.currentTime > this.duration - buffer){
        this.currentTime = 0
        this.play()
    }
});
Melody1.addEventListener('timeupdate', function(){
    var buffer = .22
    if(this.currentTime > this.duration - buffer){
        this.currentTime = 0
        this.play()
    }
});
Melody2.addEventListener('timeupdate', function(){
    var buffer = .22
    if(this.currentTime > this.duration - buffer){
        this.currentTime = 0
        this.play()
    }
});
Melody3.addEventListener('timeupdate', function(){
    var buffer = .22
    if(this.currentTime > this.duration - buffer){
        this.currentTime = 0
        this.play()
    }
});
Melody4.addEventListener('timeupdate', function(){
    var buffer = .22
    if(this.currentTime > this.duration - buffer){
        this.currentTime = 0
        this.play()
    }
});
Melody5.addEventListener('timeupdate', function(){
    var buffer = .22
    if(this.currentTime > this.duration - buffer){
        this.currentTime = 0
        this.play()
    }
});
Melody6.addEventListener('timeupdate', function(){
    var buffer = .22
    if(this.currentTime > this.duration - buffer){
        this.currentTime = 0
        this.play()
    }
});
Melody7.addEventListener('timeupdate', function(){
    var buffer = .22
    if(this.currentTime > this.duration - buffer){
        this.currentTime = 0
        this.play()
    }
});
Melody8.addEventListener('timeupdate', function(){
    var buffer = .22
    if(this.currentTime > this.duration - buffer){
        this.currentTime = 0
        this.play()
    }
});
Melody9.addEventListener('timeupdate', function(){
    var buffer = .22
    if(this.currentTime > this.duration - buffer){
        this.currentTime = 0
        this.play()
    }
});
 
 
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.greeting == 'D1play'){
            sendResponse({farewell: "played"});
            Drum1.play();
        }
        else if (request.greeting == 'D1pause') {
            sendResponse({farewell: "paused"});
            Drum1.pause();
        }
        else if (request.greeting == 'D1restart') {
            sendResponse({farewell: "restarted"});
            Drum1.currentTime = 0
        }
        else if (request.greeting == 'D2play'){
            sendResponse({farewell: "played"});
            Drum2.play()
        }
        else if (request.greeting == 'D2pause') {
            sendResponse({farewell: "paused"});
            Drum2.pause();
        }
        else if (request.greeting == 'D2restart') {
            sendResponse({farewell: "restarted"});
            Drum2.currentTime = 0
        }
        if (request.greeting == 'D3play'){
            sendResponse({farewell: "played"});
            Drum3.play();
        }
        else if (request.greeting == 'D3pause') {
            sendResponse({farewell: "paused"});
            Drum3.pause();
        }
        else if (request.greeting == 'D3restart') {
            sendResponse({farewell: "restarted"});
            Drum3.currentTime = 0
        }
        else if (request.greeting == 'D4play') {
            sendResponse({farewell: "restarted"});
            Drum4.play();
        }
        else if (request.greeting == 'D4pause') {
            sendResponse({farewell: "restarted"});
            Drum4.pause();
        }
        else if (request.greeting == 'D4restart') {
            sendResponse({farewell: "restarted"});
            Drum4.currentTime = 0
        }
        else if (request.greeting == 'D5play') {
            sendResponse({farewell: "restarted"});
            Drum5.play();
        }
        else if (request.greeting == 'D5pause') {
            sendResponse({farewell: "restarted"});
            Drum5.pause();
        }
        else if (request.greeting == 'D5restart') {
            sendResponse({farewell: "restarted"});
            Drum5.currentTime = 0
        }
        else if (request.greeting == 'D6play') {
            sendResponse({farewell: "restarted"});
            Drum6.play();
        }
        else if (request.greeting == 'D6pause') {
            sendResponse({farewell: "restarted"});
            Drum6.pause();
        }
        else if (request.greeting == 'D6restart') {
            sendResponse({farewell: "restarted"});
            Drum6.currentTime = 0
        }
        else if (request.greeting == 'D7play') {
            sendResponse({farewell: "restarted"});
            Drum7.play();
        }
        else if (request.greeting == 'D7pause') {
            sendResponse({farewell: "restarted"});
            Drum7.pause();
        }
        else if (request.greeting == 'D7restart') {
            sendResponse({farewell: "restarted"});
            Drum7.currentTime = 0
        }
        else if (request.greeting == 'P1play') {
            sendResponse({farewell: "restarted"});
            Piano1.play();
        }
        else if (request.greeting == 'P1pause') {
            sendResponse({farewell: "restarted"});
            Piano1.pause();
        }
        else if (request.greeting == 'P1restart') {
            sendResponse({farewell: "restarted"});
            Piano1.currentTime = 0
        }
        else if (request.greeting == 'M1play') {
            sendResponse({farewell: "restarted"});
            Melody1.play();
        }
        else if (request.greeting == 'M1pause') {
            sendResponse({farewell: "restarted"});
            Melody1.pause();
        }
        else if (request.greeting == 'M1restart') {
            sendResponse({farewell: "restarted"});
            Melody1.currentTime = 0
        }
        else if (request.greeting == 'M2play') {
            sendResponse({farewell: "restarted"});
            Melody2.play();
        }
        else if (request.greeting == 'M2pause') {
            sendResponse({farewell: "restarted"});
            Melody2.pause();
        }
        else if (request.greeting == 'M2restart') {
            sendResponse({farewell: "restarted"});
            Melody2.currentTime = 0
        }
        else if (request.greeting == 'M3play') {
            sendResponse({farewell: "restarted"});
            Melody3.play();
        }
        else if (request.greeting == 'M3pause') {
            sendResponse({farewell: "restarted"});
            Melody3.pause();
        }
        else if (request.greeting == 'M3restart') {
            sendResponse({farewell: "restarted"});
            Melody3.currentTime = 0
        }
        else if (request.greeting == 'M4play') {
            sendResponse({farewell: "restarted"});
            Melody4.play();
        }
        else if (request.greeting == 'M4pause') {
            sendResponse({farewell: "restarted"});
            Melody4.pause();
        }
        else if (request.greeting == 'M4restart') {
            sendResponse({farewell: "restarted"});
            Melody4.currentTime = 0
        }
        else if (request.greeting == 'M5play') {
            sendResponse({farewell: "restarted"});
            Melody5.play();
        }
        else if (request.greeting == 'M5pause') {
            sendResponse({farewell: "restarted"});
            Melody5.pause();
        }
        else if (request.greeting == 'M5restart') {
            sendResponse({farewell: "restarted"});
            Melody5.currentTime = 0
        }
        else if (request.greeting == 'M6play') {
            sendResponse({farewell: "restarted"});
            Melody6.play();
        }
        else if (request.greeting == 'M6pause') {
            sendResponse({farewell: "restarted"});
            Melody6.pause();
        }
        else if (request.greeting == 'M6restart') {
            sendResponse({farewell: "restarted"});
            Melody6.currentTime = 0
        }
        else if (request.greeting == 'M7play') {
            sendResponse({farewell: "restarted"});
            Melody7.play();
        }
        else if (request.greeting == 'M7pause') {
            sendResponse({farewell: "restarted"});
            Melody7.pause();
        }
        else if (request.greeting == 'M7restart') {
            sendResponse({farewell: "restarted"});
            Melody7.currentTime = 0
        }
        else if (request.greeting == 'M8play') {
            sendResponse({farewell: "restarted"});
            Melody8.play();
        }
        else if (request.greeting == 'M8pause') {
            sendResponse({farewell: "restarted"});
            Melody8.pause();
        }
        else if (request.greeting == 'M8restart') {
            sendResponse({farewell: "restarted"});
            Melody8.currentTime = 0
        }
        else if (request.greeting == 'M9play') {
            sendResponse({farewell: "restarted"});
            Melody9.play();
        }
        else if (request.greeting == 'M9pause') {
            sendResponse({farewell: "restarted"});
            Melody9.pause();
        }
        else if (request.greeting == 'M9restart') {
            sendResponse({farewell: "restarted"});
            Melody9.currentTime = 0
        }
    }
  );
