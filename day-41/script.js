const codes = document.querySelectorAll('.code');
codes[0].focus();
codes.forEach((code, index) => {
    code.addEventListener('keydown', (event) => {
        if(event.key >= 0 && event.key <=9) {
            if(index < codes.length - 1) {
                codes[index].value = '';
                setTimeout(() => {
                    codes[index + 1].focus();
                }, 10);
            }
        } else if (event.key === 'Backspace') {
            if(index > 0) {
                setTimeout(() => {
                    codes[index - 1].focus();
                }, 10);
            }
        }
    });
});