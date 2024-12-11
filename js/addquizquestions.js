//Initalize Questions
let questionArray = [];

// Button Event Listener
document
  .getElementById("addQuestion")
  .addEventListener("click", addQuestionclicked);

function addQuestionclicked() {
  addQuestion();

  drawaddedquestions();
}

function addQuestion() {
  let newquestion = prompt("Enter question:");
  let newanswer = prompt("Enter answer:").toLowerCase();
  questionArray.push(new Question(newquestion, newanswer));
}

function drawaddedquestions() {
  //Clear newQuizQuestions div
  document.getElementById("newQuizQuestions").innerHTML = "";
  for (let i = 0; i < questionArray.length; i++) {
    document.getElementById("newQuizQuestions").innerHTML += `
    <p>Question ${i + 1} will be "${
      questionArray[i].question
    }" with the answer "${questionArray[i].rightanswer}" </p>  `;
  }
}
