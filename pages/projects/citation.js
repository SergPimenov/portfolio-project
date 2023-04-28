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

const changeButton = document.querySelector('.change button');
changeButton.addEventListener('click', initRandomizer);

const nounArray = ['собака', 'карандаш', 'дом', 'лопата', 'птица', 'облако', 'дерево', 'калькулятор', 'программа', 'стол', 'телефон', 'ёжик', 'машина', 'диван', 'шкаф', 'портфель'];
const adjectivesArray = ['пушистая', 'красный', 'высокий', 'острая', 'мелкая', 'черное', 'большое', 'простой', 'быстрая', 'деревянный', 'мобильный', 'колючий', 'грузовая', 'мягкий', 'широкий', 'вместительный'];
const verbArray = ['гуляет', 'рисует', 'стоит', 'копает', 'парит', 'плывет', 'шумит', 'сломался', 'сработала', 'стоит', 'трещит', 'бежит', 'едет', 'лежит', 'висит', 'валяется'];

const nameArray = ['Иван', 'Кристофер', 'Дмитрий', 'Лионель', 'Питер', 'Олаф', 'Даниил', 'Кузьма', 'Павел', 'Сергей', 'Тарас', 'Ёзеф', 'Михаель', 'Денис', 'Шамиль', 'Пабло'];
const familiNameArray = ['Иванов', 'Кириенко', 'Дибров', 'Лемьер', 'Петров', 'Островский', 'Джойс', 'Киркоров', 'Перье', 'Стоун', 'Тарасов', 'Емельяненко', 'Михельсон', 'Дубов', 'Шахрияр', 'Папин'];

function getRandomNoun() {
    let randomNoun = ''
    for (let i = 0 ; i < 1 ; i++) {
     const randomNounIndex =Math.floor(Math.random()* nounArray.length);
     randomNoun += nounArray[randomNounIndex];
    }
    return `${randomNoun}`;
 }

 function getRandomAdjectives() {
    let randomAdjectives = ''
    for (let i = 0 ; i < 1 ; i++) {
     const randomAdjectivesIndex =Math.floor(Math.random()* adjectivesArray.length);
     randomAdjectives += adjectivesArray[randomAdjectivesIndex];
    }
    return `${randomAdjectives}`;
 }

 function getRandomVerb() {
    let randomVerb = ''
    for (let i = 0 ; i < 1 ; i++) {
     const randomVerbIndex =Math.floor(Math.random()* verbArray.length);
     randomVerb += verbArray[randomVerbIndex];
    }
    return `${randomVerb}`;
 } 

 function fillQuotesText() {
    const quotes = `${getRandomAdjectives()}  ${getRandomNoun()}  ${getRandomVerb()}`;
    document.querySelector('.randomQuotes').innerHTML = quotes;
}

function getRandomName() {
   let randomName = ''
   for (let i = 0 ; i < 1 ; i++) {
    const randomNameIndex =Math.floor(Math.random()* nameArray.length);
    randomName += nameArray[randomNameIndex];
   }
   return `${randomName}`;
}

function getRandomFamiliName() {
   let randomFamiliName = ''
   for (let i = 0 ; i < 1 ; i++) {
    const randomFamiliNameIndex =Math.floor(Math.random()* familiNameArray.length);
    randomFamiliName += familiNameArray[randomFamiliNameIndex];
   }
   return `${randomFamiliName}`;
} 

function fillAvtorText() {
   const avtor = `${getRandomName()}  ${getRandomFamiliName()}`;
   document.querySelector('.randomAvtor').innerHTML = avtor;
}

function initRandomizer() {
    const hex = getRandomHex();
    setColor(hex);
    fillQuotesText();
    fillAvtorText();
}

