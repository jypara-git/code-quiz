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
var highScores = [];
const startingMinutes = 2;
let time = startingMinutes * 60;
let finalTime = 0;

const countDownEl = document.getElementById("countdown");

var saveScores = function() {
    localStorage.setItem("highScores", JSON.stringify(highScores));
}
var loadScores = function() {
    highScores = localStorage.getItem("highScores");
    if (highScores === null) {
        highScores = [];
        return false;
    }
    highScores = JSON.parse(highScores);
}

var createHighScoresContainer = function() {
    var lastPageEl = document.createElement("div");
    lastPageEl.className = "outside-box";
    lastPageEl.id = "last-page";

    var textEl = document.createElement("h3");
    textEl.innerText = " High scores";
    lastPageEl.appendChild(textEl);
    
    var listItemEl = document.createElement("ul");
    listItemEl.className = "input-box";
    listItemEl.id = "list";
    lastPageEl.appendChild(listItemEl);

    var listEl = document.createElement("li");
    listEl.className = "input-box"
    

     
var handleSubmitScore = function(event) {
    var score = finalTime;
    var initials = document.getElementById("input-initials").value;
    highScores.push({score: score, initials: initials});
    saveScores();
    var allDoneEl = document.querySelector("#done-box");
    allDoneEl.remove();
    createHighScoresContainer();
}
var createEndPage = function() {
    var allDoneEl = document.createElement("div");
    allDoneEl.className = "outside-box";
    allDoneEl.id = "done-box";

    var headTextEl = document.createElement("h3");
    headTextEl.innerText = "All done!";
    allDoneEl.appendChild(headTextEl);

    var finalScoreEl = document.createElement("p");
    finalScoreEl.innerText = "Your final score is " + finalTime;
    allDoneEl.appendChild(finalScoreEl);

    var initialFormEl = document.createElement("div");
    initialFormEl.className = "form-group";
    var formTextEl = document.createElement("p");
    formTextEl.innerText = "Enter initials:";
    initialFormEl.appendChild(formTextEl);
    var formBoxEl = document.createElement("input");
    formBoxEl.className = "input-box";
    formBoxEl.type = "text";
    formBoxEl.placeholder = "Initials here";
    formBoxEl.id = "input-initials";
    initialFormEl.appendChild(formBoxEl);

    allDoneEl.appendChild(initialFormEl);

    var submitButtonEl = document.createElement("button");
    submitButtonEl.textContent = "Submit";
    submitButtonEl.className = "btn";
    submitButtonEl.id = "save-initial";
    submitButtonEl.type = "submit";
    submitButtonEl.addEventListener("click", handleSubmitScore);
    allDoneEl.appendChild(submitButtonEl);
    document.body.appendChild(allDoneEl);
}


function updateCountdown() {
    if (currentQuestionIndex >= questions.length) {
        clearInterval(time = 0);
    }
    
    if (time <= 0) {
        var sectionContainer = document.querySelector("#container");
        if (sectionContainer) {
            sectionContainer.remove();
            createEndPage();
        }
       
        clearInterval(time = 0);
    }
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 2 ? '0' + seconds : seconds;
    countDownEl.innerHTML = "Time-" + minutes + ":" +seconds;
    time--;
}
var buttonElStart = document.querySelector("#start-button");


var startQuiz = function(event) {
    loadScores();
    createQuestionContainer();
    setInterval(updateCountdown, 1000);
    var divStart = document.querySelector("#first-page");
    var sectionQuestions = document.querySelector("#container");
};
buttonElStart.addEventListener("click", startQuiz);

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
        time = time - 15;
    }
};

var updateQuestionEL = function() {
    // all right answers
    if (currentQuestionIndex >= questions.length) {
        finalTime = time;
        var sectionContainer = document.querySelector("#container");
        sectionContainer.remove();
        createEndPage();
        return;
    }
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

};

var createQuestionContainer = function() {
    var startingPage = document.querySelector("#first-page");
    startingPage.remove();

    var sectionContainer = document.createElement("div");
    sectionContainer.className = "outside-box";
    sectionContainer.id = "container";

    var nameText = document.createElement("h3");
    nameText.className = "name-text";
    nameText.id = "name-text";
    sectionContainer.appendChild(nameText);

    var buttonWrap = document.createElement("div");
    buttonWrap.className = "btn-wrap";
    
    var buttonEl1 = document.createElement("button");
    buttonEl1.className = "btn";
    buttonEl1.id = "btn1";
    buttonWrap.appendChild(buttonEl1);

    var buttonEl2 = document.createElement("button");
    buttonEl2.className = "btn";
    buttonEl2.id = "btn2";
    buttonWrap.appendChild(buttonEl2);

    var buttonEl3 = document.createElement("button");
    buttonEl3.className = "btn";
    buttonEl3.id = "btn3";
    buttonWrap.appendChild(buttonEl3);

    var buttonEl4 = document.createElement("button");
    buttonEl4.className = "btn";
    buttonEl4.id = "btn4";
    buttonWrap.appendChild(buttonEl4);

    sectionContainer.appendChild(buttonWrap);
    document.body.appendChild(sectionContainer);
    updateQuestionEL();
};

