let answer = "FF0000";
let clue1 = "The color of fire trucks and stop signs";
let clue2 = "The first two digits represent the intensity of red color";
let clue3 = "The last digits represents the intensity of green,blue colors";


let count2=localStorage.getItem('count2') || 0;
let lev2=localStorage.getItem('lev2') || 0;
document.getElementById("attempt").innerHTML=`<h2 class="hello">${count2}<h2>`;



function checkAnswer() {
  let userAnswer = document.getElementById("answerInput").value.toUpperCase();
  let count2 = localStorage.getItem('count2') || 0;
    count2++;
    localStorage.setItem('count2',count2)
    
    document.getElementById("attempt").innerHTML=`<h2 class="hello">${count2}<h2>`;

  if (userAnswer === answer) {
    errorMsg.innerText="You solved the puzzle! Moving to Level 3...";
    errorMsg.style.color="yellow";

    let lev2 = localStorage.getItem('lev2') || 0;
      lev2 = 1;
      localStorage.setItem('lev2',lev2);



    // Redirect to level 3
    // window.location.href = "level3.html";
    setTimeout(function() {
      window.location.href = "/level3";
    }, 2000);
  } else {
    // Check for clues
    let errorMsg = document.getElementById("errorMsg");
    if (userAnswer.substring(0, 2) !== answer.substring(0, 2)) {
      errorMsg.innerText = `Clue: ${clue2}`;
    } else if (userAnswer.substring(5) !== answer.substring(5)) {
      errorMsg.innerText = `Clue: ${clue3}`;
    } else {
      // Reached dead end
      errorMsg.innerText = "Wrong answer. You reached a dead end.";
      // Redirect to level 1
      window.location.href = "/level2";
    }
  }
}

function exitbutton() {
  alert("press ok to redirect to the start of the game");
  window.location.href = "/intro";
}

function skipbutton() {
  errorMsg.innerText="You skipped the puzzle! Moving to Level 3...";
    errorMsg.style.color="yellow";
  setTimeout(function() {
    window.location.href = "/level3";
  }, 2000);
}