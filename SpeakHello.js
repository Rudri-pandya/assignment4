(function(window){var speakWord = "Hello";
function speak(name) {
    console.log(speakWord + " " + name);
  }
  var helloSpeaker={};
  helloSpeaker.speak= function(){
  speak("john")}
})(window)