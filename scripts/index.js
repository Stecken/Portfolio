var options = {
    strings: ['<strong>Web</strong>', 'de <strong>Embarcados</strong>', 'de <strong>Softwares Desktop</strong>'],
    typeSpeed: 40,
    smartBackspace: true,
    loop: true,
    showCursor: true,
    cursorChar: '|'
};

var typed = new Typed('#auto-texto', options);


const registraEventMouse = (elemRecebeEvent, queryAnim) => {
    let elem = window.document.querySelector(elemRecebeEvent);
    let elemAnim = window.document.querySelector(queryAnim);
    elem.addEventListener('mouseenter', () => {
        elemAnim.style.maxWidth = '100%';
        console.log('funcionou');
    })
    elem.addEventListener('mouseleave', () => {
        elemAnim.style.maxWidth = '0';
    })
}
