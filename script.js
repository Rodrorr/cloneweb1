const write = document.querySelector('.typewrite');

// navbar js
window.addEventListener('scroll', function() {
    let nav = document.querySelector('.nav');
    nav.classList.toggle('sticky', window.scrollY > 0);
  });




  // typejs


  document.addEventListener('DOMContentLoaded', function () {
    const phrases = [
        'A Developer',
        'A Web Designer',
        'I Love Design.',
        'I Love to Develop.'
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let currentPhrase = '';
    let typingSpeed = 100;

    function type() {
        if (charIndex < currentPhrase.length) {
            write.innerText += currentPhrase.charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(deleteText, 1000);
        }
    }

    function deleteText() {
        if (charIndex > 0) {
            write.innerText = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(deleteText, typingSpeed);
        } else {
            write.style.opacity = '0';

            phraseIndex = (phraseIndex + 1) % phrases.length;
            currentPhrase = phrases[phraseIndex];

            setTimeout(() => {
                write.innerText = '';
                write.style.opacity = '1';
                setTimeout(type, 500);
            }, 500);
        }
    }

    function startTyping() {
        currentPhrase = phrases[phraseIndex];
        write.style.opacity = '1';
        type();
    }

    startTyping();
});

