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

let questions = [{ question: "test q 1", answers: ["test5", "test2", "test3", "test4"], correctAnswer: "test5"},
{ question: "test q 2", answers: ["test5", "test2", "test3", "test4"], correctAnswer: "test5" },
{ question: "test q 3", answers: ["test5", "test2", "test3", "test4"], correctAnswer: "test5" },
{ question: "test q 4", answers: ["test5", "test2", "test3", "test4"], correctAnswer: "test5" },
{ question: "test q 5", answers: ["test5", "test2", "test3", "test4"], correctAnswer: "test5" },
{ question: "test q 6", answers: ["test5", "test2", "test3", "test4"], correctAnswer: "test5" },
{ question: "test q 7", answers: ["test5", "test2", "test3", "test4"], correctAnswer: "test5" },
{ question: "test q 8", answers: ["test5", "test2", "test3", "test4"], correctAnswer: "test5" }
]



// clear timer
// 



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



