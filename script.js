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
  var player1;
  var player2;
  var roundsNum;
  /* -------------------- FUNCTIONS -------------------- */
  /* -------------------------------------------------- */

  /*------GAME------*/

  function playerWins(winner) {
    console.log('made it to winner')
    if(winner === 0) {
      $('.module-overlay').css('display', 'block').transition({'opacity': '1'}, {duration: 300, queue: true})
      $('#rounds-modal').css('display', 'block');
      $('.module-overlay').css('display', 'block').transition({'opacity': '1'}, {duration: 300, queue: true})
      tttBoard = [
          ['', '', ''],
          ['', '', ''],
          ['', '', '']
        ]
      clickCount = 0;

    } 
    if(winner > 0) {
      $('.module-overlay').css('display', 'block').transition({'opacity': '1'}, {duration: 300, queue: true})
      $('#round-won-modal').css('display', 'block');
      $('.module-overlay').css('display', 'block').transition({'opacity': '1'}, {duration: 300, queue: true})
       tttBoard = [
          ['', '', ''],
          ['', '', ''],
          ['', '', '']
        ]   
      clickCount = 0; 
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

  /* -------------------- EVENT LISTENERS -------------------- */
  /* -------------------------------------------------------- */
  
    /*------MODALS------*/

   //open modal
    $('body').on('click singletap tap', '.modal-open', function() {
        $(this).addClass('modal-clicked')
        $('.module-overlay').css('display', 'block').transition({'opacity': '1'}, {duration: 300, queue: true})
        var thisData = $(this).data('module');
        var matchingModule = $('body').find("[data-modulebox='" + thisData + "']");
        $(matchingModule).css('display', 'block').transition({'opacity': '1'}, {duration: 300});
        $(matchingModule).addClass('matching-module-open')
        $('body').css('overflow', 'hidden');
    });
    //close modal
    $('body').on('click singletap tap', '.module-close', function() {
        $('.module-overlay').transition({'opacity': '0'}, {duration: 300, complete: function() {
            $('.module-overlay').css('display', 'none');
        }})
        $(this).removeClass('modal-clicked')
        $('.matching-module-open').css('display', 'none').removeClass('matching-module-open');
        var modContParent = $(this).parent();
        var modWrapper = $(modContParent).parent();
        $(modWrapper).css('display', 'none');
        $('.top-bar').transition({'opacity': '1', 'position': 'fixed'}, 300)
        $('body').css('overflow', 'auto');
    });
    //get user input
    $('body').on('click singletap tap', '.player-names-submit', function() {
      player1 = document.getElementById("player1").value;
      player2 = document.getElementById("player2").value;
      $('#players-modal').css('display', 'none');
      $('#rounds-modal').css('display', 'block');
    });
    $('body').on('click singletap tap', '.rounds-submit', function() {
      roundsNum = document.getElementById("rounds").value;
      $('#rounds-modal').css('display', 'none');
              $('.module-overlay').transition({'opacity': '0'}, {duration: 300, complete: function() {
            $('.module-overlay').css('display', 'none');
        }})
      console.log(player1)
      console.log(player2)
      console.log(roundsNum)
    });
    $('body').on('click singletap tap', '.next-round-btn', function() {
      $('#round-won-modal').css('display', 'none');
      $('.module-overlay').transition({'opacity': '0'}, {duration: 300, complete: function() {
        $('.module-overlay').css('display', 'none');
      }})
    })

    /*------GAME------*/


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




