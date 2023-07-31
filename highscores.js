let ulInitials = document.getElementById("initials-list");
let ulScore = document.getElementById("score-list");
let ulTime = document.getElementById("time-list");
let submitButton = document.querySelector("#submit-button");
let initialsInput = document.querySelector("#initials-input");
let highScoresTable = document.getElementById("high-score-table");
let playerInput = document.getElementById("player-input");
playerInput.style.visibility = "visible";
highScoresTable.style.visibility = "hidden";


//get the existing scores and add them to an array
    //existing high scores
let tempArray = JSON.parse(localStorage.getItem("storedStats")) || [];

    //current player score and time
let tempArray2 = JSON.parse(localStorage.getItem("playerStats"));

//form for player's initials, set equal to variable "initials"
//push both to the existing array of scores

submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    if (initialsInput.value == '') {
        tempArray.push({initials: 'HAL', score: tempArray2.score, time: tempArray2.time});
    }
    else {
        tempArray.push({initials: initialsInput.value, score: tempArray2.score, time: tempArray2.time});
    }
    

    // tempArray.push({initials: initialsInput.value, score: tempArray2.score, time: tempArray2.time});
    
    // order the array based on score
    tempArray.sort((a, b) => b.score - a.score);
    
    if (tempArray.length > 10) {
        tempArray = tempArray.slice(0, 10);
    }
    //replace the old scores array with the new one
    localStorage.setItem("storedStats", JSON.stringify(tempArray));

    displayScores();
    playerInput.style.visibility = "hidden";
    highScoresTable.style.visibility = "visible";
  });




//display the new array
function displayScores() {
    
    let tempArray = JSON.parse(localStorage.getItem("storedStats")) || [];

    for (let i = 0; i < tempArray.length; i++) {
        let li = document.createElement("li");
        li.textContent = tempArray[i].initials;
        li.setAttribute("data-index", i);
        ulInitials.appendChild(li);
    };
    
    for (let i = 0; i < tempArray.length; i++) {
        let li = document.createElement("li");
        li.textContent = tempArray[i].score;
        li.setAttribute("data-index", i);
        ulScore.appendChild(li);
    };

    for (let i = 0; i < tempArray.length; i++) {
        let li = document.createElement("li");
        li.textContent = tempArray[i].time;
        li.setAttribute("data-index", i);
        ulTime.appendChild(li);
    };

}



// //replace the old scores array with the new one
// localStorage.setItem("storedStats", JSON.stringify(tempArray));






