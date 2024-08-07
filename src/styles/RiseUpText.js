export const riseText = () => {
    const risetext = document.querySelector('.risetext');
    if (!risetext) {
        console.error('Element with class "risetext" not found.');
        return;
    }

    const enclose = document.querySelector('.page-header_title-main');
    if (!enclose) {
        console.error('Element with class "page-header_title-main" not found.');
        return;
    }

    const encloseText = Array.from(enclose.innerText.split(''));
    let string = encloseText
        .map((x) => {
            if (x === ' ') {
                return `<span class="letter">&nbsp;</span><span class="word">`;
            } else {
                return `<span class="letter">${x}</span>`;
            }
        })
        .join('');

    string = string.replace(
        '<span class="letter"> </span>',
        '<span class="letter">&nbsp;</span>'
    );
    
    enclose.innerHTML = `<span class="word">${string}</span>`;

    const letters = Array.from(document.querySelectorAll('.letter'));

    letters.forEach(function (letter, i) {
        const style = `transition-delay: ${50 * i}ms;`;
        letter.setAttribute('style', style);
    });

    // Only set up the class toggle for animation once
    if (!risetext.classList.contains('show')) {
        risetext.classList.add('show');
    }
};
