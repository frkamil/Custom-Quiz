//Global Variables
let state = "setup";
// let state = "quiz";

setTimeout(checkState, 0);

function checkState() {
  setTimeout(checkState, 5);
  if (state == "setup") {
    SetUp();
  } else if (state === "quiz") {
    quiz();
  }
}

document.getElementById("btn").addEventListener("click", gobtnClicked);

function gobtnClicked() {
  state = "quiz";
  // document.getElementById("btn").removeEventListener("click", gobtnClicked);
}
