const data = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple';
const quizData = [
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
        answer2: "Myper-text Markup Language",
        answer3: "Hybrid Markup Language",
        answer4: "Language of browser",
        correct_answer: "answer2",
    }
];

const currentQuiz = 0, quizScore = 0;
const quizList = [...quizData];
const quizTitle = document.getElementById('quiz-title');
const choiceLabel1 = document.getElementById('label1');
const choiceLabel2 = document.getElementById('label2');
const choiceLabel3 = document.getElementById('label3');
const choiceLabel4 = document.getElementById('label4');

loadQuiz();

/*/ Fetch Data
fetch(data).then(res => {
    return res.json();
}).then(choice => {
    //console.log(choice.results);
    choice.results.map(result => {
        //console.log(result);
        quizData = result;
        const quizTitle = document.getElementById('quiz-title');
        const title = document.createElement('p');
        const wrap = document.createElement('div');
        const label = document.createElement('label');
        const text = document.createTextNode(result.question);
        const correctAns = document.createTextNode(result.correct_answer);
        title.appendChild(text);
        label.appendChild(correctAns);
        wrap.appendChild(title);
        wrap.appendChild(label);
        //quizTitle.appendChild(text);

    });
}).catch(error => {
    console.log(error);
});*/


function loadQuiz() {
    const quizNew = quizList[currentQuiz];
    console.log(quizNew.correct_answer);

    quizTitle.innerText = quizNew.question;
    choiceLabel1.innerText = quizNew.answer1;
    choiceLabel2.innerText = quizNew.answer2;
    choiceLabel3.innerText = quizNew.answer3;
    choiceLabel4.innerText = quizNew.answer4;
}