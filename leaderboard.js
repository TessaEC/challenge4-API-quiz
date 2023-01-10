
// Prints the scores to the page
function leaderboard() {
    var storedScore = JSON.parse(window.localStorage.getItem('finalScore')) || [];
    // sort scores from highest to lowest score
    storedScore.sort((a, b) => b.score - a.score);
    
    var scoreboard = document.getElementById('scores')
    // display all scores on page to view as li for each
    for (i = 0; i < storedScore.length; i++) {
        var liScore = document.createElement('li');
        liScore.textContent = 'Name: ' + storedScore[i].name + ' ' + 'Score: ' + storedScore[i].score;
        // show on page
        scoreboard.append(liScore);
    }
}
// clear the scores button
function clearScores() {
    window.localStorage.removeItem('scores')
    window.localStorage.reload();
}
// call leader board function
leaderboard();

// when Clear Scores button is clicked run clearScores function
var clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click', clearScores);