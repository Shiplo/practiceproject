const data = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple';

// Fetch Data
fetch(data).then(res => {
    return res.json();
}).then(choice => {
    //console.log(choice.results);
    choice.results.map(result => {
        console.log(result);
        const container = document.getElementById('fetch-data');
        const title = document.createElement('p');
        const wrap = document.createElement('div');
        const label = document.createElement('label');
        const text = document.createTextNode(result.question);
        const correctAns = document.createTextNode(result.correct_answer);
        title.appendChild(text);
        label.appendChild(correctAns);
        wrap.appendChild(title);
        wrap.appendChild(label);
        container.appendChild(wrap);
    });
});