let up = document.getElementById('up');
window.onscroll = function() {

    if (window.scrollY >= 600) {
        up.style.display = 'block';
    } else {
        up.style.display = 'none';

    }
};

up.addEventListener('click', function() {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
    })
});

document.addEventListener('click', function(e) {
    let del = document.querySelector('.delete');
    if (e.target.className === del.className) {
        e.target.parentElement.classList.toggle('done');
        e.stopPropagation();
    } else {
        console.log('no target')

    };
});

function startNum() {
    let valueDisplays = document.querySelectorAll('.num');
    let interval = 5000;

    valueDisplays.forEach(valDis => {
        let starValue = 0;
        let endValue = parseInt(valDis.getAttribute('data-val'));
        let duration = Math.floor(interval / endValue);
        let counter = setInterval(function() {
            starValue += 1;
            valDis.textContent = starValue;
            if (starValue == endValue) {
                clearInterval(counter);
            }
        }, duration)
    })
};
setTimeout(() => {
    startNum();
});