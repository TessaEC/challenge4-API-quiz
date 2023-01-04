// variables
// var timer;
var timeStart = questions.length * 1;
var questIndex = 0;
var timeInterval;
// var timed;
// HTML DOM elements
var startPage = document.getElementById('start-page');
var startBtn = document.getElementById('start');
var questionsPage = document.getElementById('questions');
var timerId = document.getElementById('time');
var submitBtn = document.getElementById('submit');
var scoresId = document.getElementById('scores');
var finishId = document.getElementById('finish');
var optionsId = document.getElementById('optionArr');
var optionBtn = document.getElementById('options')

// Start button event listener
startBtn.addEventListener('click', function() {
    startPage.classList.add("hidden");
    questionsPage.classList.remove("hidden");

// Start timer
    timeInterval = setInterval(clockTick, 1000);

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
        // clearInterval is used to stop the timer
        clearInterval(timeInterval);
        // show final-score page when timer hits 0 or questions end
      }
    if (timeStart < 1) {
        questionsPage.classList.add("hidden")
        finishId.classList.remove("hidden")
      }   
}

// function for displaying questions
function getQuestion() {
    var currentQuest = questions[questIndex]
    var questionDisplay = document.getElementById('question-title')
    questionDisplay.textContent=currentQuest.title

    // document.getElementById("options-0")
    // document.getElementById("options-0").textContent = words
    // loop through question options and update each span
    // loop questions + options button
// loop currentQuestion
// function loopAtt() {
//     for (var i = 0; i < questIndex.questions.length; i++) {
//         var quiz = questIndex.questions[i];
//         var optBtn = document.createElement('optionArr')
//         optBtn.setAttribute('class', 'options');
//         optBtn.setAttribute('value', options);
    
//         quiz.textContent = i + 1 + questions;
//     }
}

// Event listener and function for option clicks
// function getOptions() {
//     var optionDisplay = document.getElementById('optionArr')
//     optionDisplay.textContent=options[0].options
// view your options inside of the buttons
// document.getElementById("options-0")
// document.getElementById("options-0").textContent = 'words'
// }
    


// Event Listener:
// select correct answer-display correct! -move to next question
// select wrong answer-display wrong! -subtract 5 seconds from time - move to next question

// function for ending quiz
    //time runs out or finished with questions

/* finished:



finish page
    display score
    paragraph stating Time ran out OR Quiz Finished
    'Submit Name' with text box
    Submit button

submitting high scores on Leader board
    printScores(); ?
    sort highest score to lowest

storing scores once submitted to leader board

***HighScores button on top left, can click anytime to view leader board


NOTES

JS -
startBtn.addEvenListener("onClick", startQuiz)]

function to remove start screen once next screen starts
-unhide -remove attribute
-hide
QUIZ:
start quiz: fip through the questions
-var currentQuestionIndex start at 0 index
Grab title element from html then set to current question
keep track of what the user chose
For loop for options]
Add listeners to each choice, will display if correct or wrong once clicked, if correct
states correct and moves to next button
event.target grabs the answer that was clicked
if the click element was not a choice element do nothing
return-stops running
if the button that was clicked value != questions[currentquestionindex].answer) {
    if its not then penalize time
    time -= 15

    feedback in html hide Wrong!
    feedback in html hide Correct!
    value = time
}
*/