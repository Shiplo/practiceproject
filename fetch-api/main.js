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
        const text = document.createTextNode(result.question);
        title.appendChild(text);
        container.appendChild(title);
    });
});