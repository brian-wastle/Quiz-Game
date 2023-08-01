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
score.textContent = "00000000";
let timerId = "";
let timer = 90;
let playerStats = {};
quizButtons.style.visibility = "hidden";
timerVis.style.visibility = "hidden";
score.style.visibility = "hidden";

let questions = [{ question: "In what year was Super Mario Bros. released for the Nintendo Entertainment System?", answers: ["1985", "1987", "1990", "1992"], correctAnswer: "1985"},
{ question: "Which game is often cited as the `worst of all time` and partially responsible for the video game crash of 1983?", answers: ["Pac-Man", "E.T. the Extra-Terrestrial", "Adventure", "Yar's Revenge"], correctAnswer: "E.T. the Extra-Terrestrial" },
{ question: "Which is the highest selling video game console of all time?", answers: ["Nintendo Wii", "Microsoft Xbox 360", "Nintendo Gameboy", "Sony Playstation 2"], correctAnswer: "Sony Playstation 2" },
{ question: "In what year was Nintendo founded?", answers: ["1976", "1889", "1980", "1979"], correctAnswer: "1889" },
{ question: "Which is the marketing term Sega chose to advertise the Genesis as the `superior machine` to its rival, the Super Nintendo?", answers: ["HyperDrive", "Mega RAM", "Blast Processing", "Turbo Graphics"], correctAnswer: "Blast Processing" },
{ question: "This person, assumed to be an secret unlockable character in Street Fighter II, does not actually appear until 2023's Street Fighter 6.", answers: ["Evil Ryu", "Noob Saibot", "Akuma", "Shen Long"], correctAnswer: "Shen Long" },
{ question: "This video game console released in North America on September 9, 1999, or 9/9/99.", answers: ["Sega Dreamcast", "Gameboy Advance", "ColecoVision", "Microsoft Xbox"], correctAnswer: "Sega Dreamcast" },
{ question: "Which character starred in the first cartoon based on a video game character?", answers: ["Lara Croft", "Samus Aran", "Princess Zelda", "Ms. Pac-Man"], correctAnswer: "Ms. Pac-Man" }
]



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
        compareAnswers();

        currentQuestion++;
        if (currentQuestion <= questions.length-1) {
            renderQuestion();
        } 
        else {
            timerVis.style.visibility = "hidden";
            endQuiz();
        }
    }   

    function compareAnswers() {
                if (event.target.innerText == questions[currentQuestion].correctAnswer) {
                    scoreValue += 500;
                    score.textContent = scoreValue.toString().padStart(8, '0');
                }
                else {
                    timer -= 5;
                }
            }

});


function startQuiz() {
    startMenuId.style.visibility = "hidden";
    quizButtons.style.visibility = "visible";
    
}

function endQuiz() {
    quizButtons.style.visibility = "hidden";
    playerStats["score"] = scoreValue;
    playerStats["time"] = timer;
    clearInterval(timerId);
    localStorage.setItem("playerStats", JSON.stringify(playerStats));

    window.location.href = "./highscores.html";
}
function renderQuestion() {
    questionRender.textContent = questions[currentQuestion].question;
    questionButton1.textContent = questions[currentQuestion].answers[0];
    questionButton2.textContent = questions[currentQuestion].answers[1];
    questionButton3.textContent = questions[currentQuestion].answers[2];
    questionButton4.textContent = questions[currentQuestion].answers[3];
    //show correct answer questions[currentQuestion].correctAnswer
}



