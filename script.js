// variables
var timeStart = questions.length * 10;
var questIndex = 0;
var timeInterval;
// HTML DOM elements
var startPage = document.getElementById('start-page');
var startBtn = document.getElementById('start');
var questionsPage = document.getElementById('questions');
var timerId = document.getElementById('time');
var optionsId = document.getElementById('option-array');
var responseId = document.getElementById('response');
var finalScore = document.getElementById('final-score')
var submitBtn = document.getElementById('submit');
var scoreId = document.getElementById('scores');
var finishId = document.getElementById('finish');
var nameId = document.getElementById('name')

// Start button event listener
startBtn.addEventListener('click', function() {
    startPage.classList.add("hidden");
    questionsPage.classList.remove("hidden");
    // Start timer
    timeInterval = setInterval(clockTick, 1000);
    // when start button clicked, grab the first question in array
    getQuestion();
})

// set function for intervals
function clockTick() {
    if (timeStart >= 1) {
        // Set textContent to show timeStart
        timerId.textContent = timeStart;
        // Decrease timeStart by 1
        timeStart--;
    } else {
        // when timeStart gets to 0, set timerId to an empty string
        timerId.textContent = '';
        // clearInterval to stop the timer
        clearInterval(timeInterval);
      }
    //   when timer runs out, move to finish page
    if (timeStart < 1) {
        questionsPage.classList.add("hidden")
        finishId.classList.remove("hidden")
    }
}

// function for displaying questions
function getQuestion() {
    // when the amount of questions is reached it will finishes quiz
    if (questIndex === questions.length) {
        finishQuiz();
        return;
}
    var currentQuest = questions[questIndex]
    var questionDisplay = document.getElementById('question-title')
    // displays question as text
    questionDisplay.textContent = currentQuest.title
    // Clears out options
    optionsId.innerHTML = ""
    // for loop to go through options
    for (var i = 0; i < currentQuest.options.length; i++) {
        var optDisplay = currentQuest.options[i];
        // creates a button for each option
        var optCreate = document.createElement('button');
        optCreate.setAttribute('class', 'option')
        optCreate.setAttribute('value', optDisplay)
        // display the options text
        optCreate.textContent = optDisplay;
        // displays options on screen
        optionsId.appendChild(optCreate);
        // when option is clicked, moves to next question
        optCreate.addEventListener('click', answerQuest);
    }    
}
// when an option is selected, run this function
function answerQuest(event) {
    // when something other than option button is clicked, do nothing
    var answerBtn = event.target;
    if (!answerBtn.matches('.option')) {
        return;
    }
    // when the chosen answer is incorrect
    if(answerBtn.value !== questions[questIndex].answer) {
        // incorrect answer, subtract time
        timeStart -= 10;
        if (timeStart < 0) {
            timeStart = 0;
        }
        // view updated time on screen
        timerId.textContent = timeStart;
        // if incorrect, display "incorrect" as message on screen
        responseId.textContent = 'Incorrect!';
        // move to the next question
        questIndex++;
        getQuestion();
        // displays the response on the page for 1.5 seconds
        responseId.setAttribute('class', 'response');
        setTimeout(function () {
            responseId.setAttribute('class', 'response hidden');
        }, 1500);
    // Otherwise, if the answer is correct, display "correct" on screen
    } else {
        responseId.textContent = 'Correct!';
        // move to the next question
        questIndex++;
        getQuestion();
        // displays the response on the page for 1.5 seconds
        responseId.setAttribute('class', 'response');
        setTimeout(function () {
            responseId.setAttribute('class', 'response hidden');
        }, 1500);
    }
}
// when the quiz is over, run this function
function finishQuiz() {
// stops the timer from continuing to countdown
clearInterval(timeInterval);
// switches hidden class to display the finish page only
questionsPage.classList.add("hidden");
finishId.classList.remove("hidden");
// displays the time left on screen for users final score
finalScore.textContent = timeStart;
}
// how the user will save their score to local storage
function saveScores() {
    // sets a variable for the users name, doesn't allow blank spaces
    var firstName = nameId.value.trim();
    // checks to make sure the score is not empty
    if (firstName !== '') {
        // gets the saved score from local storage, if not, set to empty array
        var storedScore =
            JSON.parse(window.localStorage.getItem('finalScore')) || [];
        // input method for the users score
        var inputScore = {
            score: timeStart,
            name: firstName
      };

    // save score to local storage
    storedScore.push(inputScore);
    window.localStorage.setItem('finalScore', JSON.stringify(storedScore));
     // takes you to the next page
    location.href = "scores.html"
    }
}
submitBtn.addEventListener('click', saveScores);
