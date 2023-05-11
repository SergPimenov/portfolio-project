const button = document.querySelector('.getPersonageButton');
const image = document.querySelector('.personagePicture');
const fullName = document.querySelector('.personageFullName');
const title = document.querySelector('.personageTitle');
const family = document.querySelector('.personageFamily');

button.addEventListener('click', getRandomPersonageImage, );

function getRandomPersonageImage() {
    let randomPersonageImage = ''
    let randomPersonageFulltName = ''
    let randomPersonageFamily = ''
    let randomPersonageTitle = ''
    const result = fetch('https://thronesapi.com/api/v2/Characters')
     .then(response => response.json())
     .then(json =>{
        const randomPersonageImageIndex =Math.floor(Math.random()* json.length);
        randomPersonageImage += json[randomPersonageImageIndex].imageUrl;
        randomPersonageFulltName += json[randomPersonageImageIndex].fullName;
        randomPersonageFamily += json[randomPersonageImageIndex].family;
        randomPersonageTitle += json[randomPersonageImageIndex].title;
        image.setAttribute('src', randomPersonageImage);
        fullName.innerHTML = randomPersonageFulltName;
        family.innerHTML = randomPersonageFamily;
        title.innerHTML = randomPersonageTitle;
     })
 } 

