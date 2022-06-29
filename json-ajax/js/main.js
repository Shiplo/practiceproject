// Example of Object
var myCat = {
    "name": "Moyna",
    "color": "white",
    "gender": "Male"
}

// Show The data from object
console.log(myCat.name);

// Example of Array
var myFavColor = ["White", "Red", "Blue"];

// Show the Data from array
console.log(myFavColor[2]);

// Example of JSON
var cats = [
    {
        "name": "Moyna",
        "color": "white",
        "gender": "Male"
    },
    {
        "name": "Beauty",
        "color": "black and white",
        "gender": "Female"
    }
];

// Show json data
console.log(cats[1].color);

// JSON Data
var countPage = 1;
var btn = document.getElementById('btn');
var dataContainer = document.getElementById('data');

btn.addEventListener('click', function () {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + countPage + '.json');

    // On JSON Load\
    ourRequest.onload = function () {
        //console.log(ourRequest.responseText);
        var ourData = JSON.parse(ourRequest.responseText);
        //document.getElementById('data').innerHTML = ourData[0];
        // Response HTML
        renderHTML(ourData);
    }
    // Send request
    ourRequest.send();
    // Page Incriment
    countPage++;
    if (countPage > 3) {
        btn.classList.add("hide");
    }
});
// Render Data funciton
function renderHTML(data) {
    //document.getElementById('data').innerHTML = data[0].name;
    var htmlString = "";
    for (var i = 0; i < data.length; i++) {
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + "</p>";
    }
    // Add html to container
    dataContainer.insertAdjacentHTML('beforeend', htmlString);
}