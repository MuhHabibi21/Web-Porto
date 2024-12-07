  const phrases = ["Habibi", "a student at SMKN 21", "Cyber Security Engineer"];
    let currentPhrase = 0;
    let currentChar = 0;
    const typingElement = document.getElementById("typing-effect");

    function typeEffect() {
        if (currentChar < phrases[currentPhrase].length) {
            typingElement.innerHTML += phrases[currentPhrase].charAt(currentChar);
            currentChar++;
            setTimeout(typeEffect, 100);
        } else {
            setTimeout(deleteEffect, 1000);
        }
    }

    function deleteEffect() {
        if (currentChar > 0) {
            typingElement.innerHTML = phrases[currentPhrase].substring(0, currentChar - 1);
            currentChar--;
            setTimeout(deleteEffect, 50);
        } else {
            currentPhrase = (currentPhrase + 1) % phrases.length;
            setTimeout(typeEffect, 500);
        }
    }

    // Start the typing effect when the page loads
    window.onload = () => {
        typeEffect();
    };

