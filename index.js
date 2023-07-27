let quizDiv = document.querySelector("#quiz");
let questionRender = document.querySelector("#question");
let questionButton1 = document.querySelector("#answer1");
let questionButton2 = document.querySelector("#answer2");
let questionButton3 = document.querySelector("#answer3");
let questionButton4 = document.querySelector("#answer4");
let timerRender = document.querySelector("#timer");



// let timer = 90;

// let timerId = setInterval(function(){

// timer -=1;
// timerRender.textContent = timer;
// }, 1000);



let questions = [{question: "test", answers:["test1", "test2", "test3", "test4"], correctAnswer: "test5" },
                 {question: "test", answers:["test1", "test2", "test3", "test4"], correctAnswer: "test5" },
                 {question: "test", answers:["test1", "test2", "test3", "test4"], correctAnswer: "test5" },
                 {question: "test", answers:["test1", "test2", "test3", "test4"], correctAnswer: "test5" }
]

let currentQuestion = 0;









renderQuestion();

function renderQuestion() {

    questionRender.textContent = questions[currentQuestion].question;
    questionButton1.textContent = questions[currentQuestion].answers[0];
    questionButton2.textContent = questions[currentQuestion].answers[1];
    questionButton3.textContent = questions[currentQuestion].answers[2];
    questionButton4.textContent = questions[currentQuestion].answers[3];
    //show correct answer questions[currentQuestion].correctAnswer

}

quizDiv.addEventListener("click", function(event) {

    if (event.target.matches("button")) {

        console.log("clicked!");
        console.log("value:" + event.target.innerText)
        console.log("correct answer: " + questions[currentQuestion].correctAnswer);

        currentQuestion++;
        renderQuestion();
    }

})

