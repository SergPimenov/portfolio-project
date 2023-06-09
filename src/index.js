import '../node_modules/animate.css/animate.min.css';

import { startFireworcks } from "./modules/fireworks"; 

function setButtonBehavior(selector, event, callback) {
    const elem = document.querySelector(selector);
    elem.addEventListener(event, () => callback(selector));
}

function setRedirect(selector) {
    document.location = selector == '.mainPage' ?
    '/dist/index.html' : `/src/pages/${selector.replace(/\.|#/g, '')}.html`;
}

function setSocialRedirect(selector) {
    let link;
    switch (selector) {
        case '.telegramIcon':
            link = 'https://t.me/agventol';
            break;
        case '.vkIcon':
            link = 'https://vk.com';
            break;
        case '.githubIcon':
            link = 'https://github.com/SergPimenov';
            break;
    }
    window.open(link, '_blank');
}

try {
startFireworcks();
} catch {}
    
setButtonBehavior('.mainPage', 'click', setRedirect);
setButtonBehavior('.projects', 'click', setRedirect);
setButtonBehavior('.contacts', 'click', setRedirect);
setButtonBehavior('.telegramIcon', 'click', setSocialRedirect);
setButtonBehavior('.vkIcon', 'click', setSocialRedirect);
setButtonBehavior('.githubIcon', 'click', setSocialRedirect);
