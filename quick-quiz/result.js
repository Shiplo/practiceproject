var highScore = [], scores = '';
const resultContainer = document.getElementById('high-score-list');
const scoreList = document.getElementById('score-list');
highScore = JSON.parse(localStorage.getItem("highScores")) || [];

if(highScore.length != 0) {
    for (let i = 0; i < highScore.length; i++) {
        const data = `<div class="sinlge-high-score">
        <div class="score-serial">0${i+1}</div>
        <div class="score-name">${highScore[i].name}</div>
        <div class="score-point">${highScore[i].score}</div>
    </div>`
        scoreList.insertAdjacentHTML('beforeend', data);
    }
} else {
    resultContainer.style.display = 'none';
}