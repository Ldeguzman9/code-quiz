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
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
  },
];

// DEFINE VARIABLES
var timeLeft = 120;
var interval;
var questionIndex = 0;
var quizBtn = document.querySelector("#quiz-start");
var startScreen = document.querySelector("#start-screen");
var endScreen = document.querySelector("#end-screen");
var questionsDiv = document.querySelector("#multiple-choice");
var questionTitle = document.querySelector("#question-title");
var answerChoices = document.querySelector("#answer-choices");
var timerSpan = document.querySelector("#timer_span");
var playerScore = timeLeft;

// CONSOLE LOG NAMES AND SCORES
// console.log(playerName);
// console.log(playerScore);

//Timer function (Tutor version)
// var startTime = function () {
//   var interval = setInterval(function () {
//     timeLeft--;
//     timerSpan.textContent = timeLeft;
//     if (timeLeft <= 0) {
//       document.getElementById("#timer_span").innerHTML = "Time is up!";
//       clearInterval(interval);
//     }
//   }, 1000);
// };

//Time function initial version
var startTime = function () {
  var interval = setInterval(function () {
    document.getElementById("timer_span").innerHTML = --timeLeft;

    if (timeLeft <= 0) {
      document.getElementById("timer_span").innerHTML = "Time is up!";
      clearInterval(interval);
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

var displayEndScreen = function () {
  questionsDiv.setAttribute("class", "hide");
  endScreen.removeAttribute("class");
};

// Loop question function
var checkAnswer = function () {
  if (this.value === quizQuestions[questionIndex].answer) {
    console.log("correct");
  } else {
    timeLeft = timeLeft - 15;
    timerSpan.textContent = timeLeft;
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

// Event listener to start quiz
quizBtn.addEventListener("click", startQuiz);
