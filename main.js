x = 0;
y = 0;
screen_width=0;
screen_height=0;
apple="";
speak_data="";
draw_apple = "";
to_number="";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();
function clear_canvas(){
//const images = canvas.apple.OfType<Image>("apple.png").ToList();
//foreach ( images in images)
//{
    //canvas.apple.Remove(image);
//}
//clearRect(screen_width,screen_height);
canvas.width = canvas.width;
}

function preload()
{
  apple=loadImage("apple.png");
  
}



function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 
 
var content = event.results[0][0].transcript;
 //if(content == "apple" || content == "Apple")
 //{
  //draw_apple="set";
  //console.log("Apple function working")
 // document.getElementById("status").innerHTML = "The speech has been recognized: " + content;
//} else {
 // document.getElementById("status").innerHTML = "The speech has not been recognized: " + content;
//}
    to_number = Number(content);
    console.log(to_number);
    if(Number.isInteger(to_number)){
      draw_apple="set";
      document.getElementById("status").innerHTML = "The speech has been recognized: " + content;
    } else {
      document.getElementById("status").innerHTML = "The speech has not been recognized: " + content;
    }
    
}

function setup() {
  screen_width = window.innerWidth;
  screen_height = window.innerHeight;
    createCanvas()
    {
     canvas=createCanvas(screen_width,screen_height);
      canvas.position(Math.floor(Math.random(0-150)))
    }
}

function draw() {
  if(draw_apple == "set")
  {
   
  for(var i = 1; i <= to_number; i++)
    {
      console.log("for working")
      x = Math.floor(Math.random()*700);
      y = Math.floor(Math.random()*400);
      image(apple,x,y,50,50)
    }
  document.getElementById("status").innerHTML = to_number + " Apples drawn";
  speak_data=to_number + " Apples drawn";
  speak(speak_data);
  draw_apple = "";
}
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}

function clear_canvas(){
  clear();
  document.getElementById("status").innerHTML = "";
}
