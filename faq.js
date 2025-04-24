document.addEventListener('DOMContentLoaded', function() {
    // Select all FAQ question elements
    const faqQuestions = document.querySelectorAll('.faq-question');

    // Initialize all FAQ items to ensure answers are hidden by default
    faqQuestions.forEach(function(question) {
        const faqItem = question.closest('.faq-item');
        const answer = faqItem ? faqItem.querySelector('.faq-answer') : null;
        if (answer) {
            answer.style.display = 'none';
            // Ensure initial state of arrow and question
            const arrow = question.querySelector('svg');
            if (arrow) {
                arrow.classList.remove('rotate-180');
            }
            question.classList.remove('active');
        }
    });

    // Attach click event to each question
    faqQuestions.forEach(function(question) {
        question.addEventListener('click', function() {
            // Find the parent faq-item and the corresponding answer
            const faqItem = this.closest('.faq-item');
            const answer = faqItem ? faqItem.querySelector('.faq-answer') : null;

            // Check if answer exists
            if (!answer) {
                console.error('No answer found for this question:', this.textContent);
                return;
            }

            // Close all other answers first
            faqQuestions.forEach(function(q) {
                if (q !== question) {
                    const otherFaqItem = q.closest('.faq-item');
                    const otherAnswer = otherFaqItem ? otherFaqItem.querySelector('.faq-answer') : null;
                    if (otherAnswer) {
                        otherAnswer.style.display = 'none';
                        q.classList.remove('active');
                        const otherArrow = q.querySelector('svg');
                        if (otherArrow) {
                            otherArrow.classList.remove('rotate-180');
                        }
                    }
                }
            });

            // Toggle the current answer
            const isVisible = answer.style.display !== 'none';
            answer.style.display = isVisible ? 'none' : 'block';
            this.classList.toggle('active');

            // Toggle the arrow rotation
            const arrow = this.querySelector('svg');
            if (arrow) {
                arrow.classList.toggle('rotate-180');
            }
        });
    });
});