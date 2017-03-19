var player1 = document.getElementById("p1");
var player2 = document.getElementById("p2");
var player1Score = 0;
var player2Score = 0;
var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");
var reset = document.getElementById("reset");
var numInput = document.querySelector("input");
var WinningNumber = document.getElementById("winningNumber");
var winningScore = 0;
numInput.addEventListener("change",function() {
  WinningNumber.textContent = numInput.value;
winningScore = Number(numInput.value);
autoReset();
});

player1.addEventListener("click", function() {
  if(player1Score !== winningScore && player2Score !== winningScore){
  player1Score++;
  p1Display.textContent = player1Score;
}
if(player1Score === winningScore){
  p1Display.classList.add("winner");
}
});

player2.addEventListener("click", function() {
  if(player1Score !== winningScore && player2Score !== winningScore){
  player2Score++;
  p2Display.textContent = player2Score;
}
if(player2Score === winningScore){
  p2Display.classList.add("winner");
}
});

reset.addEventListener("click", function() {
  autoReset();
})

function autoReset() {
  player2Score = 0;
  player1Score = 0;
  p1Display.textContent = player1Score;
  p2Display.textContent = player2Score;
  p2Display.classList.remove("winner");
  p1Display.classList.remove("winner");
}
