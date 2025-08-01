document.addEventListener("DOMContentLoaded", () => {
  const answers = {
    question1: "22/06/2025",
    question2: "Aslı",
    question3: "Gözlerini ve kokunu",
    question5: "TARİF EDİLEMEZ",
  };

  const answeredCorrect = {};

  document.querySelectorAll(".option").forEach((option) => {
    option.addEventListener("click", function () {
      const questionId = this.parentNode.id;
      const selectedAnswer = this.textContent.trim();
      const correctAnswer = answers[questionId];

      if (selectedAnswer === correctAnswer) {
        alert("Doğru cevap! ❤️");
        answeredCorrect[questionId] = true;
      } else {
        alert("Yanlış cevap! 💔");
        answeredCorrect[questionId] = false;
      }

      const allCorrect = Object.keys(answers).every(
        (q) => answeredCorrect[q] === true
      );

      if (allCorrect) {
        document.getElementById("surprise-link").style.display = "inline-block";
      }
    });
  });
});
