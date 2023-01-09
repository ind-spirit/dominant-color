function scroll_events() {
    let span = document.querySelectorAll(".name span");
    // console.log(span);
    if (window.scrollY >= 161) {
        if (!span[0].classList.contains("hide"))
            span.forEach((el) => {
                // console.log(el);
                el.classList.add("hide");
            });
    } else {
        if (span[0].classList.contains("hide"))
            span.forEach((el) => {
                // console.log(el);
                el.classList.remove("hide");
            });
    }

    // let menu = document.querySelector('.menu')
    // if (window.scrollY >= 1000) {
    //     if (menu.classList.contains('hide'))
    //     menu.classList.remove('hide')
    // } else {
    //     if (!menu.classList.contains('hide'))
    //     menu.classList.add('hide')
    // }
}

// window.onscroll = () => {
//     scroll_events();
// };
function fading(el){
    var increment = 0.008;
    var opacity = 0;
    var instance = window.setInterval(function() {
        el.style.opacity = opacity
        opacity = opacity + increment;
        if(opacity > 1){
            window.clearInterval(instance);
        }
    },1)
}

const rgbToHex = (r, g, b) =>
    "#" +
    [r, g, b]
        .map((x) => {
            const hex = x.toString(16);
            return hex.length === 1 ? "0" + hex : hex;
        })
        .join("");

window.onload = () => {
    const colorThief = new ColorThief();
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
        // if (img.complete) {
            if (true) {
            if (img.parentElement != document.body) {
            let rgb = colorThief.getColor(img);
            let color = rgbToHex(rgb[0], rgb[1], rgb[2]);
            img.parentElement.style.backgroundColor = color;
            fading(img);
            console.log("loaded")
            console.log(img.parentElement.style.backgroundColor)
            }
        } else {
            image.addEventListener("load", function () {
                colorThief.getColor(img);
                
            });
        }
    })
    // Make sure image is finished loading
    
};
