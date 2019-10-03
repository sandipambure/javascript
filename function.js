
            // -------Function program---------

// ------------Function Declaration-------------

prompt("Do you know javascript Language?");
function highAlert(){
  var randomNumber= Math.floor(Math.random()*6+1);
  alert(randomNumber);
}
highAlert()
highAlert()
highAlert()


   // ------------------Function Expression-------------

prompt("Do you know javascript Language?");
var alertRandom = function(){
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  alert(randomNumber);
}

alertRandom();
alertRandom();
alertRandom();
