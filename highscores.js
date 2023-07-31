let ulNew = document.querySelector("ul");

//get the existing scores and add them to an array
//existing high scores
let tempArray = JSON.parse(localStorage.getItem("storedStats")) || [];

//current player score and time
let tempArray2 = JSON.parse(localStorage.getItem("playerStats"));


//form for player's initials, set equal to variable "initials"



//push both to the existing array of scores
tempArray.push({initials: 'but', score: tempArray2.score, time: tempArray2.time});


// order the array based on score

tempArray.sort((a, b) => a.score - b.score);

//display the new array

for (let i = 0; i < tempArray.length; i++) {
    let li = document.createElement("li");
    li.textContent = tempArray[i].initials;
    li.setAttribute("data-index", i);
    ulNew.appendChild(li);
};



//replace the old scores array with the new one
localStorage.clear();
localStorage.setItem("storedStats", JSON.stringify(tempArray));






