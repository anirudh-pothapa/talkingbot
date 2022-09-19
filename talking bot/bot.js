const button =document.querySelector("button");//to get the button element from the html

const SpeechRecognition = window.SpeechRecognition ||window.webkitSpeechRecognition;//get the speech recognition api of the browser and if 

//the browser doesnt support that check if the webkit  speech recognition is available.
const recognition=new SpeechRecognition(); 

recognition.onstart =function(){
    console.log("speech recognition started")
}

recognition.onresult=function(event){
    console.log(event);

    const spokenwords= event.results[0][0].transcript;

    console.log("spoken words are",spokenwords);

    computerSpeech(spokenwords);
}

function computerSpeech(words)
{
    const speech=new SpeechSynthesisUtterance();
    speech.lang="en-US";
    speech.pitch=0.9;
    speech.volume=1;
    speech.rate=1;
    // speech.text=words;   it will take the words we say to the bot and repeat them as it is.


    determineWords(speech,words)
    window.speechSynthesis.speak(speech);
}

function determineWords(speech,words)
{
    if(words.includes("how are you"))
     {
        speech.text ="why do you care u narcissist ha! ";
    }

    if(words.includes("who am I"))
    {
        speech.text ="you are my creator! anirudh ";
    }

if(words.includes("how is the weather"))
{
    speech.text ="why do you care you never go out, you sloth";

}

if(words.includes("open YouTube"))
{
    speech.text ="opening youtube for you ";
    window.open("https://www.youtube.com/");

}
if(words.includes("open Instagram"))
{
    speech.text ="opening instagram for you ";
    window.open("https://www.instagram.com/?hl=en");
}

if(words.includes("open Google"))
{
    speech.text ="opening google for you ";
    window.open("https://www.google.com/");
}

}

button.addEventListener("click",()=>
{
    recognition.start();
})

                