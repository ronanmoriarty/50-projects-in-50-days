const smallCups = document.querySelectorAll('.cup-small');
const litres = document.getElementById('litres');
const percentage = document.getElementById('percentage');
const remaining = document.getElementById('remaining');
smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => {
        highlightCups(idx);
    });
});

updateBigCup();

function highlightCups(idx) {
    if(smallCups[idx].classList.contains('full')
        && (idx === smallCups.length - 1 || !smallCups[idx].nextElementSibling.classList.contains('full'))) {
        idx--;
    }

    smallCups.forEach((smallCup, idx2) => {
        if(idx2 <= idx) {
            smallCup.classList.add('full');
        } else {
            smallCup.classList.remove('full');
        };
    });

    updateBigCup();
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    const totalCups = smallCups.length;
    if(fullCups === 0) {
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = 'visible';
        percentage.style.height = `${(fullCups * 330 / totalCups)}px`;
        percentage.innerText = `${(fullCups * 100 / totalCups)}%`;
    }

    if(fullCups === totalCups) {
        remaining.style.visibility = 'hidden';
        remaining.style.height = 0;
    } else {
        remaining.style.visibility = 'visible';
        litres.innerText = `${2 - (fullCups * 0.25)}L`;
    }
}