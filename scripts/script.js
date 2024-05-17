console.log('код работает');

// animation without duplication the text
document.addEventListener('DOMContentLoaded', function() {
    let elements = document.querySelectorAll('.running-line__text');

    elements.forEach(function(el) {
        let text = el.getAttribute('data-text');
        let span = el.querySelector('span');
        
        if (span) { // Проверка на существование span
            let index = 0;
            
            setInterval(function() {
                index = (index + 1) % text.length;
                span.textContent = text.substring(index) + text.substring(0, index);
                if (index === 0) {
                    text = span.textContent;
                }
            }, 250);
        }
    });
});




// link from button to section about
document.querySelector('.promo__button-black').addEventListener('click', function() {
    window.location.href = '#about';
});

// link from button to section stages
document.querySelector('.promo__button-transparent').addEventListener('click', function() {
    window.location.href = '#stages';
});


//switcher stages
document.addEventListener('DOMContentLoaded', function() {
    const steps = document.querySelectorAll('.stages__step');
    const buttonRight = document.querySelector('.stages__button-right');
    const buttonLeft = document.querySelector('.stages__button-left');

    let currentStep = 1;

    buttonRight.addEventListener('click', function() {
        if (currentStep === 1) {
            steps.forEach(step => {
                if (step.id === 'stages-1') {
                    step.classList.add('stages__step_disabled');
                    buttonLeft.classList.remove('disabled');
                }
                if (step.id === 'stages-2') {
                    step.classList.remove('stages__step_disabled');
                }
            });
        } else if (currentStep === 2) {
            steps.forEach(step => {
                if (step.id === 'stages-3') {
                    step.classList.remove('stages__step_disabled');
                }
                if (step.id === 'stages-2') {
                    step.classList.add('stages__step_disabled');
                }
            });
        } else if (currentStep === 3) {
            steps.forEach(step => {
                if (step.id === 'stages-4') {
                    step.classList.remove('stages__step_disabled');
                }
                if (step.id === 'stages-3') {
                    step.classList.add('stages__step_disabled');
                }
            });
        } else if (currentStep === 4) {
            steps.forEach(step => {
                if (step.id === 'stages-5') {
                    step.classList.remove('stages__step_disabled');
                    buttonRight.classList.add('disabled');
                }
                if (step.id === 'stages-4') {
                    step.classList.add('stages__step_disabled');
                }
            });
        }
        currentStep++;
    });

    buttonLeft.addEventListener('click', function() {
        if (currentStep === 2) {
            steps.forEach(step => {
                if (step.id === 'stages-2') {
                    step.classList.add('stages__step_disabled');
                    buttonLeft.classList.add('disabled');
                }
                if (step.id === 'stages-1') {
                    step.classList.remove('stages__step_disabled');
                }
            });
         } else if (currentStep === 3) {
            steps.forEach(step => {
                if (step.id === 'stages-3') {
                    step.classList.add('stages__step_disabled');
                }
                if (step.id === 'stages-2') {
                    step.classList.remove('stages__step_disabled');
                }
            });
        } else if (currentStep === 4) {
            steps.forEach(step => {
                if (step.id === 'stages-4') {
                    step.classList.add('stages__step_disabled');
                }
                if (step.id === 'stages-3') {
                    step.classList.remove('stages__step_disabled');
                }
            });
        } else if (currentStep === 5) {
            steps.forEach(step => {
                if (step.id === 'stages-5') {
                    step.classList.add('stages__step_disabled');
                    buttonRight.classList.remove('disabled');
                }
                if (step.id === 'stages-4') {
                    step.classList.remove('stages__step_disabled');
                }
            });
        }

        currentStep--;
    });
});


//switcher about counter 
document.addEventListener('DOMContentLoaded', function() {
    const steps = document.querySelectorAll('.stages__step');
    const counters = document.querySelectorAll('.stages__counter');
    const buttonRight = document.querySelector('.stages__button-right');
    const buttonLeft = document.querySelector('.stages__button-left');

    let currentStep = 0;

    buttonRight.addEventListener('click', function() {
        if (currentStep < steps.length - 1) {
            steps[currentStep].classList.remove('stages__step_active');
            counters[currentStep].classList.remove('stages__counter_active');
            currentStep++;
            steps[currentStep].classList.add('stages__step_active');
            counters[currentStep].classList.add('stages__counter_active');
        }
    });

    buttonLeft.addEventListener('click', function() {
        if (currentStep > 0) {
            steps[currentStep].classList.remove('stages__step_active');
            counters[currentStep].classList.remove('stages__counter_active');
            currentStep--;
            steps[currentStep].classList.add('stages__step_active');
            counters[currentStep].classList.add('stages__counter_active');
        }
    });
});

//switcher participants MOBILE
document.addEventListener('DOMContentLoaded', function() {
    
    var mediaQuery = window.matchMedia('(max-width: 1365px)');

    if (mediaQuery.matches) {
        var participants = document.querySelectorAll('.participants__card');
        var counter = document.querySelectorAll('.participants__counter_bottom');
        var currentParticipantIndex = 0;
        var participantsToDisable = document.querySelectorAll('#participant-2, #participant-3, #participant-4, #participant-5, #participant-6');

        function switchParticipants(direction) {
            participants[currentParticipantIndex].classList.add('disabled');

            if (direction === 'left') {
                currentParticipantIndex = (currentParticipantIndex - 1 + participants.length) % participants.length;
            } else {
                currentParticipantIndex = (currentParticipantIndex + 1) % participants.length;
            }

            participants[currentParticipantIndex].classList.remove('disabled');
            counter[0].textContent = currentParticipantIndex + 1; // update counter
        }

        document.querySelector('.participants__button-left_bottom').addEventListener('click', function() {
            switchParticipants('left');
        });

        document.querySelector('.participants__button-right_bottom').addEventListener('click', function() {
            switchParticipants('right');
        });

        function startAutoSwitch() {
            setTimeout(function() {
                switchParticipants('right');
                startAutoSwitch(); // repeat automatically 
            }, 4000); // repeat every 4 sec
        }

        startAutoSwitch(); // automatic scroll if  the screen  width is <= 1366px

        participantsToDisable.forEach(function(participant) {
            participant.classList.add('disabled');
        });
    }
});



document.addEventListener('DOMContentLoaded', function() {
    var mediaQuery = window.matchMedia('(min-width: 1366px)');

    if (mediaQuery.matches) {
        const cards = document.querySelectorAll('.participants__card');
        const buttonRight = document.querySelector('.participants__button-right');
        const buttonLeft = document.querySelector('.participants__button-left');
        const counterDark = document.querySelector('.participants__counter_dark');
        let currentCardIndex = 3;

        // show 3 cards
        function showCards() {
            cards.forEach((card, index) => {
                if (index >= currentCardIndex && index <= currentCardIndex + 2) {
                    card.classList.remove('disabled');
                } else {
                    card.classList.add('disabled');
                }
            });
        }

        // right switch
        buttonRight.addEventListener('click', function() {
            currentCardIndex = (currentCardIndex + 3) % cards.length;
            showCards();
            counterDark.textContent = currentCardIndex + 3;
        });

        // left switch
        buttonLeft.addEventListener('click', function() {
            currentCardIndex = (currentCardIndex - 3 + cards.length) % cards.length;
            showCards();
            counterDark.textContent = currentCardIndex + 1;
        });

        // automatic scroll every 4 secs
        function animateCards() {
            buttonRight.click();
            setTimeout(animateCards, 4000); 
        }

        animateCards(); 

        showCards(); 
    }
});
