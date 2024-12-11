let Quizname = "";
function SetUp() {
  //Change visibility
  document.getElementById("customize").style.display = "block";
  document.getElementById("quizMark").style.display = "none";
  document.getElementById("quiz").style.display = "none";

  //Change background color
  let backgroundColor = document.getElementById("backgroundcolor").value;
  document.body.style.background = `${backgroundColor}`;

  //Change body color
  let bodyColor = document.getElementById("bodycolor").value;
  document.getElementById("text").style.background = `${bodyColor}c2`;

  //Change Text

  //Change text color

  let textColor = document.getElementById("textcolor").value;
  document.getElementById("text").style.color = textColor;

  //Change Name
  Quizname = document.getElementById("input-name").value;

  //Change button
  //Not that important, just makes it look cohesive

  document.getElementById("btn").style.background = `${bodyColor}c2`;
  document.getElementById("btn").style.color = textColor;
  document.getElementById("btn").style.borderColor = textColor;

  document.getElementById("addQuestion").style.background = `${bodyColor}c2`;
  document.getElementById("addQuestion").style.color = textColor;
  document.getElementById("addQuestion").style.borderColor = textColor;

  //Change quote preferance
}
