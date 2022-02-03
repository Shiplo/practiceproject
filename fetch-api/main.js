const data = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple';

// Fetch Data
fetch(data).then(res => {
    return res;
}).then(choice => {
    console.log(choice);
});