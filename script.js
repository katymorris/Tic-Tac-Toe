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
  /* -------------------- FUNCTIONS -------------------- */
  /* -------------------------------------------------- */
  function playerWins(winner) {
    if(winner == 0) {
      alert("O Wins!");
    } else {
      alert("X Wins!");
    }
  }
  function resetBoard() {
    for(i=0; i<tttBox.length;i++) {
      tttBox[i].innerHTML = "<p></p>";
    }
    tttBoard = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ]
  }

  //add player names
  function namesPrompt() {
    var player1 = prompt('Please type the name of Player 1');
    var player2 = prompt('Please type the name of Player 2');
    document.getElementById('player1').innerHTML = player1
    document.getElementById('player2').innerHTML = player2
  }
  // namesPrompt()
  //game board
  //add score to game board


  /* -------------------- EVENT LISTENERS -------------------- */
  /* -------------------------------------------------------- */
  
  for(i=0; i<tttBox.length; i++) {
    tttBox[i].addEventListener("click", function() {
      
      /* ---------- Place X OR O ---------- */
      if (this.classList.contains("clicked")) {
        alert('Please choose a different box')
      } else {
        //add clicked on box's first click
        this.className += (" " + 'clicked');
        clickCount++;
        //check if game ended (max amount of clicks met
        if(clickCount === 9) {
          alert('The game is a draw!')
        }
        //Odd clicks for X even clicks for O
        if (clickCount % 2 == 0) {
          this.innerHTML = "<p>O</p>"
          console.log(this)
          // Get box id
          var boxId = this.getAttribute("name");
          var boxClass = this.parentNode.getAttribute("name");
          // Setvalue in array
          tttBoard[boxClass][boxId] = 0;
          console.log(tttBoard);
        } else {
          this.innerHTML = "<p>X</p>"
          // Get box id
          var boxId = this.getAttribute("name");
          var boxClass = this.parentNode.getAttribute("name");
          // Setvalue in array
          tttBoard[boxClass][boxId] = 1;
          console.log(tttBoard);
        }
      }

      /* ---------- Check Win Conditions ----------- */
      // 3 across the same
      if(tttBoard[0].every(function(v) { return v === tttBoard[0][0] && v !== "" })) {
        playerWins(tttBoard[0][0]);
        resetBoard();
      }
      if(tttBoard[1].every(function(v) { return v === tttBoard[0][0] && v !== "" })) {
        playerWins(tttBoard[0][0]);
        resetBoard();
      }
      if(tttBoard[2].every(function(v) { return v === tttBoard[0][0] && v !== "" })) {
        playerWins(tttBoard[0][0]);
        resetBoard();
      }
      // if( tttBoard[0][0] + tttBoard[0][1] + tttBoard[0][2] === 0 ) {
      //   alert('O won!');  
      //   console.log(tttBox.innerHTML)    
      //   tttBox.innerHTML = "<p></p>";
      //   tttBoard = [
      //     ['', '', ''],
      //     ['', '', ''],
      //     ['', '', '']
      //   ]
      //   console.log('ran');
      // }
      // if( tttBoard[1][0] + tttBoard[1][1] + tttBoard[1][2] === 0 ) {
      //   alert('O won!');
      // }
      // if( tttBoard[2][0] + tttBoard[2][1] + tttBoard[2][2] === 0 ) {
      //   alert('O won!');
      // }
      // //vertical wins
      // if( tttBoard[0][0] + tttBoard[1][0] + tttBoard[2][0] === 0 ) {
      //   alert('O won!');
      // }
      // if( tttBoard[0][1] + tttBoard[1][1] + tttBoard[2][1] === 0 ) {
      //   alert('O won!');
      // }
      // if( tttBoard[0][2] + tttBoard[1][2] + tttBoard[2][2] === 0 ) {
      //   alert('O won!');
      // }
      // //diagonal wins
      // if( tttBoard[0][0] + tttBoard[1][1] + tttBoard[2][2] === 0 ) {
      //   alert('O won!');
      // }
      // if( tttBoard[0][2] + tttBoard[1][1] + tttBoard[2][0] === 0 ) {
      //   alert('O won!');
      // }
    });
  }

  // ticBox.addEventListener(“click”, function(e) {
  //   for(i=0;i,tic.length;i++) {

  //   }
  // }, false);



  /* -------------------- DOCUMENT EVENTS -------------------- */
  /* -------------------------------------------------------- */
})();




