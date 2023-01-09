// variables
// var timer;
var timeStart = questions.length * 10;
var questIndex = 0;
var timeInterval;
var scoresArray = [];
// var timed;
// HTML DOM elements
var startPage = document.getElementById('start-page');
var startBtn = document.getElementById('start');
var questionsPage = document.getElementById('questions');
var timerId = document.getElementById('time');

var optionsId = document.getElementById('option-array');
var optionBtn = document.getElementById('option');
var responseId = document.getElementById('response');
var flashId = document.getElementById('flash-response');
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

        var optCreate = document.createElement('button');
        optCreate.setAttribute('class', 'option')
        optCreate.setAttribute('value', optDisplay)
        
        optCreate.textContent = optDisplay;

        optionsId.appendChild(optCreate);

        optCreate.addEventListener('click', answerQuest);
    }    
}

function answerQuest(event) {
    var answerBtn = event.target;

    if (!answerBtn.matches('.option')) {
        return;
    }

    if(answerBtn.value !== questions[questIndex].answer) {
        timeStart -= 10;
        if (timeStart < 0) {
            timeStart = 0;
        }

        timerId.textContent = timeStart;

        responseId.textContent = 'Incorrect!';

        questIndex++;

        getQuestion();

        responseId.setAttribute('class', 'response');
        setTimeout(function () {
            responseId.setAttribute('class', 'response hidden');
        }, 1500);
    
    } else {
        responseId.textContent = 'Correct!';

        questIndex++;

        getQuestion();

        responseId.setAttribute('class', 'response');
        setTimeout(function () {
            responseId.setAttribute('class', 'response hidden');
        }, 2000);
    }
}

function finishQuiz() {

clearInterval(timeInterval);

questionsPage.classList.add("hidden");
finishId.classList.remove("hidden");

finalScore.textContent = timeStart;
}

function saveScores() {
    // grab the typed name from input box
    var firstName = nameId.value.trim();

    if (firstName !== '') {
      // using JSON to turn array into string
        JSON.parse(localStorage.getItem('finalScore')) || [];

      var inputScore = {
        score: timerId,
        firstName: firstName
      };

    // save score to local storage
    finalScore.push(inputScore);
    localStorage.setItem('final-score', JSON.stringify(finalScore));

    // takes you to the next page
    location.href = "scores.html"
    }

function enterScores(event) {
    if (event.key === 'submitBtn') {
        saveScores();
        }
    }

submitBtn.onclick = saveScores();

nameId.onkeyup = enterScores;

nameId.onkeyup = enterScores;
}