const hexCodeArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

function getRandomHex() {
   let hexCode = ''
   
   for (let i = 0 ; i < 6 ; i++) {
    const randomHexIndex =Math.floor(Math.random()* hexCodeArray.length);
    hexCode += hexCodeArray[randomHexIndex];
   }

   return `#${hexCode}`;
}

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
