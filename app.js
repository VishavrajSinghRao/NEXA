
const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

const body = document.body;




function speak(text){
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}


function wishMe(){

    var day = new Date();
    var hour = day.getHours();

    if(hour>=0 && hour<12)
        speak("Good Morning Boss...");

    else if(hour>12 && hour<17)
        speak("Good Afternoon Mastter");

    else{
         speak("Good Evening Sir");
        
    }
}

window.addEventListener('load', ()=> {
            speak("Initializing nexa");
             wishMe();
             
});


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onresult = (event) =>{
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());

}

btn.addEventListener('click', () => {
    content.textContent = "Listening..."
    recognition.start();
})

function takeCommand(message){

     if(message.includes('hey') || message.includes('hello')){
        speak("Hello Sir, HoW May I Help You?");
     }

     else if(message.includes("name")){
        speak('my name is nexa and what your sir');

     }

     else if(message.includes("open google")){
        window.open("https://google.com", "_blank");
        speak("Opening Google");
     }

     else if(message.includes("open youtube")){
         
         window.open("https://youtube.com", "_blank");
         speak("Opening Youtube");
     }

     else if(message.includes("open facebook")){
         
         window.open("https://facebook.com", "_blank");
         speak("Opening Facebook");
     }

    else if(message.includes("open instagram")){
         
         window.open("https://instagram.com", "_blank");
         speak("Opening Instagram");
    }

    else if(message.includes("open chatgpt")){
        window.open("https://openai.com");
         speak("Opening Chatgpt");
    }

    else if(message.includes('open linkedln')){
        window.open('https://in.linkedln.com');
        speak("Opening Linkedln");
    }

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')){

        window.open(`https:/google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regardinng" + message;
        speak(finalText);
    }

    else if(message.includes('wikipedia')){
        window.open(`https://wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");

        const finalText = "This is what i found regarding" + message;
        speak(finalText);
    }

    //  else if(message.includes("time")){
    //     const time = new Date();
    //     toLocalString(undefined, {hour: "numeric", minute: "numeric"})
    //     const finalText = time;
    //     speak(finalText);
    //  }

    else if(message.includes('dark theme')){
        toggleTheme('dark');
    }

     else if(message.includes('light theme')){
        toggleTheme('light');
     }


     else if(message.includes('open twitter')){
          window.open('https://x.com');
          speak("Opening Twitter");
     }
    
    else if(message.includes("open calculator")){
        window.open('Calculator:///');
        const finalText = "Opening Calculator";
        speak(finalText);
    }

    else if (message.includes("tell me the time")) {
        const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        speak("The current time is " + time);
    }


    else if (message.includes("tell me the date")) {
        const date = new Date();
        speak("The current date is " + date );
    }

     else{
        window.open(`https://google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + "on google";
        speak(finalText);
     }

}


function toggleTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark-theme');
        body.classList.remove('light-theme');
        speak('dark theme activated');
    } else if (theme === 'light') {
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
        speak('light theme activated');
    }
}


  
    