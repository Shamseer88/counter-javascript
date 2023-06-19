let count = 0;
const value = document.querySelector('.value');
const buttons = document.querySelectorAll('.btn');


buttons.forEach(function(btn) {
    btn.addEventListener('click', function(event) {
        var styles = event.target.classList;
        if (styles.contains('decrease')) {
            count --;
        }
        if (styles.contains('increase')) {
            count ++;
        }
        if (styles.contains('reset')) {
            count = 0;
        }

        value.textContent = count;
    })
})