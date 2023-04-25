function setButtonBehavior(selector, event, callback) {
    const elem = document.querySelector(selector);
    elem.addEventListener(event, callback)
}

function setAlert() {
    alert('Обработка клика!')
}

setButtonBehavior('.mainPage', 'click', setAlert);
setButtonBehavior('.projects', 'click', setAlert);
setButtonBehavior('.contacts', 'click', setAlert);

