
var correct=0;

var firstQuestion= prompt("Which language is created for markup? ");
if(firstQuestion.toUpperCase==="HTML"){
  correct+=1;
}

var secondQuestion= prompt("Which language is made for designing the webpages?");
if(secondQuestion.toUpperCase==="CSS"){
  correct+=1;
}

var thirdQuestion= prompt("Which language is using for making interactive webpages?");
if (thirdQuestion.toUpperCase==="JAVASCRIPT"){
  correct+=1;
}

var fourthQuestion=prompt("Which language known by the snake name?");
if (fourthQuestion.toUpperCase==="PYTHON"){
  correct+=1;
}

var fifthQuestion= prompt("Which language is known as the basic language?");
if (fifthQuestion.toUpperCase==="C"){
  correct+=1;
}

if(correct===5){
  document.write("Congrats you won gold coin!");
}

if (correct  >= 3){
  document.write("Congrats you won silver coin! ");
}

if(correct>= 1){
  document.write("Congrats you won bronze coin! ");
}
