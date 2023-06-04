import { Fireworks } from 'fireworks-js';

export  function startFireworcks() {
    const mainBlock = document.querySelector('.main');
    const fireworks = new Fireworks(mainBlock, {
        acceleration: 1,
        gravity: 0.7,
        traceSpeed: 4,
        opasity: 0.3,
        rocketsPoint: {
            min: 10,
            max: 70
        },
        mouse: {
            click: false,
            move: false,
            max: 1
        }
    });
    fireworks.start();
}
