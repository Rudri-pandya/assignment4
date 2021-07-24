(function(window){
    var speakWord = "Good Bye";
function speak(name) {
    console.log(speakWord + " " + name);
  }
  var byespeak={};
  byespeak.speak= function()
  {speak("jen")}  
})(window)