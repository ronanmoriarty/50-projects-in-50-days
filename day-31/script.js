const resultElement = document.getElementById('result');
const lengthElement = document.getElementById('length');
const uppercaseElement = document.getElementById('uppercase');
const lowercaseElement = document.getElementById('lowercase');
const numberElement = document.getElementById('numbers');
const symbolElement = document.getElementById('symbols');
const generateElement = document.getElementById('generate');
const clipboardElement = document.getElementById('clipboard');

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

generateElement.addEventListener('click', () => {
    const length = +lengthElement.value;
    const hasLower = lowercaseElement.checked;
    const hasUpper = uppercaseElement.checked;
    const hasNumber = numberElement.checked;
    const hasSymbol = symbolElement.checked;
    resultElement.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

clipboardElement.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = resultElement.innerText;
    console.log('clipboard clicked');
    console.log(`Password: '${password}'`);
    console.dir(resultElement);
    if(!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password copied to clipboard!');
});

function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = '';
    const typesCount = lower + upper + number + symbol;
    const typesArray = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
    if(typesCount === 0) {
        return '';
    }

    for(let i = 0; i < length; i+=typesCount) {
        typesArray.forEach(type => {
            const functionName = Object.keys(type)[0];
            generatedPassword += randomFunc[functionName]();
        });
    }

    return generatedPassword;
}

function getRandomLower() {
    return String.fromCharCode(97 + Math.floor(Math.random() * 26));
}

function getRandomUpper() {
    return String.fromCharCode(65 + Math.floor(Math.random() * 26));
}

function getRandomNumber() {
    return String.fromCharCode(48 + Math.floor(Math.random() * 10));
}

function getRandomSymbol() {
    const symbols = '!@£$%&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
}