
var words = ["Joe", "Anna", "Trey", "Kelly", "John", "Mindy", "Oma", "Opa", "Stephen", "Grandmamma", "Grandaddy", "Niko", "Winston", "Milo", "Gabriella"];

var instructions = "Type a letter to start guessing the word.";

var blanks = 0;

var chosenWordArray = [];

var blanksArray = [];
          
var randomNumber = Math.floor(Math.random() * words.length);

console.log(randomNumber);

var chosenWord = words[randomNumber];

console.log(chosenWord);

$(document).ready(function() {

      for (var i = 0; i < chosenWord.length; i++) {
              chosenCharacter = chosenWord.charAt(i).toLowerCase();
              console.log(chosenCharacter);
              chosenWordArray.push(chosenCharacter);
              console.log(chosenWordArray);
              blanksArray.push("_ ");
              console.log(blanksArray);
      }
      
      $("#startButton").on("click", function() { 

      });

});


document.onkeyup = function(event) {
        var userType = String.fromCharCode(event.keyCode).toLowerCase();
        console.log(userType);


        for (var j=0; j < chosenWordArray.length; j++) {

            if (userType === chosenWordArray[j]) {
              blanksArray[j] = chosenWordArray[j];
              console.log(blanksArray);
            }

        }



        $("#blankArea").text(blanksArray);

          // switch (userType) {

          //   case "h":
          //     car.honk()
          //     car.reWriteStats()
          //     console.log("should be working")
          //     break;

          //   case "d":
          //     car.driveToWork()
          //     car.reWriteStats()
          //     console.log("should be working")
          //     break;
          //   case "w":
          //     car.driveAroundWorld()
          //     car.reWriteStats()
          //     console.log("should be working")
          //     break;
          //   case "t":
          //     car.getTuneUp()
          //     car.reWriteStats()
          //     console.log("should be working")
          //     break;
          //   default: 
          //     return "I'm sorry, but your choice is not valid."
          //     break;
          // }
      };

