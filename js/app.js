const quotes = [
    {
        // category: "Motivation",
        beginning: [
            "Push yourself ",
            "Dream bigger ",
            "Keep going ",
            "Work harder ",
            "Believe in yourself "
        ],
        middle: [
            "because the harder you work for something, ",
            "because the more you believe in your abilities, ",
            "because the more you know who you are and where you want to be, ",
            "because the harder you push yourself, ",
            "because the more you feed your mind with positive thoughts, "
        ],
        end: [
            "the greater you'll feel.",
            "the greater your results will be.",
            "the better your life will be.",
            "the higher you'll reach.",
            "the more you'll grow."
        ]
    },
    {

        // category: "Friendship",
        beginning: [
            "A loyal friend ",
            "A best friend ",
            "A true friend ",
            "A good friend ",
            "A friend for life  "
        ],
        middle: [
            "is hard to find, harder to leave ",
            "is worth more than a thousand fake ones ",
            "is like a star, you don't always see them but you know they are there ",
            "is someone who you know all about and still love  ",
            "is one who walks in when the rest of the world walks out "
        ],
        end: [
            "and impossible to forget .",
            "and the greatest treasure in life.",
            "and the sunshine of life.",
            "and matches your kind of crazy.",
            "and the greatest posession of all."
        ]
    }
];


const generateButton = document.querySelector(".btn-generate");

// define length of array
let arrayLength = quotes[0].beginning.length;


/* Get quote category selected by user  */

let category = document.getElementById("category");

category.addEventListener("change", function (e) {
    //store value 
    category = Number(e.target.value);
    console.log("Quote category: " + e.target.value);
});


/* Get amount of quotes selected by user */

let amount = document.getElementById("amount");

amount.addEventListener("change", function (e) {
    //store value 
    amount = Number(e.target.value)
    console.log("Amount of quotes: " + e.target.value);
});


/* Listen for clicks on generate button */

category = 2;
amount = 1;

generateButton.onclick = function () {

    if (category == 2) {
        document.body.style.backgroundImage = "url('images/random.jpg')";
        clear(["quote-content"]); // clear any present quotes before running the code
        generateRandomQuote();

        // if category = 0 or 1  call generateCustomQuote 

    } else if (category == 1) {
        document.body.style.backgroundImage = "url('images/friendship.jpg')";
        clear(["quote-content"]); // clear any present quotes before running the code
        generateCustomQuote();

    } else {
        document.body.style.backgroundImage = "url('images/motivation.jpg')";
        clear(["quote-content"]); // clear any present quotes before running the code
        generateCustomQuote();
    }
};


/* Generate a random quote with random category and  user selected amount  */

function generateRandomQuote() {

    for (let i = 0; i < amount; i++) {

        // for each property inside the randomly selected object (category) add random index 

        let randomQuoteIndex = Math.floor(Math.random() * quotes.length);
        let quote = "";

        for (let property in quotes[randomQuoteIndex]) {
            let randomIndex = Math.floor(Math.random() * arrayLength);
            quote = quote + quotes[randomQuoteIndex][property][randomIndex];
        }

        //display quote 
        let randomQuote = document.createElement("p"); // create <p> element
        randomQuote.textContent = '"' + quote + '"'; // define text content
        document.getElementById("quote-content").appendChild(randomQuote); // insert new element
    }
}


/* Generate a custom quote based on category and amount */

function generateCustomQuote() {

    for (let i = 0; i < amount; i++) {

        let quote = "";

        // for each property inside the user selected object (category) add random index
        for (let property in quotes[category]) {
            quote = quote + quotes[category][property][Math.floor(Math.random() * arrayLength)];
        }

        let customQuote = document.createElement("p"); // Create a <p> element
        customQuote.textContent = '"' + quote + '"'; // Define text content
        document.getElementById("quote-content").appendChild(customQuote); // Insert new element 

    };
};


/* Clear all existing quotes */

function clear(clearIDs) {
    // for each id entered
    for (let i = 0; i < clearIDs.length; i++) {

        //replace content with an empty string
        document.getElementById(clearIDs[i]).innerHTML = "";
    }
};


/* Listen for clicks on reset button and clear quotes  */

let resetButton = document.querySelector(".btn-reset");

resetButton.addEventListener("click", function (e) {
    clear(["quote-content"]);
    let quotationMarks = document.createElement("img");
    document.getElementById("quote-content").appendChild(quotationMarks);
    quotationMarks.src = "images/quotation-marks.png";
    quotationMarks.classList.add("quotation-marks");
    document.getElementById("quote-form").reset();
    category = 2;
    amount = 1;
});
