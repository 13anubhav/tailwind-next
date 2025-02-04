
        document.querySelectorAll('.copy-btn').forEach(button => {
            button.addEventListener('click', () => {
                const codeBlock = button.nextElementSibling;
                const code = codeBlock.textContent;
                
                navigator.clipboard.writeText(code).then(() => {
                    const successMessage = document.getElementById('successMessage');
                    successMessage.classList.add('show');
                    button.textContent = 'Copied!';
                    
                    setTimeout(() => {
                        successMessage.classList.remove('show');
                        button.textContent = 'Copy Code';
                    }, 2000);
                });
            });
        });

        // Add intersection observer for animation
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    entry.target.style.transitionDelay = `${index * 0.2}s`;
                }
            });
        }, {
            threshold: 0.1
        });

        document.querySelectorAll('.step-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            observer.observe(card);
        });
   