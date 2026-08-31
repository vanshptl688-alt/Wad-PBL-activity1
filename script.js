let score = 0;
let answered = 0;

function answer(button, correct) {
  if (button.dataset.done) return;
  button.dataset.done = "true";
  answered++;

  if (correct) {
    score++;
    button.textContent += " ✓";
  } else {
    button.textContent += " ✗";
  }

  const result = document.getElementById("result");
  result.textContent = `Score: ${score}/3 — ${answered === 3 ? "Quiz complete!" : "Keep going!"}`;

  if (answered === 3) {
    result.textContent += score === 3
      ? " Excellent cyber awareness!"
      : " Review the safety tips and try again.";
  }
}
