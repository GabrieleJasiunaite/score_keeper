const selection = document.querySelector("#maxPoints");
const btnOne = document.querySelector("#onePoint");
const btnTwo = document.querySelector("#twoPoint");
const btnReset = document.querySelector("#reset");
const pOneColor = document.querySelector("#pOneColor");
const pTwoColor = document.querySelector("#pTwoColor");

let maxScore = 0;
let playerOneScore = 0;
let playerTwoScore = 0;

selection.addEventListener("change", (e) => {
    return maxScore = selection.selectedIndex;
})

btnOne.addEventListener("click", (e) => {
    playerOneScore++;
    pOneColor.innerText = playerOneScore;
    if (playerOneScore === maxScore) {
        pOneColor.style.color = "#43AA8B";
        pTwoColor.style.color = "#B15E6C";
        btnOne.setAttribute("disabled", "true");
        btnTwo.setAttribute("disabled", "true");
    }
})

btnTwo.addEventListener("click", (e) => {
    playerTwoScore++;
    pTwoColor.innerText = playerTwoScore;
    if (playerTwoScore === maxScore) {
        pTwoColor.style.color = "#43AA8B";
        pOneColor.style.color = "#B15E6C";
        btnOne.setAttribute("disabled", "true");
        btnTwo.setAttribute("disabled", "true");
    }
})

btnReset.addEventListener("click", (e) => {
    selection.selectedIndex = "0";
    maxScore = "0";
    playerOneScore = "0";
    playerTwoScore = "0";
    btnOne.removeAttribute("disabled");
    btnTwo.removeAttribute("disabled");
    pTwoColor.style.color = "rgb(33, 37, 41)";
    pOneColor.style.color = "rgb(33, 37, 41)";
    pOneColor.innerText = "0";
    pTwoColor.innerText = "0";
})
