(function() {
  /* -------------------- GLOBALS -------------------- */
  /* ------------------------------------------------ */
  var xOutput = false;
  var oOutput = false;
  var tttBox = document.getElementsByClassName('ttt-box');
  clickCount = 0;
  //Array for Board
  var tttBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]
  var leftVertBoard;
  var play1;
  var play2;
  /* -------------------- FUNCTIONS -------------------- */
  /* -------------------------------------------------- */
  function playerWins(winner) {
    console.log('made it to winner')
    if(winner === 0) {
      alert(play2 + ' Wins!');
    } 
    if(winner > 0) {
      alert(play1 + ' Wins!');
    }
  }
  function resetBoard() {
    for(i=0; i<tttBox.length;i++) {
      tttBox[i].innerHTML = "<p></p>";
      tttBox[i].classList.remove("clicked")
    }
    tttBoard = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    clickCount = 0;
  }

  //add player names
  function namesPrompt() {
    play1 = prompt('Please type the name of Player 1');
    play2 = prompt('Please type the name of Player 2');
    console.log(player1)
  }
  namesPrompt()
  //game board
  //add score to game board


  /* -------------------- EVENT LISTENERS -------------------- */
  /* -------------------------------------------------------- */
  
  for(i=0; i<tttBox.length; i++) {
    var didWin = false;
    tttBox[i].addEventListener("click", function() {
      console.log(tttBoard)
      /* ---------- Place X OR O ---------- */
      if (this.classList.contains("clicked")) {
        console.log('clicked')
      } else {
        //add clicked class on box's first click
        console.log(this)
        this.className += (" " + 'clicked');
        clickCount++;
        //Odd clicks for X even clicks for O
        if (clickCount % 2 == 0) {
          this.innerHTML = "<p>O</p>"
          // Get box id
          var boxId = this.getAttribute("name");
          var boxClass = this.parentNode.getAttribute("name");
          // Setvalue in array
          tttBoard[boxClass][boxId] = 0;
          leftVertBoard = [tttBoard[0][0], tttBoard[1][0], tttBoard[2][0]];
          console.log(leftVertBoard)
        } else {
          this.innerHTML = "<p>X</p>"
          // Get box id
          var boxId = this.getAttribute("name");
          var boxClass = this.parentNode.getAttribute("name");
          // Setvalue in array
          tttBoard[boxClass][boxId] = 1;
          leftVertBoard = [tttBoard[0][0], tttBoard[1][0], tttBoard[2][0]];
          console.log(leftVertBoard)
        }
      }

      /* ---------- Check Win Conditions ----------- */
      // arrays containing vertical win rows
      var verticalLeft = [tttBoard[0][0], tttBoard[1][0], tttBoard[2][0]];
      var verticalMiddle = [tttBoard[0][1], tttBoard[1][1], tttBoard[2][1]];
      var verticalRight = [tttBoard[0][2], tttBoard[1][2], tttBoard[2][2]];
      // arrays containing diagonal win rows
      var diagRight = [tttBoard[0][0], tttBoard[1][1], tttBoard[2][2]];
      var diagLeft = [tttBoard[0][2], tttBoard[1][1], tttBoard[2][0]];

      // 3 across the same
      if(tttBoard[0].every(function(v) { return v === tttBoard[0][0] && v !== "" })) {
        didWin = true;
        playerWins(tttBoard[0][0]);
        resetBoard();
      }
      if(tttBoard[1].every(function(v) { return v === tttBoard[1][0] && v !== "" })) {
        didWin = true;
        playerWins(tttBoard[1][0]);
        resetBoard();
      }
      if(tttBoard[2].every(function(v) { return v === tttBoard[2][0] && v !== "" })) {
        didWin = true;
        playerWins(tttBoard[2][0]);
        resetBoard();
      }
      //3 down vertical
      if(verticalLeft.every(function(v) { return v === verticalLeft[0] && v !== "" })) {
        didWin = true;
        playerWins(tttBoard[0][0]);
        resetBoard();
      }
      if(verticalMiddle.every(function(v) { return v === verticalMiddle[0] && v !== "" })) {
        didWin = true;
        playerWins(tttBoard[0][1]);
        resetBoard();
      }
      if(verticalRight.every(function(v) { return v === verticalRight[0] && v !== "" })) {
        didWin = true;
        playerWins(tttBoard[0][2]);
        resetBoard();
      }
      //diagonal wins
      if(diagRight.every(function(v) { return v === diagRight[0] && v !== "" })) {
        didWin = true;
        playerWins(tttBoard[0][0]);
        resetBoard();
      }
      if(diagLeft.every(function(v) { return v === diagLeft[0] && v !== "" })) {
        didWin = true;
        playerWins(tttBoard[0][2]);
        resetBoard();
      }
      console.log(clickCount)
      //check if game ended (max amount of clicks met
      if(clickCount === 9 && didWin == false) {
        alert('The game is a draw!');
      }
    }); // End click
  }


  /* -------------------- DOCUMENT EVENTS -------------------- */
  /* -------------------------------------------------------- */
})();




