//1. var randomNumber_1 bw 19-120 must be applied to the computerGuess <h1>
//a. Math.floor(Math.random() * (120 - 19) + 19);
//2. randomNumber_2 function bw 1-12 must be applied to crystalOne variable
//3. randomNumber_3 function bw 1-12 must be applied to crystalTwo variable
//4. randomNumber_4 function bw 1-12 must be applied to crystalThree variable
//5. randomNumber_5 function  bw 1-12 must be applied to crystalFour variable
//6. create totalScore variable
//7. create winCount variable; create loseCount variable
//7. If img clicked, then crystalx variable added to totalScore variable and appended/texted to the div
//8. If totalScore = ComputerGuess, then winCount++
//9. If totalScore > ComputerGuess, then loseCount++
//10.If totalScore
//10.If win or lose, then new ComputerGuess, totalScore = 0; new randomNumbers for each crystalx variable, increment up the wins and loses scores

$(document).ready(function() {


    var computerGuess = Math.floor(Math.random() * (120 - 19) + 19);
    var crystalOne = Math.floor(Math.random() * (12 - 1) + 1);
    var crystalTwo = Math.floor(Math.random() * (12 - 1) + 1);
    var crystalThree = Math.floor(Math.random() * (12 - 1) + 1);
    var crystalFour = Math.floor(Math.random() * (12 - 1) + 1);
    var totalScore = 0;
    var winCount = 0;
    var loseCount = 0;



    $("#computerGuess").text(computerGuess);


    $("#crystalOne").on("click", function() {
        $("#totalScore").text(totalScore + crystalOne);
        totalScore = totalScore + crystalOne;
        console.log(computerGuess);
        console.log(totalScore);
        if (computerGuess === totalScore) {
            alert("You Won! Your Total Score will reset to zero and all the crystals will have a new random number assigned to them on the next click.  Also, your matching number will change!")
            winCount++
            $("#wins").text("Wins: " + winCount)
            totalScore = 0
            crystalOne = Math.floor(Math.random() * (12 - 1) + 1);
            crystalTwo = Math.floor(Math.random() * (12 - 1) + 1);
            crystalThree = Math.floor(Math.random() * (12 - 1) + 1);
            crystalFour = Math.floor(Math.random() * (12 - 1) + 1);
            computerGuess = Math.floor(Math.random() * (120 - 19) + 19)
            $("#computerGuess").text(computerGuess); 
        } else if (totalScore > computerGuess) {
            alert("You lost! Your Total Score will reset to zero, but your crystal numbers and matching number will remain the same.")
            loseCount++
            $("#losses").text("Losses: " + loseCount)
            totalScore = 0
            $("#totalScore").text(totalScore);    
        }
        else { return false
    
        }
    })


    $("#crystalTwo").on("click", function() {
        $("#totalScore").text(totalScore + crystalTwo);
        totalScore = totalScore + crystalTwo;
        if (computerGuess === totalScore) {
            alert("You Won! Your Total Score will reset to zero and all the crystals will have a new random number assigned to them on the next click.  Also, your matching number will change!")
            winCount++
            $("#wins").text("Wins: " + winCount)
            totalScore = 0
            crystalOne = Math.floor(Math.random() * (12 - 1) + 1);
            crystalTwo = Math.floor(Math.random() * (12 - 1) + 1);
            crystalThree = Math.floor(Math.random() * (12 - 1) + 1);
            crystalFour = Math.floor(Math.random() * (12 - 1) + 1);
            computerGuess = Math.floor(Math.random() * (120 - 19) + 19)
            computerGuess = Math.floor(Math.random() * (120 - 19) + 19);
            $("#computerGuess").text(computerGuess);
        } else if (totalScore > computerGuess) {
            alert("You lost! Your Total Score will reset to zero, but your crystal numbers and matching number will remain the same.")
            loseCount++
            $("#losses").text("Losses: " + loseCount)
            totalScore = 0    
        }
        else { return false
    
        }
    })

    $("#crystalThree").on("click", function() {
        $("#totalScore").text(totalScore + crystalThree);
        totalScore = totalScore + crystalThree;
        if (computerGuess === totalScore) {
            alert("You Won! Your Total Score will reset to zero and all the crystals will have a new random number assigned to them on the next click.  Also, your matching number will change!")
            winCount++
            totalScore = 0
            crystalOne = Math.floor(Math.random() * (12 - 1) + 1);
            crystalTwo = Math.floor(Math.random() * (12 - 1) + 1);
            crystalThree = Math.floor(Math.random() * (12 - 1) + 1);
            crystalFour = Math.floor(Math.random() * (12 - 1) + 1);
            computerGuess = Math.floor(Math.random() * (120 - 19) + 19)
            $("#wins").text("Wins: " + winCount)
            computerGuess = Math.floor(Math.random() * (120 - 19) + 19);
            $("#computerGuess").text(computerGuess);
            
        } else if (totalScore > computerGuess) {
            alert("You lost! Your Total Score will reset to zero, but your crystal numbers and matching number will remain the same.")
            loseCount++
            $("#losses").text("Losses: " + loseCount)
            totalScore = 0    
        }
        else { return false
    
        }
    })
    
    $("#crystalFour").on("click", function() {
        $("#totalScore").text(totalScore + crystalFour);
        totalScore = totalScore + crystalFour;
        if (computerGuess === totalScore) {
            alert("You Won! Your Total Score will reset to zero and all the crystals will have a new random number assigned to them on the next click.  Also, your matching number will change!")
            winCount++
            totalScore = 0
            crystalOne = Math.floor(Math.random() * (12 - 1) + 1);
            crystalTwo = Math.floor(Math.random() * (12 - 1) + 1);
            crystalThree = Math.floor(Math.random() * (12 - 1) + 1);
            crystalFour = Math.floor(Math.random() * (12 - 1) + 1);
            computerGuess = Math.floor(Math.random() * (120 - 19) + 19)
            $("#wins").text("Wins: " + winCount) 
            computerGuess = Math.floor(Math.random() * (120 - 19) + 19);
            $("#computerGuess").text(computerGuess);
        } else if (totalScore > computerGuess) {
            alert("You lost! Your Total Score will reset to zero, but your crystal numbers and matching number will remain the same.")
            loseCount++
            $("#losses").text("Losses: " + loseCount)
            totalScore = 0    
        }
        else { return false
    
        }
    })






});
