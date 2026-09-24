//
// This script powers a two-step quiz.
// It shows one question at a time, tracks the current step,
// and displays the final score when the user submits.
//

// qStep stores the current question number.
// It starts at 1, meaning we are on the first question.
let qStep = 1;

function submitQuiz() {
  // document.querySelectorAll('input:checked') finds all checked radio buttons.
  // ... converts the list into an array so we can use reduce().
  const score = [...document.querySelectorAll('input:checked')]
    // For each checked answer, add its numeric value.
    // In this app, correct answers have value 1 and wrong answers have value 0.
    .reduce((total, answer) => total + Number(answer.value), 0);

  // Display the final score.
  document.getElementById('qScore').innerText = `Score: ${score} / 2`;

  // Remove the hidden class so the score becomes visible.
  document.getElementById('qScore').classList.remove('hidden');
}

function navStep(dir) {
  // Hide the current question panel.
  document.getElementById(`q${qStep}`).classList.add('hidden');

  // Move to the next or previous question.
  qStep += dir;

  // Show the next question panel.
  document.getElementById(`q${qStep}`).classList.remove('hidden');

  // Disable the previous button when the current step is 1.
  document.getElementById('qPrev').disabled = (qStep === 1);

  // Update the button text and behavior depending on the current step.
  const nextButton = document.getElementById('qNext');
  nextButton.innerText = qStep === 2 ? 'Submit' : 'Next';
  nextButton.onclick = qStep === 2 ? submitQuiz : () => navStep(1);
}