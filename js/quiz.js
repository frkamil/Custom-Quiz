function quiz() {
  //Change visibility

  document.getElementById("customize").style.display = "none";
}

//Random Questions Quiz
document.getElementById("quizMark").style.display = "none";
//Start Quiz!

document.getElementById(
  "quiz"
).innerHTML = `<h2 class ='center'>Are you ready to start the quiz?</h1>`;

document.getElementById("btn").addEventListener("click", quizClicked);
document.getElementById("btn").innerHTML = "Start";

//next Question
function quizClicked() {
  // OUTPUT
  document.getElementById("quiz").style.display = "block";

  document.getElementById(
    "quiz"
  ).innerHTML = `<h1 class="center">${Quizname}</h1>
  <hr />
  `;
  for (let i = 0; i < questionArray.length; i++) {
    document.getElementById("quiz").innerHTML += `
  
  <h3>Question ${i + 1}:</h3>
  <p>${questionArray[i].question}</p>  
  <h4>
  Answer: <input id="question${i + 1}in" type="text" />
  <span id="answer${i + 1}Is"> </span>
</h4>
<br />`;
  }

  document.getElementById("btn").addEventListener("click", markquizbtnClicked);
  document.getElementById("btn").innerHTML = "Mark Quiz";
  document.getElementById("btn").removeEventListener("click", quizClicked);
}
