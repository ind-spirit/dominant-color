function scroll_events() {
    let span = document.querySelectorAll('.name span')
    console.log(span);
    if (window.scrollY >= 161) {
        if (!span[0].classList.contains('hide'))
        span.forEach( (el) => {
            console.log(el);
            el.classList.add('hide')
        });
    } else {
        if (span[0].classList.contains('hide'))
        span.forEach( (el) => {
            console.log(el);
            el.classList.remove('hide')
        });
    }

    let menu = document.querySelector('.menu')
    if (window.scrollY >= 1000) {
        if (menu.classList.contains('hide'))
        menu.classList.remove('hide')
    } else {
        if (!menu.classList.contains('hide'))
        menu.classList.add('hide')
    }
}



window.onscroll = ()  => {
    scroll_events();



}