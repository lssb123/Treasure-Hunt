// Define the correct answer
var correctAnswer = ["W", "O", "R", "D"];
let x="";



//-------------------------------------------------


let count1=localStorage.getItem('count1') || 0;
let lev1=localStorage.getItem('lev1') || 0;
document.getElementById("attempt").innerHTML=`<h2 class="hello">${count1}<h2>`;

//-------------------------------------------------



document.getElementById("answerInput").value="";
// Add event listeners to the tiles
var tiles = document.querySelectorAll(".tile");
for (var i = 0; i < tiles.length; i++) {
  tiles[i].addEventListener("click", selectTile);
}
// Define the function to select a tile
function selectTile() {
  // Toggle the selected class
 if(this.classList.toggle("selected")) {
//   console.log(this.innerHTML)
  x+=document.getElementById(this.id).innerHTML;
  document.getElementById("answerInput").value=x;
//   console.log(x);
 }
 else {
  this.classList.toggle("selected")=false;
 }
}










// Add an event listener to the check button
var checkButton = document.getElementById("check-button");
checkButton.addEventListener("click", checkAnswer);

// Define the function to check the answer
// Define the function to check the answer
function checkAnswer() {
  let count1 = localStorage.getItem('count1') || 0;
    count1++;
    localStorage.setItem('count1',count1)
    
    document.getElementById("attempt").innerHTML=`<h2 class="hello">${count1}<h2>`;
    // Get the selected tiles
    // var selectedTiles = document.querySelectorAll(".selected");
  
    // Check if the selected tiles match the correct answer
    // if (selectedTiles.length === 4 &&
    //     selectedTiles[0].textContent === correctAnswer[0] &&
    //     selectedTiles[1].textContent === correctAnswer[1] &&
    //     selectedTiles[2].textContent === correctAnswer[2] &&
    //     selectedTiles[3].textContent === correctAnswer[3]) 
    if (x.length===4 && x==="WORD")
    {
      // Show the success message
      var message = document.getElementById("message");
      message.innerHTML = "You solved the puzzle! Moving to Level 2...";
      document.getElementById("message").style.color="yellow";
      let lev1 = localStorage.getItem('lev1') || 0;
      lev1 = 1;
      localStorage.setItem('lev1',lev1);
      // Move to Level 2 after a short delay
      setTimeout(function() {
        window.location.href = "/level2";
      }, 2000);
    } else {
      // Show the error message
      var message = document.getElementById("message");
      message.innerHTML = "Sorry, that's not the correct answer. Please try again.";
      document.getElementById("message").style.color="red";
      x="";
      document.getElementById("answerInput").value="";
    }
  
    // Deselect all tiles
    for (var i = 0; i < tiles.length; i++) {
      tiles[i].classList.remove("selected");
    }
  }

  var exitButton = document.getElementById("exit-button");
  exitButton.addEventListener("click", exitAnswer);
  
  // Define the function to check the answer
  // Define the function to check the answer
  function exitAnswer() {
    alert("press ok to redirect to the start of the game");
    window.location.href = "/intro";
  }

  function skipbutton() {
    message.innerText="You skipped the puzzle! Moving to Level 2...";
    message.style.color="yellow";
    setTimeout(function() {
      window.location.href = "/level2";
    }, 2000);
  }