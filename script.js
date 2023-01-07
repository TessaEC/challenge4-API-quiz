// variables
// var timer;
var timeStart = questions.length * 1;
var questIndex = 0;
var timeInterval;
var optIndex = 0;
// var timed;
// HTML DOM elements
var startPage = document.getElementById('start-page');
var startBtn = document.getElementById('start');
var questionsPage = document.getElementById('questions');
var timerId = document.getElementById('time');
var submitBtn = document.getElementById('submit');
var scoresId = document.getElementById('scores');
var finishId = document.getElementById('finish');
var optionsId = document.getElementById('option-array');
var optionBtn = document.getElementById('option');
var responseId = document.getElementById('response');
var flashId = document.getElementById('flash-response');

// Start button event listener
startBtn.addEventListener('click', function() {
    startPage.classList.add("hidden");
    questionsPage.classList.remove("hidden");

// Start timer
    timeInterval = setInterval(clockTick, 1000);

    score = 0

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
    // show final-score page when timer hits 0
      }
    //   when timer runs out, move to finish page
    if (timeStart < 1) {
        questionsPage.classList.add("hidden")
        finishId.classList.remove("hidden")
      }   
}

// function for displaying questions
function getQuestion() {
    var currentQuest = questions[questIndex]
    var questionDisplay = document.getElementById('question-title')
    // displays question as text
    questionDisplay.textContent = currentQuest.title

    // for loop to go through options
    for (var i = 0; i < currentQuest.options.length; i++) {
        var optDisplay = currentQuest.options[i];

        var optCreate = document.createElement('button');
        optCreate.setAttribute('class', 'option')
        optCreate.setAttribute('value', optDisplay)
        
        optCreate.textContent = optDisplay;

        optionsId.appendChild(optCreate);
    } 

// function answerQuest(event) {




//     var answerBtn = event.target;

//     optionBtn.addEventListener('click', answerBtn);

//     if (!optionBtn.matches('option')) {
//         return;
//     }

//     if(optionBtn.value !== questions[questIndex].answer) {
//         time -= 10;
//         if (time < 0) {
//             time = 0;
//         }

//         timerId.textContent = time;

//         responseId.textContent = 'Incorrect!';
//     } else {
//         responseId.textContent = 'Correct!';
//     }

//     responseId.setAttribute('class', 'response');
//     responseTime(function() {
//         responseId.setAttribute('class', 'flash-response');
//     }, 2000);

//     currentQuest++;

//     if (time <= 0 || currentQuest === questions.length) {
//         finishQuiz();
//     } else {
//         getQuestion();
//     }
// }
}

// OPTION FOUND ONLINE:

//     var answerQuest = questions.answer;
//     if (event.target.questions.optionBtn === answerQuest) {
//         event.target.innerHTML = 'Correct!'
//         answerQuest.responseId = 'flash-response'

//     } else {
//         event.target.optionBtn !== answerQuest;
//         event.target.innerHTML = 'Incorrect!';
//         answerQuest.responseId = 'flash-response'
//     }

// Event Listener:
// select correct answer-display correct! -move to next question
// select wrong answer-display wrong! -subtract 5 seconds from time - move to next question
// if ('answer' != 'option') {
//     timerId--
// }

// finished:
// var correctAns = "Correct!"
// var scoreMax = 100
// var scoreTotal = correctAns * 20
// var scoreText = document.querySelector('#final-score')
// *update scores for each question*

// finish page
//     display score
//     paragraph stating Time ran out OR Quiz Finished
//     'Submit Name' with text box
//     Submit button
// Highscores button - either link to scores.html or put scores.html
// on index.html to hide and unhide when clicked.

// submitting high scores on Leader board
//     printScores(); ?
//     sort highest score to lowest

// storing scores once submitted to leader board

// ***HighScores button on top left, can click anytime to view leader board

