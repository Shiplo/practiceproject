const data = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple';
/*const quizData = [
    {
        question: "What is the capital of Bangladesh?",
        answer1: "Chittagong",
        answer2: "Sylhet",
        answer3: "Dhaka",
        answer4: "Khulna",
        correct_answer: "answer3",
    },{
        question: "Which one is the best programming language?",
        answer1: "Javascript",
        answer2: "PHP",
        answer3: "Java",
        answer4: "C#",
        correct_answer: "answer1",
    },{
        question: "What is the meaning on HTML?",
        answer1: "Human Text Mold Lead",
        answer2: "Hyper-text Markup Language",
        answer3: "Hybrid Markup Language",
        answer4: "Language of browser",
        correct_answer: "answer2",
    }
];*/

// Variables
let currentQuiz = 0, quizScore = 0, answer = '';
let questions = [], quizData = [];
const loading = document.getElementById('loading');

// Fetch Data
fetch(data).then(res => {
    return res.json();
}).then(choice => {
    //console.log(choice.results);
    questions = choice.results;
    fetchData();
    loading.classList.remove('show');
}).catch(error => {
    console.log(error);
});

function fetchData() {
   quizData = [...questions];
   loadQuiz();
}


// Variables
const quizTitle = document.getElementById('quiz-title');
const submitbtn = document.getElementById('submit');
const radioInputs = document.getElementsByClassName('quiz-input');
const currentQuestion = document.getElementById('current');
const scoreWrap = document.getElementById('score');
const quizError = document.getElementById('quiz-errors');
const resultScore = document.getElementById('result-score');
const totaltScore = document.getElementById('total-score');
const resultBtn = document.querySelector('.result-btn');

// View Function
function loadQuiz() {
    //console.log(quizData);
    const quizNew = quizData[currentQuiz];
    if(currentQuiz < quizData.length) {
        // Question Title
        quizTitle.innerHTML = quizNew.question;
        // Question Choices
        const randNum = Math.floor(Math.random()*4) + 1;
        var formatedChoice = quizNew.incorrect_answers;
        formatedChoice.splice(randNum, 0, quizNew.correct_answer);
        answer = quizNew.correct_answer;
        for(var i = 0; i < formatedChoice.length; i++) {
            //console.log(formatedChoice[i]);
            document.getElementById('label'+(i+1)).innerHTML = formatedChoice[i];
            document.getElementById('answer'+(i+1)).value = formatedChoice[i];
        }
    } else {
        totaltScore.innerHTML = 'You have finished the Quiz. Congrates! Your score is '+ localStorage.getItem('mostRecentScore');
        resultScore.classList.add('show');
        resultBtn.classList.add('show');
        //location.reload();
    }
}


// Next Quiz
submitbtn.addEventListener('click', function() {
    let selected = 0;
    for(let i = 0; i < radioInputs.length; i++) {
        if(radioInputs[i].checked) {
            selected = 1;
            //console.log(radioInputs[i].value);
            //console.log(quizNew.correct_answer);
            if (radioInputs[i].value == answer) {
                quizScore = quizScore+10;
                localStorage.setItem('mostRecentScore', quizScore);
            }
            radioInputs[i].checked = false;
        }
    }
    
    // Check if select on choice then load next question
    if(selected === 1) {
        currentQuiz++;
        loadQuiz();
        // Update Score and question number
        scoreWrap.innerText = quizScore;
        if(currentQuiz < 10) {
            currentQuestion.innerText = currentQuiz+1;
        }
    } else {
        //alert('Select one answer first.');
        quizError.classList.add('show');
    }
});

// On Question Select
const choiceQuestion = document.querySelectorAll('.quiz-input');
document.body.addEventListener('change', function(e) {
    if(e.target.checked === true) {
        quizError.classList.remove('show');
    }
});

// On Save
const saveForm = document.querySelector('.result-save');
const username = document.getElementById('username');
const saveBtn = document.getElementById('save');
var highScore = [];
highScore = JSON.parse(localStorage.getItem("highScores")) || [];
//console.log(highScore);

// Username input field shouldn't be empty
username.addEventListener('keyup', (e) => {
    saveBtn.disabled = !e.target.value;
})

// Remove Link 
function RemoveLastDirectoryPartOf(the_url){
    var the_arr = the_url.split('/');
    the_arr.pop();
    return( the_arr.join('/') );
}

// Save Hight Score Local Data On click
saveBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const scoreData = {
        score: quizScore,
        name: username.value,
    }
    highScore.push(scoreData);

    highScore.sort((a, b) => b.score - a.score);

    highScore.splice(10);

    localStorage.setItem('highScores', JSON.stringify(highScore));

    var redirectPage = RemoveLastDirectoryPartOf(window.location.href);
    window.location.href = redirectPage+'/result.html';
});