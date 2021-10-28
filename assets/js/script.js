// // Build quiz function here
var quizQuestions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
  },
  {
    title: "What are variables used for in JavaScript Programs?:",
    choices: [
      "Storing numbers, dates, or other values",
      "Varying randomly",
      "Causing high-school algebra flashbacks",
      "None of the above",
    ],
    answer: "Storing numbers, dates, or other values",
  },
  {
    title:
      "Which of the following are capabilities of functions in JavaScript?",
    choices: [
      "Return a value",
      "Accept parameters and Return a value",
      "Accept parameters",
      "None of the above",
    ],
    answer: "Accept parameters",
  },
  {
    title:
      "______ tag is an extension to HTML that can enclose any number of JavaScript statements.",
    choices: ["<SCRIPT>", "<BODY>", "<HEAD>", "<TITLE>"],
    answer: "<SCRIPT>",
  },
  {
    title: "What is the correct JavaScript syntax to write “Hello World”?",
    choices: [
      "System.out.println(“Hello World”)",
      "println (“Hello World”)",
      "document.write(“Hello World”)",
      "response.write(“Hello World”)",
    ],
    answer: "document.write(“Hello World”)",
  },
  {
    title: "Inside which HTML element do we put the JavaScript?",
    choices: ["<js>", "<scripting>", "<script>", "<javascript>"],
    answer: "<script>",
  },
  {
    title: "Which is the correct way to write a JavaScript array?",
    choices: [
      "var txt = new Array(1:”tim”,2:”kim”,3:”jim”)",
      "var txt = new Array:1=(“tim”)2=(“kim”)3=(“jim”)",
      "var txt = new Array(“tim”,”kim”,”jim”)",
      "var txt = new Array=”tim”,”kim”,”jim”",
    ],
    answer: "var txt = new Array(“tim”,”kim”,”jim”)",
  },
  {
    title: "Which of the following best describes JavaScript?",
    choices: [
      " a low-level programming language.",
      "a scripting language precompiled in the browser.",
      "a compiled scripting language.",
      "an object-oriented scripting language.",
    ],
    answer: "an object-oriented scripting language.",
  },
  {
    title: "Using _______ statement is how you test for a specific condition.",
    choices: ["Select", "If", "Switch", "For"],
    answer: "If",
  },
];

// DEFINE VARIABLES
var timeLeft = 120;
var interval;
var questionIndex = 0;
var quizBtn = document.querySelector("#quiz-start");
var tryAgainBtn = document.querySelector("#try-again");
var startScreen = document.querySelector("#start-screen");
var endScreen = document.querySelector("#end-screen");
var questionsDiv = document.querySelector("#multiple-choice");
var questionTitle = document.querySelector("#question-title");
var answerChoices = document.querySelector("#answer-choices");
var timerSpan = document.querySelector("#timer_span");
var results = document.querySelector("#results");
var initials = document.querySelector("#initials");
var submit = document.querySelector("#submit");
var playerScore = timeLeft;

//Time start function
var startTime = function () {
  interval = setInterval(function () {
    document.getElementById("timer_span").innerHTML = --timeLeft;

    if (timeLeft <= 0) {
      document.getElementById("timer_span").innerHTML = "Time is up!";
      // clearInterval(interval);
      displayEndScreen();
    }
  }, 1000);
};

// Function to start quiz - prompt name
var startQuiz = function () {
  var playerName = window.prompt(
    "Welcome to the coding quiz! Please enter your name below."
  );

  var confirmStart = window.confirm(
    "Hi " + playerName + ", are you ready to begin?"
  );
  if (confirmStart) {
    startTime();
  } else {
    window.alert("Ok! Please click 'Start Quiz' when you are ready to begin!");
  }
  console.log(playerName);
  startScreen.setAttribute("class", "hide");
  questionsDiv.removeAttribute("class");
  //call cycle question function here
  cycleQuestions();
};

// Function to cycle the questions
var cycleQuestions = function () {
  var displayQuestions = quizQuestions[questionIndex];
  questionTitle.textContent = displayQuestions.title;
  answerChoices.innerHTML = "";
  displayQuestions.choices.forEach(function (choice) {
    var choiceButton = document.createElement("button");
    choiceButton.setAttribute("value", choice);
    choiceButton.setAttribute("class", "choice");
    choiceButton.textContent = choice;
    choiceButton.onclick = checkAnswer;
    answerChoices.appendChild(choiceButton);
  });
};

// Loop question function
var checkAnswer = function () {
  if (this.value === quizQuestions[questionIndex].answer) {
    document.getElementById("response-status").innerHTML = "CORRECT!";
    console.log("correct");
  } else {
    timeLeft = timeLeft - 15;
    timerSpan.textContent = timeLeft;
    if (timeLeft <= 0) {
      timeLeft = 0;
    }
    document.getElementById("response-status").innerHTML = "INCORRECT!";
    console.log("incorrect");
  }
  questionIndex++;
  if (questionIndex === quizQuestions.length) {
    //call end screen function
    displayEndScreen();
  } else {
    cycleQuestions();
  }
};

// function for end screen
var displayEndScreen = function () {
  questionsDiv.setAttribute("class", "hide");
  endScreen.removeAttribute("class");
  clearInterval(interval);
  timerSpan.textContent = timeLeft;
  results.innerHTML = timeLeft;
  questionIndex = 0;
};

var displayScores = function () {
  var scoresDisplay = JSON.parse(localStorage.getItem("high-scores")) || [];
  scoresDisplay.forEach(function (savedScore) {
    var item = document.createElement("li");
    item.textContent = savedScore.name + ": " + savedScore.score;
    var parentList = document.querySelector("#highscores");
    parentList.appendChild(item);
  });
};

// save to local storage
var scoreBoard = function () {
  initialsVal = initials.value;
  var scoresDisplay = JSON.parse(localStorage.getItem("high-scores")) || [];
  var savedScore = {
    name: initialsVal,
    score: timeLeft,
  };
  scoresDisplay.push(savedScore);
  localStorage.setItem("high-scores", JSON.stringify(scoresDisplay));

  displayScores();
  document.querySelector("input[type='text']").value = "";
};

//function to start over
var tryQuizAgain = function () {
  endScreen.setAttribute("class", "hide");
  startScreen.removeAttribute("class");
  clearInterval(interval);
  timeLeft = 120;
  timerSpan.textContent = timeLeft;
  document.getElementById("response-status").innerHTML = "";
};

displayScores();

// Event listener to start quiz
quizBtn.addEventListener("click", startQuiz);

//event listener to start quiz over
tryAgainBtn.addEventListener("click", tryQuizAgain);

//  Event listener to add score to highscore board
submit.addEventListener("click", scoreBoard);
