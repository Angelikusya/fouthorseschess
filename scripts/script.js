console.log('код работает');

// animation without duplication the text

let el = document.getElementById('promo__running-text');
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




