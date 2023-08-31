let currentPlayer = "X";

let gameState = ["", "", "", "", "", "", "", "", ""];

const win=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

let gameActive = true;

function changeTurn(cell) {
    if (!cell.textContent && gameActive) {
        cell.textContent = currentPlayer;
        gameState[cell.id] = currentPlayer;
        checkWin();
        
        if(gameActive) {
            currentPlayer = currentPlayer === "X" ? "0": "X";
        }
    }
}

function checkWin() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = win[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
          roundWon = true;           
          for (let j = 0; j < winCondition.length; j++) {
            const element = document.getElementById(winCondition[j]);
            element.innerHTML = "<strike style='color:red'>" + element.innerHTML + "</strike>";
           }
          break        
        }     
    }
    //win check
    if (roundWon) {
        gameActive = false;
        setTimeout(() => {
            alert("The Winner player : " + currentPlayer);
        }, 10);
        document.getElementById("resetButton").style.display = "block";
        document.getElementById("overlay").style.display = "block";
        return;
    }
    //draw checker
    if(!gameState.includes('')){
      setTimeout(() => { alert("Game Draw");}, 10);
      document.getElementById("resetButton").style.display = "block";
      document.getElementById("overlay").style.display = "block";

    }
  }
//reset game state
function resetGame() {
    gameState = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameActive = true;
    document.querySelectorAll('.cell').forEach(cell => cell.textContent = '');
    document.getElementById("resetButton").style.display = "none";
    document.getElementById("overlay").style.display = "none";

}





