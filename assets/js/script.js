var questions = [
    {
       id: 0,
       name: "Inside which HTML element do we put the JavaScript? ",
       answer1: "<script>",
       answer2: "<javascript>",
       answer3: "<scripting>",
       answer4: "<js>",
       correct: "<script>"
    },
    {
        id: 1,
        name: "Which type of programming language is JavaScript?",
        answer1: "Programming",
        answer2: "Scripting",
        answer3: "Markup",
        answer4: "None of the above",
        correct: "Scripting" 
    },
    {
        id: 2,
        name:  "What are variables used for in JavaScript Programs?",
        answer1: "Storing numbers, dates, or other values",
        answer2: "Varying randomly",
        answer3: " Causing high-school algebra flashbacks",
        answer4: "None of the above",
        correct: "Storing numbers, dates, or other values" 
    },
    {
        id: 3,
        name: "JavaScript is designed for following purpose-",
        answer1: "to style HTML pages",
        answer2: "to execute Queries related to databases on a server",
        answer3: "to add interactivity to html pages",
        answer4: "All of the above",
        correct: "All of the above" 
    },
    {
        id: 4,
        name: "What does javascript use instead of == and !=?",
        answer1: "It uses bitwise checking",
        answer2: "It uses === and !== instead",
        answer3: "It uses equals() and notequals() instead",
        answer4: "It uses equalto()",
        correct: "It uses === and !== instead" 
    }
];
var questionsFormEl = document.querySelector("#container");
var currentQuestionIndex = 0;
var handleSelectedButton = function(event) {
    var targetEl = event.target;
    console.log(targetEl.textContent);
    if ( targetEl.textContent === questions[currentQuestionIndex].correct) {
        currentQuestionIndex++;
        updateQuestionEL();
    }
    else {
        console.log(false);
    }
}
var updateQuestionEL = function() {
    var questionDataObj = questions[currentQuestionIndex];
    var nameText = document.querySelector("#name-text");
    nameText.innerText = questionDataObj.name;
    var buttonEl1 = document.querySelector("#btn1");
    buttonEl1.textContent = questionDataObj.answer1;
    var buttonEl2 = document.querySelector("#btn2");
    buttonEl2.textContent = questionDataObj.answer2;
    var buttonEl3 = document.querySelector("#btn3");
    buttonEl3.textContent = questionDataObj.answer3;
    var buttonEl4 = document.querySelector("#btn4");
    buttonEl4.textContent = questionDataObj.answer4;

    buttonEl1.addEventListener("click", handleSelectedButton);

    buttonEl2.addEventListener("click", handleSelectedButton);

    buttonEl3.addEventListener("click", handleSelectedButton);

    buttonEl4.addEventListener("click", handleSelectedButton);
}



updateQuestionEL();