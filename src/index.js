import { startFireworcks } from "./modules/fireworks"; 

function setButtonBehavior(selector, event, callback) {
    const elem = document.querySelector(selector);
    elem.addEventListener(event, () => callback(selector));
}

function setRedirect(selector) {
    document.location = selector == '.mainPage' ?
    '/dist/index.html' : `/pages/${selector.replace(/\.|#/g, '')}.html`;
}

try{
startFireworcks();
} catch {}
    
setButtonBehavior('.mainPage', 'click', setRedirect);
setButtonBehavior('.projects', 'click', setRedirect);
setButtonBehavior('.contacts', 'click', setRedirect);

