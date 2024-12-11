function markquizbtnClicked() {
  //Change display
  document.getElementById("quizMark").style.display = "block";
  document.getElementById("btn").style.display = "none";

  //Process

  score = 0;

  for (let i = 0; i < questionArray.length; i++) {
    score += markQuestion(
      `question${i + 1}in`,
      `answer${i + 1}Is`,
      `${questionArray[i].rightanswer}`
    );
  }

  // OUTPUT
  document.getElementById("quizMark").innerHTML = `      <h1>
    Your Score: ${score} / ${questionArray.length} (${Math.round(
    (score / questionArray.length) * 100
  )}%)</h1>`;
}

function markQuestion(inputID, outputID, rightanswers) {
  let answer = document.getElementById(inputID).value.toLowerCase();
  if (answer === rightanswers) {
    document.getElementById(
      outputID
    ).innerHTML = `<span class="correct">     Correct</span>
        `;
    document.getElementById(inputID).style.border = "2px solid green";
    return 1;
  } else {
    document.getElementById(
      outputID
    ).innerHTML = `<span class="wrong">   Incorrect</span>
            `;
    document.getElementById(inputID).style.border = "2px solid red";
    return 0;
  }
}
