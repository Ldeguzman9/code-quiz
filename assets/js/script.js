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
];

// DEFINE VARIABLES
var timeLeft = 120;
var interval;
var questionIndex = 0;
var quizBtn = document.querySelector("#quiz-start");
var startScreen = document.querySelector("#start-screen");
var questionsDiv = document.querySelector("#multiple-choice");
var questionTitle = document.querySelector("#question-title");
var answerChoices = document.querySelector("#answer-choices");
var timerSpan = document.querySelector("#timer_span");
// var playerScore = 100
// var incorrectAnswer = -5
// var correctAnswer = 10
// var finalScore = playerScore + totalScore

// CONSOLE LOG NAMES AND SCORES
// console.log(playerName);
// console.log(finalScore);

//Timer function
var startTime = function () {
  var interval = setInterval(function () {
    timeLeft--;
    timerSpan.textContent = timeLeft;
    if (timeLeft <= 0) {
      document.getElementById("#timer_span").innerHTML = "Time is up!";
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
};

// Function to cycle the questions

// Correct VS Incorrect Answers
//  switch (totalScore) {
//     case "correct":
//       //increase playerScore
//       playerScore = playerScore + 10;
//       break;

//     case "incorrect":
//       // decrease player score and subtract timeLeft
//       playerScore = playerscore - 5;
//       timeLeft = timeLeft - 5;
//       break;}

// Loop function

// End screen function

// Event listener to start quiz
quizBtn.addEventListener("click", startQuiz);
