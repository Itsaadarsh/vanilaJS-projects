var rpImg = new Image();
var rcImg = new Image();
var ppImg = new Image();
var pcImg = new Image();
var spImg = new Image();
var scImg = new Image();
var plySum = 0;
var compSum = 0;
var compMove, plyMove;
var winner, score;

function rpsLogic(plyChoice) {

  plyMove = plyChoice.className;
  compMove = compRandomMove();
  winner = mainLogic(plyMove, compMove);
  score = scoreTracker(winner);
  setTimeout(displayResults, 3000);
  loadingGify();
  setTimeout(loadingScr, 3000);
  setTimeout(removingEle, 4000);

}

function displayResults() {

  document.getElementById('result-player').innerHTML = score[0];
  document.getElementById('result-comp').innerHTML = score[1];

}

function removingEle() {

  if (plyMove == 'rock' && compMove == 'rock') {
    rpImg.remove();
    rcImg.remove();
  } else if (plyMove == 'paper' && compMove == 'paper') {
    ppImg.remove();
    pcImg.remove();
  } else if (plyMove == 'scissors' && compMove == 'scissors') {
    spImg.remove();
    scImg.remove();
  } else if (plyMove == 'rock') {
    document.getElementById("prid").remove();
  } else if (plyMove == 'paper') {
    document.getElementById("ppid").remove();
  } else if (plyMove == 'scissors') {
    document.getElementById("psid").remove();
  }
  if (compMove == 'rock') {
    document.getElementById("crid").remove();
  } else if (compMove == 'paper') {
    document.getElementById("cpid").remove();
  } else if (compMove == 'scissors') {
    document.getElementById("csid").remove();
  }
}

function compRandomMove() {
  var rpsMoves = ['rock', 'paper', 'scissors'];
  return rpsMoves[Math.floor(Math.random() * 3)];
}

function mainLogic(plyMove, compMove) {
  var movesObj = {
    'rock': {
      'scissors': 1,
      'rock': 0.5,
      'paper': 0
    },
    'paper': {
      'rock': 1,
      'paper': 0.5,
      'scissors': 0
    },
    'scissors': {
      'paper': 1,
      'scissors': 0.5,
      'rock': 0
    }
  };

  var plyScore = movesObj[plyMove][compMove];
  var compScore = movesObj[compMove][plyMove];
  return [plyScore, compScore];
}


function scoreTracker([plyScore, compScore]) {
  if (plyScore === 1) {
    plySum += 1;
  } else if (compScore === 1) {
    compSum += 1;
  }
  return [plySum, compSum];
}

function loadingScr() {

  if (compMove == "rock") {
    rcImg.src = "images/rock.jpg";
    rcImg.className = "rockCircle";
    rcImg.id = "crid";
    compDiv.appendChild(rcImg);
    document.getElementById("cimggif").remove();
  } else if (compMove == "paper") {
    pcImg.src = "images/paper.jpg";
    pcImg.className = "paperCircle";
    pcImg.id = "cpid";
    compDiv.appendChild(pcImg);
    document.getElementById("cimggif").remove();
  } else if (compMove == "scissors") {
    scImg.src = "images/scissors.jpg";
    scImg.className = "scissorsCircle";
    scImg.id = "csid";
    compDiv.appendChild(scImg);
    document.getElementById("cimggif").remove();
  }
  if (plyMove == 'rock') {
    rpImg.src = "images/rock.jpg";
    rpImg.className = "rockCircle";
    rpImg.id = "prid";
    plyDiv.appendChild(rpImg);
    document.getElementById("pimggif").remove();
  } else if (plyMove == 'paper') {
    ppImg.src = "images/paper.jpg";
    ppImg.className = "paperCircle";
    ppImg.id = "ppid";
    plyDiv.appendChild(ppImg);
    document.getElementById("pimggif").remove();
  } else if (plyMove == 'scissors') {
    spImg.src = "images/scissors.jpg";
    spImg.className = "scissorsCircle";
    spImg.id = "psid";
    plyDiv.appendChild(spImg);
    document.getElementById("pimggif").remove();
  }
}

function loadingGify() {
  var pgif = new Image();
  plyDiv = document.getElementById("loading-scr");
  pgif.src = "images/rps.gif";
  pgif.id = "pimggif";
  plyDiv.appendChild(pgif);

  var cgif = new Image();
  compDiv = document.getElementById("comp-loading-scr");
  cgif.src = "images/rps.gif";
  cgif.id = "cimggif";
  compDiv.appendChild(cgif);
}
