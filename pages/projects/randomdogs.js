const button = document.querySelector('.getDogButton');
const image = document.querySelector('.dogPicture');
button.addEventListener('click', getRandomDogImage);

function getRandomDogImage() {
    const result = fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => {
        image.setAttribute('src', json.message);
    });
}

getRandomDogImage();

