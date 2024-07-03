document.addEventListener("DOMContentLoaded", function() {
    // Select all question elements
    const questions = document.querySelectorAll(".question");
    const answers = document.querySelectorAll(".answer");

    // Function to close all answers
    const closeAllAnswers = () => {
        answers.forEach(answer => answer.style.display = "none");
        questions.forEach(question => question.classList.remove("active"));
    };

    // Add event listener to all question elements
    questions.forEach((question, index) => {
        question.addEventListener("click", () => {
            // Check if the clicked question is already active
            const isActive = question.classList.contains("active");

            // Close all answers
            closeAllAnswers();

            // If the clicked question was not active, open its answer
            if (!isActive) {
                question.classList.add("active");
                answers[index].style.display = "block";
            }
        });
    });

    // Open the first FAQ by default
    if (questions.length > 0 && answers.length > 0) {
        questions[0].classList.add("active");
        answers[0].style.display = "block";
    }
});
