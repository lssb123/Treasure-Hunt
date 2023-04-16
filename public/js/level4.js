// Get the code input field and submit button
const codeInput = document.getElementById('codeInput');
const submitBtn = document.getElementById('submitBtn');

let count4=localStorage.getItem('count4') || 0;
let lev4=localStorage.getItem('lev4') || 0;
document.getElementById("attempt").innerHTML=`<h2 class="hello">${count4}<h2>`;





//------------------------------------------------------------------------------------------



function checkAnswer() {
    let code = document.getElementById("codeInput").value;
    let count4 = localStorage.getItem('count4') || 0;
  count4++;
  localStorage.setItem('count4',count4)
  
  document.getElementById("attempt").innerHTML=`<h2 class="hello">${count4}<h2>`;
  // Check if the code is correct
  if (code === '7993') {
    errorMsg.innerText="Calculating Accuracy.....";
    errorMsg.style.color="yellow";


    let lev4 = localStorage.getItem('lev4') || 0;
      lev4 = 1;
      localStorage.setItem('lev4',lev4);

    // Redirect to level 3
    // window.location.href = "level3.html";
    setTimeout(function() {
      
      const level1Det = localStorage.getItem('count1')
    const level2Det = localStorage.getItem('count2')
    const level3Det = localStorage.getItem('count3')
    const level4Det = localStorage.getItem('count4')


    
      const attonlev1 = localStorage.getItem('lev1');
        const attonlev2 = localStorage.getItem('lev2');
        const attonlev3 = localStorage.getItem('lev3');
        const attonlev4 = localStorage.getItem('lev4');

        const l1 = (parseInt(level1Det)-1)*5;
        const l2 = (parseInt(level2Det)-1)*5;
        const l3 = (parseInt(level3Det)-1)*5;
        const l4 = (parseInt(level4Det)-1)*5;

      let acc;
        if(attonlev1==1 && attonlev2==1 && attonlev3==1 && attonlev4==1) {
            // console.log(typeof attonlev1);
            let x1=100-l1;
            // console.log(x1)
            let x2=100-l2;
            let x3=100-l3;
            let x4=100-l4;
            acc = (x1+x2+x3+x4)/4;
        }
        else {
          acc=0;
        }
      const results = {
        level1:localStorage.getItem('count1'),
        level2:localStorage.getItem('count2'),
        level3:localStorage.getItem('count3'),
        level4:localStorage.getItem('count4'),
        accuracy:acc
      }
      // console.log(results)
      fetch('/results',{
        method:"POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(results)
      })
      window.location.href = "/results";
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













//
//------------------------------------------



function skip(){
const level1Det = localStorage.getItem('count1')
const level2Det = localStorage.getItem('count2')
const level3Det = localStorage.getItem('count3')
const level4Det = localStorage.getItem('count4')

  const attonlev1 = localStorage.getItem('lev1');
    const attonlev2 = localStorage.getItem('lev2');
    const attonlev3 = localStorage.getItem('lev3');
    const attonlev4 = localStorage.getItem('lev4');

    const l1 = (parseInt(level1Det)-1)*5;
    const l2 = (parseInt(level2Det)-1)*5;
    const l3 = (parseInt(level3Det)-1)*5;
    const l4 = (parseInt(level4Det)-1)*5;

  let acc;
    if(attonlev1==1 && attonlev2==1 && attonlev3==1 && attonlev4==1) {
        // console.log(typeof attonlev1);
        let x1=100-l1;
        // console.log(x1)
        let x2=100-l2;
        let x3=100-l3;
        let x4=100-l4;
        acc = (x1+x2+x3+x4)/4;
    }
  const results = {
    level1:localStorage.getItem('count1'),
    level2:localStorage.getItem('count2'),
    level3:localStorage.getItem('count3'),
    level4:localStorage.getItem('count4'),
    accuracy:acc
  }
  console.log(results)
  fetch('/results',{
    method:"POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(results)
  })
  window.location.href='/results';
}