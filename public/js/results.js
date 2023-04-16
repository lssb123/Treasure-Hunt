const level1Disp = document.getElementById('level1')
const level1Det = localStorage.getItem('count1')
if (level1Det==null){
    level1Disp.innerHTML=`<p><u>Level1</u> attempts: 0</p>`;
}
else {
level1Disp.innerHTML=`<p><u>Level1</u> attempts: ${level1Det}</p>`;
}


const level2Disp = document.getElementById('level2')
const level2Det = localStorage.getItem('count2')
if (level2Det==null){
    level2Disp.innerHTML=`<p><u>Level2</u> attempts: 0</p>`;
}
else {
level2Disp.innerHTML=`<p><u>Level2</u> attempts: ${level2Det}</p>`;
}

const level3Disp = document.getElementById('level3')
const level3Det = localStorage.getItem('count3')
if (level3Det==null){
    level3Disp.innerHTML=`<p><u>Level3</u> attempts: 0</p>`;
}
else {
level3Disp.innerHTML=`<p><u>Level3</u> attempts: ${level3Det}</p>`;
}

const level4Disp = document.getElementById('level4')
const level4Det = localStorage.getItem('count4')
if (level4Det==null){
    level4Disp.innerHTML=`<p><u>Level4</u> attempts: 0</p>`;
}
else {
level4Disp.innerHTML=`<p><u>Level4</u> attempts: ${level4Det}</p>`;
}

const attonlev1 = localStorage.getItem('lev1');
const attonlev2 = localStorage.getItem('lev2');
const attonlev3 = localStorage.getItem('lev3');
const attonlev4 = localStorage.getItem('lev4');

const l1 = (parseInt(level1Det)-1)*5;
const l2 = (parseInt(level2Det)-1)*5;
const l3 = (parseInt(level3Det)-1)*5;
const l4 = (parseInt(level4Det)-1)*5;


if(attonlev1==1 && attonlev2==1 && attonlev3==1 && attonlev4==1) {
    // console.log(typeof attonlev1);
    x1=100-l1;
    // console.log(x1)
    x2=100-l2;
    x3=100-l3;
    x4=100-l4;
    acc=(x1+x2+x3+x4)/4;
    console.log(acc)
    if (acc>=90) {
        document.getElementById("res").innerHTML=`<h2>Creative Skills:Excellent<br>Logical Skills:Excellent<br>Problem Understanding Skills:Excellent</h2><br>`;
    }
    else if (acc>=75 && acc<90) {
        document.getElementById("res").innerHTML=`<h2>Creative Skills:Good<br>Logical Skills:Good<br>Problem Understanding Skills:Good</h2><br>`;
    }
    else if(acc>=50 && acc<75) {
        document.getElementById("res").innerHTML=`<h2>Creative Skills:Average<br>Logical Skills:Average<br>Problem Understanding Skills:Average</h2><br>`;
    }
    else {
        document.getElementById("res").innerHTML=`<h2>You need to work hard.</h2>`;
    }
    // const results = {
    //     accuracy:acc
    //   }
    //   fetch('/results',{
    //     method:"POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(results)
    //   })
}
else {
    document.getElementById("res").innerHTML=`<h2>Answer All questions and then accuracy can be calculated</h2>`;
}

