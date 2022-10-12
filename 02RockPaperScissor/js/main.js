const rock = document.querySelectorAll(".choice")[0];
const paper = document.querySelectorAll(".choice")[1];
const sissor = document.querySelectorAll(".choice")[2];
const userStat = document.querySelector("#result-user-stat");
const compStat = document.querySelector("#result-comp-stat");
const winner = document.querySelector("#result-final-stat");
const userScore = document.querySelector("#userScoreVal");
const computerScore = document.querySelector("#compScoreVal");

// if user selects Rock
rock.addEventListener("click", () => {
  let cpuI = Math.floor(Math.random() * 3);
  let cpu = ["Rock", "Paper", "Sissor"][cpuI];
  let user = rock;
  userStat.innerText = "User: Rock ";
  compStat.innerText = "Computer :" + cpu;
  winner.innerText = "winner: " + match(cpu, user);
});
// if user selects Paper
paper.addEventListener("click", () => {
  let cpuI = Math.floor(Math.random() * 3);
  let cpu = ["Rock", "Paper", "Sissor"][cpuI];
  let user = paper;
  userStat.innerText = "User: Paper ";
  compStat.innerText = "Computer :" + cpu;
  winner.innerText = "winner: " + match(cpu, user);
});
// if user selects Sissor
sissor.addEventListener("click", () => {
  let cpuI = Math.floor(Math.random() * 3);
  let cpu = ["Rock", "Paper", "Sissor"][cpuI];
  let user = sissor;
  userStat.innerText = "User: Sissor ";
  compStat.innerText = "Computer :" + cpu;
  winner.innerText = "winner: " + match(cpu, user);
});

const match = (cpu, user) => {
  if (
    (user === rock && cpu === "Rock") ||
    (user === sissor && cpu === "Sissor") ||
    (user === paper && cpu === "Paper")
  ) {
    return "Nobody";
  } else if (cpu === "Rock" && user === paper) {
    userScore.innerText++;
    return "user";
  } else if (cpu === "Rock" && user === sissor) {
    computerScore.innerText++;
    return "Computer";
  } else if (cpu === "Sissor" && user === paper) {
    computerScore.innerText++;
    return "Computer";
  } else if (cpu === "Sissor" && user === rock) {
    userScore.innerText++;
    return "user";
  } else if (cpu === "Paper" && user === rock) {
    computerScore.innerText++;
    return "Computer";
  } else if (cpu === "Paper" && user === sissor) {
    userScore.innerText++;
    return "user";
  }
};
