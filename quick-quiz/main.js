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
let currentQuiz = 0, quizScore = 0;
var quizData;

// Fetch Data
fetch(data).then(res => {
    return res.json();
}).then(choice => {
    //console.log(choice.results);
    quizData = choice.results;
    loadQuiz(quizData);
}).catch(error => {
    console.log(error);
});


// Variables
const quizTitle = document.getElementById('quiz-title');
const choiceLabel1 = document.getElementById('label1');
const choiceLabel2 = document.getElementById('label2');
const choiceLabel3 = document.getElementById('label3');
const choiceLabel4 = document.getElementById('label4');
const submitbtn = document.getElementById('submit');
const radioInputs = document.getElementsByClassName('quiz-input');
let quizNew = {};


// View Function
function loadQuiz(quizList) {
    quizNew = quizList[currentQuiz];
    //console.log(quizList);
    if(currentQuiz < quizList.length) {
        const randNum = Math.floor(Math.random()*4);
        console.log(randNum);
        console.log(quizNew.correct_answer);
    
        quizTitle.innerText = quizNew.question;
        choiceLabel1.innerText = quizNew.answer1;
        choiceLabel2.innerText = quizNew.answer2;
        choiceLabel3.innerText = quizNew.answer3;
        choiceLabel4.innerText = quizNew.answer4;
    } else {
        alert('You have finished the Quiz. Your score is '+ quizScore);
        //location.reload();
    }
}

// Next Quiz
submitbtn.addEventListener('click', function() {
    let selected = 0;
    for(let i = 0; i < radioInputs.length; i++) {
        if(radioInputs[i].checked) {
            selected = 1;
            console.log(radioInputs[i].value);
            console.log(quizNew.correct_answer);
            if (radioInputs[i].value == quizNew.correct_answer) {
                quizScore = quizScore+10;
            }
            radioInputs[i].checked = false;
        }
    }
    
    // Check if select on choice then load next question
    if(selected === 1) {
        currentQuiz++;
        loadQuiz();
    } else {
        alert('Select one answer first.')
    }
});