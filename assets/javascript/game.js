var question1 = "What shortstop holds the major league records for games played, assists and double plays?";
var question2 = "What baseball announcer said Pope Paul VI's death 'puts a damper on even a Yankees win'?";
var question3 = "Who was the first player to win the Triple Crown in major league baseball?";
var question4 = "What famous major league player went by the nickname 'The Little Professor'?";
var question5 = "Which two cities have the oldest stadiums in major league baseball?";
var question6 = "What major league baseball team did the Walt Disney Company assume operational control of in 1996?";
var question7 = "What's the most home runs hit by one player in a single major league game?";
var question8 = "When was the designated hitter rule created?";
var question9 = "What is the size of baseball ground approx.?";
var question10 = "In how many seasons did Lou Gehrig play every inning of every game?";
var question11 = "What governor was on hand at home plate to greet Hank Aaron when he broke Babe Ruth's home run record?";
var fixAnswer1 = "Ozzie ";
var fixAnswer2 = " Rizzuto";
var fixAnswer3 = "Tommy ";
var fixAnswer4 = " (Dom) DiMaggio";
var fixAnswer5 = " and Chicago";
var fixAnswer6 = "The California ";
var fixAnswer7 = "";
var fixAnswer8 = "";
var fixAnswer9 = " Acres";
var fixAnswer10 = "";
var fixAnswer11 = " Carter";
var answer1 = "Smith";
var answer2 = "Phil";
var answer3 = "Bond";
var answer4 = "Dominic";
var answer5 = "Boston";
var answer6 = "Angels";
var answer7 = "4";
var answer8 = "1973";
var answer9 = "2";
var answer10 = "1";
var answer11 = "Jimmy";

var questions = [question1, question2, question3, question4];
var answers = [answer1, answer2, answer3, answer4];
var fixAnswers = [fixAnswer1, fixAnswer2, fixAnswer3, fixAnswer4]
var counter = 0;
var displayAnswer = '';
var currentAnswer = '';
var tempDisplayAnswer = '';
var gussesRemaining = 11;
var runScore = 0;
var guessList = [];
var strikeScore = 0;
var alphanumeric = '0123456789abcdefghijklmnopqrstuvwxyz';
var msg_str = '';

String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

document.getElementById("restart-button").onclick = function() {
    hardReset();
    document.getElementById("play-button").style.display = "inline";
    document.getElementById("restart-button").style.display = "none";
};

document.getElementById("play-button").onclick = function() {
    document.getElementById("restart-button").style.display = "inline";
    document.getElementById("play-button").style.display = "none";
    hardReset();
    document.onkeyup = function(event){
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        if(alphanumeric.indexOf(userGuess) !== -1){
            if(currentAnswer.includes(userGuess)){
                for(var i=0; i<tempDisplayAnswer.length; i++) {
                    if (currentAnswer[i] === userGuess){
                        tempDisplayAnswer = tempDisplayAnswer.replaceAt(i,currentAnswer[i]);
                    }
                }
                console.log(tempDisplayAnswer + " " + answers[counter]);
                if(tempDisplayAnswer == answers[counter].toLowerCase()){
                    msg_str = "Congrats! You scored a run!";
                    alert(msg_str);
                    document.getElementById("msg-content").innerHTML = msg_str;
                    runScore++;
                    document.getElementById("run-count").innerHTML = runScore.toString();
                    counter++;
                    strikeScore = 0;
                    document.getElementById("strike-count").innerHTML = strikeScore.toString()+"/3";
                    if(counter === answers.length){
                        msg_str = "Congrats! You completed the game! You are like Babe Ruth of beaseball trivia! Thanks for playing!";
                        document.getElementById("msg-content").innerHTML = msg_str;
                        alert(msg_str);
                        hardReset();
                    }
                    softReset();
                }
                generateDisplayAnswer(tempDisplayAnswer);
                displayAnswer += fixAnswers[counter];
                document.getElementById("ans-content").innerHTML = displayAnswer;
            }
            else {
                var theDiv = document.getElementById("guess-list");
                theDiv.innerHTML += userGuess;
                gussesRemaining--;
                if(parseInt(gussesRemaining) === 0){
                    strikeScore++;
                    if(strikeScore === 3){
                        strikeScore = 0;
                        msg_str = "3 Strikes! You are out! Start again!";
                        alert("3 Strikes! You are out! Game will start again!");
                    }
                    else {
                        msg_str = "It's a strike!!";
                    }
                    document.getElementById("msg-content").innerHTML = msg_str;
                    document.getElementById("strike-count").innerHTML = strikeScore.toString()+"/3";
                    document.getElementById("message-row").style.display = "block";
                    softReset();
                }
                document.getElementById("guess-count").innerHTML = gussesRemaining.toString();        
            }
        }
    }
};

function hardReset() {
    questions = [question1,question2,question3,question4];
    answers = [answer1,answer2,answer3,answer4];
    counter = 0;
    displayAnswer = '';
    currentAnswer = '';
    tempDisplayAnswer = '';
    gussesRemaining = 11;
    runScore = 0;
    guessList = [];
    document.getElementById("que-content").innerHTML = questions[0];
    currentAnswer = answers[0].toLowerCase();
    generateTempDisplayAnswer(currentAnswer);
    generateDisplayAnswer(tempDisplayAnswer);
    displayAnswer += fixAnswers[0]; 
    document.getElementById("ans-content").innerHTML = displayAnswer;
    document.getElementById("guess-count").innerHTML = gussesRemaining.toString();
    document.getElementById("run-count").innerHTML = runScore.toString();
    document.getElementById("guess-list").innerHTML = guessList;
}

function softReset(){
    displayAnswer = '';
    currentAnswer = '';
    tempDisplayAnswer = '';
    gussesRemaining = 11;
    guessList = [];
    document.getElementById("que-content").innerHTML = questions[counter];
    currentAnswer = answers[counter].toLowerCase();
    generateTempDisplayAnswer(currentAnswer);
    generateDisplayAnswer(tempDisplayAnswer);
    displayAnswer += fixAnswers[counter]; 
    document.getElementById("ans-content").innerHTML = displayAnswer;
    document.getElementById("guess-count").innerHTML = gussesRemaining.toString();
    document.getElementById("guess-list").innerHTML = guessList;
}

function generateTempDisplayAnswer(currentAnswer){
    for(var i=0;i<currentAnswer.length;i++){
        tempDisplayAnswer += '_';
    }
}

function generateDisplayAnswer(tempDisplayAnswer){
    displayAnswer = '';
    for(var i=0;i<tempDisplayAnswer.length;i++){
        displayAnswer += tempDisplayAnswer[i] +" ";
    }
}