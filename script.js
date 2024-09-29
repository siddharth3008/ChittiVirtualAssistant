let btn=document.getElementById("btn");
let content=document.getElementById("content")
let voice=document.getElementById("voice")
function speak(text)
{
    let text_speak=new SpeechSynthesisUtterance(text);
    text_speak.rate=1;
    text_speak.pitch=1;
    text_speak.volume=1;
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak);
}
function wishme(){
    let day= new Date()
    let hrs=day.getHours
    if(hrs>=0 &&hrs<12)
    {
        speak("good morning how are you")
    }
    else if(hrs>12 && hrs<16)
    {
        speak("good afternoon how are you")
    }
    else{
        speak("good evening how are you ")
    }

}
// setTimeout(function() {
//     location.reload(); // Reloads the page
// }, 5000); // Refreshes the page after 5 seconds

// window.addEventListener('load',()=>{
//     wishme();
// })
let speechRecognition=window.SpeechRecognition ||window.webkitSpeechRecognition
let recognition=new speechRecognition()
recognition.onresult=(event)=>{
    let curntIndex=event.resultIndex
    let trans=event.results[curntIndex][0].transcript
    content.innerText=trans
    takeCommand(trans.toLowerCase())
}
btn.addEventListener('click',()=>{
   
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})
function takeCommand(message) {
    btn.style.display="none"
    //voice.onmouseleave.display="none"
    // Greeting
    if(message.includes("hello") || message.includes("hey")) {
        speak("Hello, what can I help you with?");
    } 
    // Self introduction
    else if(message.includes("who are you") || message.includes("hu r u")) {
        speak("I'm Chitti, a virtual assistant created by Siddharth sir.");
    } 
    // Opening websites
    else if(message.includes("open youtube") || message.includes("open u tube")) {
        speak("Opening YouTube.");
        window.open("https://www.youtube.com");
    } 
    else if(message.includes("open google")) {
        speak("Opening Google.");
        window.open("https://www.google.com");
    } 
    else if(message.includes("open github")) {
        speak("Opening GitHub.");
        window.open("https://github.com");
    } 
    else if(message.includes("open facebook")) {
        speak("Opening Facebook.");
        window.open("https://www.facebook.com");
    }
    else if(message.includes("open instagram")) {
        speak("Opening Instagram.");
        window.open("https://www.instagram.com");
    }
    else if(message.includes("open twitter")) {
        speak("Opening Twitter.");
        window.open("https://www.twitter.com");
    }
    else if(message.includes("open netflix")) {
        speak("Opening Netflix.");
        window.open("https://www.netflix.com");
    }
    else if(message.includes("open amazon")) {
        speak("Opening Amazon.");
        window.open("https://www.amazon.com");
    }
    // Time-related commands
    else if(message.includes("what is the time") || message.includes("tell me the time")) {
        let currentTime = new Date().toLocaleTimeString();
        speak("The current time is " + currentTime);
    }
    else if(message.includes("what is today's date") || message.includes("tell me the date")) {
        let today = new Date().toLocaleDateString();
        speak("Today's date is " + today);
    }
    // Weather and news
    else if(message.includes("what's the weather") || message.includes("tell me the weather")) {
        speak("Checking the weather for you.");
        window.open("https://www.weather.com");
    } 
    else if(message.includes("what's the news") || message.includes("tell me the news")) {
        speak("Checking the latest news for you.");
        window.open("https://news.google.com");
    }
    // Music and entertainment
    else if(message.includes("play music")) {
        speak("Playing music for you.");
        window.open("https://www.spotify.com");
    }
    else if(message.includes("play some video") || message.includes("play video")) {
        speak("Playing a video.");
        window.open("https://www.youtube.com");
    }
    else if(message.includes("play movie")) {
        speak("Playing a movie for you.");
        window.open("https://www.netflix.com");
    }
    // Calendar and reminders
    else if(message.includes("set a reminder")) {
        speak("Please tell me what you want to be reminded of.");
        // Implement reminder functionality
    }
    else if(message.includes("what's my schedule today")) {
        speak("Let me check your schedule.");
        // Integrate calendar or to-do list
    }
    // Math calculations
    else if(message.includes("calculate")) {
        let expression = message.split("calculate ")[1];
        try {
            let result = eval(expression);
            speak("The result is " + result);
        } catch (e) {
            speak("Sorry, I couldn't calculate that.");
        }
    }
    // Daily routines
    else if(message.includes("set alarm")) {
        speak("Setting an alarm for you.");
        // Implement alarm functionality
    }
    else if(message.includes("what should I eat today")) {
        speak("How about trying something healthy like a salad or some fruit?");
    }
    else if(message.includes("make a shopping list")) {
        speak("What items do you want to add to your shopping list?");
        // Implement shopping list functionality
    }
    else if(message.includes("what's for dinner")) {
        speak("I suggest trying something light like soup or grilled vegetables.");
    }
    else if(message.includes("book a flight")) {
        speak("Redirecting to a flight booking site.");
        window.open("https://www.expedia.com/Flights");
    }
    else if(message.includes("book a hotel")) {
        speak("Redirecting to a hotel booking site.");
        window.open("https://www.booking.com");
    }
    // Health and fitness
    else if(message.includes("how many steps today")) {
        speak("You have taken 5,000 steps today.");
        // Implement step counter integration
    }
    else if(message.includes("start workout")) {
        speak("Starting a quick workout for you.");
        window.open("https://www.youtube.com/results?search_query=workout+routine");
    }
    // Learning and study-related commands
    else if(message.includes("learn a new word")) {
        speak("Here's a new word for you: Ephemeral, meaning lasting for a very short time.");
    }
    else if(message.includes("solve a math problem")) {
        speak("Tell me the math problem you'd like me to solve.");
    }
    else if(message.includes("study session")) {
        speak("Let's start a 25-minute study session.");
        // Implement Pomodoro timer for study sessions
    }
    else if(message.includes("take a break")) {
        speak("Sure, take a 5-minute break. Relax and come back strong!");
    }
    // Fun commands
    else if(message.includes("tell me a joke")) {
        speak("Why don't programmers like nature? It has too many bugs.");
    }
    else if(message.includes("tell me a fact")) {
        speak("Did you know? Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.");
    }
    else if(message.includes("do you love me")) {
        speak("I'm just a virtual assistant, but I care about helping you.");
    }
    // Communication
    else if(message.includes("send an email")) {
        speak("Please tell me the recipient and the message you'd like to send.");
        // Implement email sending functionality
    }
    else if(message.includes("call a friend")) {
        speak("Please provide the friend's contact.");
        // Implement phone call functionality
    }
    else if(message.includes("send a text message")) {
        speak("Please tell me the message you'd like to send.");
        // Implement text message sending functionality
    }
    // Motivation and mood
    else if(message.includes("motivate me") || message.includes("I'm feeling down")) {
        speak("Remember, tough times never last, but tough people do. Keep going!");
    }
    else if(message.includes("i'm stressed")) {
        speak("Take a deep breath, everything is going to be fine.");
    }
    else if(message.includes("cheer me up")) {
        speak("Here's a fun fact: A group of flamingos is called a 'flamboyance'! Isn't that awesome?");
    }
    // Social commands
    else if(message.includes("what's trending on twitter")) {
        speak("Checking what's trending on Twitter.");
        window.open("https://www.twitter.com/explore");
    }
    else if(message.includes("post on twitter")) {
        speak("Opening Twitter for you to post.");
        window.open("https://twitter.com/intent/tweet");
    }
    else if(message.includes("check messages on facebook")) {
        speak("Checking your messages on Facebook.");
        window.open("https://www.facebook.com/messages");
    }
    // Work-related commands
    else if(message.includes("create a document")) {
        speak("Opening Google Docs for you to create a document.");
        window.open("https://docs.google.com");
    }
    else if(message.includes("open my email")) {
        speak("Opening your email.");
        window.open("https://mail.google.com");
    }
    else if(message.includes("schedule a meeting")) {
        speak("Scheduling a meeting for you.");
        // Implement calendar integration for meetings
    }
    // Miscellaneous commands
    else if(message.includes("where am I")) {
        navigator.geolocation.getCurrentPosition(function(position) {
            speak("You are at latitude: " + position.coords.latitude + ", longitude: " + position.coords.longitude);
        });
    }
    else if(message.includes("translate this")) {
        speak("Opening Google Translate.");
        window.open("https://translate.google.com");
    }
    else if(message.includes("define")) {
        let word = message.split("define ")[1];
        speak("Let me look up the definition for " + word);
        window.open("https://www.dictionary.com/browse/" + word);
    }
    else if(message.includes("open calculator")) {
        speak("Opening the calculator.");
        window.open("https://www.calculator.com");
    }
    // Catch-all for unknown commands
    else {
        speak("here is that i found on internet")
        window.open(`https://www.google.com/search?q=${message}`);
    }
}
