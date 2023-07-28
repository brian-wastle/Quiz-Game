let questionRender = document.querySelector("#question");
let questionButton1 = document.querySelector("#answer1");
let questionButton2 = document.querySelector("#answer2");
let questionButton3 = document.querySelector("#answer3");
let questionButton4 = document.querySelector("#answer4");
let timerRender = document.querySelector("#timer");
let startMenuId = document.getElementById("start-menu");
let startButton = document.querySelector("#start-button");
let quizButtons = document.querySelector("#quiz");
let timerVis = document.querySelector("#timer");
let currentQuestion = -1;
let score = document.getElementById("score");
let scoreValue = 0; 
score.textContent = scoreValue.toString().padStart(8, '0');
let timerId = "";
let timer = 91;
quizButtons.style.visibility = "hidden";
timerVis.style.visibility = "hidden";
score.style.visibility = "hidden";

let questions = [{ question: "In what year was Super Mario Bros. Released for the Nintendo Entertainment System?", answers: ["1985", "1987", "1990", "1992"], correctAnswer: "1985"},
{ question: "Which game is often cited as the `worst of all time` and partially responsible for the video game crash of 1983?", answers: ["Pac-Man", "E.T. the Extra-Terrestrial", "Adventure", "Yar's Revenge"], correctAnswer: "E.T. the Extra-Terrestrial" },
{ question: "Which is the highest selling video game console of all time?", answers: ["Nintendo Wii", "Playstation 2", "Nintendo Gameboy", "Xbox 360"], correctAnswer: "Playstation 2" },
{ question: "In what year was Nintendo founded?", answers: ["1976", "1889", "1980", "1979"], correctAnswer: "1889" },
{ question: "Which is the marketing term Sega chose to advertise the Genesis as the `superior machine` to its rival, the Super Nintendo?", answers: ["HyperDrive", "Mega RAM", "Turbo Graphics", "Blast Processing"], correctAnswer: "Blast Processing" },
{ question: "test q 6", answers: ["test5", "test2", "test3", "test4"], correctAnswer: "test5" },
{ question: "test q 7", answers: ["test5", "test2", "test3", "test4"], correctAnswer: "test5" },
{ question: "test q 8", answers: ["test5", "test2", "test3", "test4"], correctAnswer: "test5" }
]



// clear timer
// 

//get high scores

// localStorage.getItem(example) === code || 0


startButton.addEventListener("click", function () {
    currentQuestion += 1;
    console.log(currentQuestion);
    startQuiz();
    timerVis.style.visibility = "visible";
    score.style.visibility = "visible";
    timerId = setInterval(function(){

        timer -=1;
        timerRender.textContent = timer;
        }, 1000);
    renderQuestion();
    
});


quizButtons.addEventListener("click", function (event) {

    if (event.target.matches("button")) {

        console.log("clicked!");
        console.log("value:" + event.target.innerText)
        console.log("correct answer: " + questions[currentQuestion].correctAnswer);
        compareAnswers();
        
        

        function compareAnswers() {
            if (event.target.innerText == questions[currentQuestion].correctAnswer) {
                scoreValue += 500;
                score.textContent = scoreValue.toString().padStart(8, '0');
            }
            else {
                timer -= 5;
            }

        }


        currentQuestion++;
        if (currentQuestion <= questions.length-1) {
            console.log(currentQuestion);
            console.log(questions.length)
            renderQuestion();
        } 
        else {
            timerVis.style.visibility = "hidden";
            clearInterval(timerId);
            endQuiz();
        }
    }

})

let number = 2;
let result = number.toString().padStart(5, '0');
console.log(result); // 00002


function startQuiz() {
    startMenuId.style.visibility = "hidden";
    quizButtons.style.visibility = "visible";
    
}

function endQuiz() {
    quizButtons.style.visibility = "hidden";
    
}

function renderQuestion() {
    questionRender.textContent = questions[currentQuestion].question;
    questionButton1.textContent = questions[currentQuestion].answers[0];
    questionButton2.textContent = questions[currentQuestion].answers[1];
    questionButton3.textContent = questions[currentQuestion].answers[2];
    questionButton4.textContent = questions[currentQuestion].answers[3];
    //show correct answer questions[currentQuestion].correctAnswer
}



