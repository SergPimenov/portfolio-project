const { getRandomHex } = require('./utils/getRandomHex');

function setColor(hex) {
    document.querySelector('.container').style.background =hex;
}

function fillHexText(hex) {
    document.querySelector('.hexCode').innerHTML = hex;
}

function initRandomizer() {
    const hex = getRandomHex();
    setColor(hex);
    fillHexText(hex);
}

const changeButton = document.querySelector('.change button');
changeButton.addEventListener('click', initRandomizer);
