/**
 * GUESSING GAME:
 *
 * Created By:Jeff Namenye
 * Date: 5/14/14
 * 
 * GUESSING GAME
 */

    //Game variables
    (function () {

//my variables
        var guessMade = 0;
        var guessRemain = 0;
        var playerGuess = 0;

        // my html id and tag set up in my DOM
        var dom = {
            input: document.querySelector("#input"),
            output: document.querySelector("#output"),
            button: document.querySelector("button")
        };
        // my math program for pick random number
        var randomNum = Math.floor((Math.random() * 10) + 1);

        var clickFn =  function (e){
            console.log(guessRemain);
             validateInput();
         };

        // validates player guess
        var validateInput = function(){
            playerGuess =parseInt(dom.input.value);

            if(isNaN(playerGuess)){
                dom.output.innerHTML = "Please enter a number.";

            }else if (playerGuess < 1 || playerGuess > 10){
                dom.output.innerHTML = "Please make your guess between 1 and 10.";
            }else{
                playGame();
            };

        };
        // This is used to update the counter
        var playGame = function(){
            guessRemain--;
            guessMade++;
            gameState =" Guess: " + guessMade + " , Remaining: " + guessRemain;


        }


    })();