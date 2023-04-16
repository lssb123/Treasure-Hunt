let answer = "SPEED";


let count3=localStorage.getItem('count3') || 0;
let lev3=localStorage.getItem('lev3') || 0;
document.getElementById("attempt").innerHTML=`<h2 class="hello">${count3}<h2>`;

function checkAnswer() {
  let userAnswer = document.getElementById("answerInput").value.toUpperCase();
  
  let count3 = localStorage.getItem('count3') || 0;
  count3++;
  localStorage.setItem('count3',count3)
  
  document.getElementById("attempt").innerHTML=`<h2 class="hello">${count3}<h2>`;

  if (userAnswer === answer) {
    errorMsg.innerText="You solved the puzzle! Moving to Level 4...";
    errorMsg.style.color="yellow";


    let lev3 = localStorage.getItem('lev3') || 0;
      lev3 = 1;
      localStorage.setItem('lev3',lev3);

    // Redirect to level 3
    // window.location.href = "level3.html";
    setTimeout(function() {
      window.location.href = "/level4";
    }, 2000);
  } else {
      // Reached dead end
      errorMsg.innerText = "Sorry, that's not the correct answer. Please try again.";
      errorMsg.style.color=red;
    //   window.location.href = "level1.html";
    }
  }

function exitbutton() {
  alert("press ok to redirect to the start of the game");
  window.location.href = "/intro";
}

function skipbutton() {
  errorMsg.innerText="You skipped the puzzle! Moving to Level 4...";
    errorMsg.style.color="yellow";
  setTimeout(function() {
    window.location.href = "/level4";
  }, 2000);
}