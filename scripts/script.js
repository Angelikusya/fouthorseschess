console.log('код работает');

// animation without duplication the text
let el = document.getElementById('running-line__text');
let text = el.getAttribute('data-text');
let span = el.querySelector('span');

let index = 0;

setInterval(function() {
    index = (index + 1) % text.length;
    span.textContent = text.substring(index) + text.substring(0, index);
    if (index === 0) {
        text = span.textContent;
    }
}, 250);

// link from button to section about
document.querySelector('.promo__button-black').addEventListener('click', function() {
    console.log('код работает');
    window.location.href = '#about';
});

// link from button to section stages
document.querySelector('.promo__button-transparent').addEventListener('click', function() {
    console.log('код работает');
    window.location.href = '#stages';
});

// switcher
