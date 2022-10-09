var SpeechRecognition = window.webkitSpeechRecognition;

var recgonition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recgonition.start();
}

recgonition.onresult = funciton(event) {
   
    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content);
    
    document.getElementById("textbox").innerHTML = Content;
}