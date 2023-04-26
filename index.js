// const pages = document.querySelectorAll('.menu div');

function setButtonBehavior(selector, event, callback) {
    const elem = document.querySelector(selector);
    elem.addEventListener(event, () => callback(selector));
}

function setRedirect(selector) {
    document.location = selector == '.mainPage' ?
    '/' : `pages/${selector.replace(/\.|#/g, '')}.html`;
}
    
setButtonBehavior('.mainPage', 'click', setRedirect);
setButtonBehavior('.projects', 'click', setRedirect);
setButtonBehavior('.contacts', 'click', setRedirect);

