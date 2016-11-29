
var words = ["Joe", "Anna", "Trey", "Kelly", "John", "Mindy", "Oma", "Opa", "Stephen", "Grandmamma", "Grandaddy", "Niko", "Winston", "Milo", "Gabriella"];

var instructions = "Type a letter to start guessing the word.";

var blanks = 0;

var chosenWordArray = [];

var blanksArray = [];

var lettersGuessed = [];
          
var randomNumber = 0;

var chosenWord = '';


var chooseNewWord = function() {

  chosenWordArray = [];
  blanksArray = [];
  lettersGuessed = [];
  $("#guessedLetters").text("");
  $("#blankArea").text("???");

  randomNumber = Math.floor(Math.random() * words.length);
  console.log(randomNumber);

  chosenWord = words[randomNumber];
  console.log(chosenWord);

  for (var i = 0; i < chosenWord.length; i++) {
    var chosenCharacter = chosenWord.charAt(i).toLowerCase();
    console.log(chosenCharacter);
    chosenWordArray.push(chosenCharacter);
    console.log(chosenWordArray);
    blanksArray.push("_ ");
    console.log(blanksArray);
  }
}

$(document).ready(function() {

  $("#startButton").on("click", function() { 
    console.log("Button pushed!");
    chooseNewWord();
    $("#guessedLetters").text("");
    $("#blankArea").text(blanksArray.join(""));
  });

  chooseNewWord();
});


document.onkeyup = function(event) {

        //userType defined and logged to console
        var userType = String.fromCharCode(event.keyCode).toLowerCase();
        console.log(userType);

        // attempting to locate the current letter in list of guesses
        var isInArray = jQuery.inArray(userType.toUpperCase(), lettersGuessed);
        console.log(isInArray + " is isInArray right now, and is the index of the last guess");
        console.log(lettersGuessed + " is lettersGuessed after last guess");

        // if list of guesses contains letter already, alert.
        if(isInArray > -1) {
          alert("You already guessed that letter!");
        }

        //if list of guesses doesn't contain letter, continue.
        else {
        
          // creating a t/f variable to check user's guess
          var containsLetter = false;

          // adding the letter to the list of letters guessed
          lettersGuessed.push(userType.toUpperCase());
          console.log(lettersGuessed);

          // loop through each letter of chosen word and see if userType matches any letter. if so print out to page and flip t/f variable.
          for (var j=0; j < chosenWordArray.length; j++) {
              if (userType === chosenWordArray[j]) {
                blanksArray[j] = chosenWordArray[j].toUpperCase();
                console.log(blanksArray);
                containsLetter = true;
              }
          }

          // if the letter is not in the chosen word, add to wrong letters list on page
          if (!containsLetter){
            $("#guessedLetters").prepend(userType + " ");
          } 

          $("#blankArea").text(blanksArray.join("")); 

          var correctLetters = blanksArray.join("");
          console.log("Variable correctLetters is " + correctLetters);

          var fullWord = chosenWordArray.join("").toUpperCase();
          console.log("fullWord variable is now " + fullWord);

          if(correctLetters === fullWord) {
            console.log("USER WINS!!!");
            alert("YOU WON!!!!!");
            chooseNewWord();
          }
        }         
};

// function isLetter(str) {
//   return str.length === 1 && str.match(/[a-z]/i);
// }

