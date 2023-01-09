// function scroll_events() {
//     let span = document.querySelectorAll(".name span");
//     // console.log(span);
//     if (window.scrollY >= 161) {
//         if (!span[0].classList.contains("hide"))
//             span.forEach((el) => {
//                 // console.log(el);
//                 el.classList.add("hide");
//             });
//     } else {
//         if (span[0].classList.contains("hide"))
//             span.forEach((el) => {
//                 // console.log(el);
//                 el.classList.remove("hide");
//             });
//     }
// }

// window.onscroll = () => {
//     scroll_events();
// };
function fading(el) {
    var increment = 0.008;
    var opacity = 0;
    var instance = window.setInterval(function () {
        el.style.opacity = opacity;
        opacity = opacity + increment;
        if (opacity > 1) {
            window.clearInterval(instance);
        }
    }, 1);
}

const rgbToHex = (r, g, b) =>
    "#" +
    [r, g, b]
        .map((x) => {
            const hex = x.toString(16);
            return hex.length === 1 ? "0" + hex : hex;
        })
        .join("");

var images = [];

function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
        console.log("loaded");
        console.log(images[i].complete && images[i].naturalHeight !== 0);
    }
}

function loadCheck() {
    var images = document.querySelectorAll("img");
    images.forEach((image) => {
        var isLoaded = image.complete && image.naturalHeight !== 0;
        console.log(isLoaded);
    });
}

window.onload = () => {
    //-- usage --//
    preload(
        "/images/6.jpg",
        "/images/1.jpg",
        "/images/3.jpg",
        "/images/4.jpg",
        "/images/5.jpg",
        "/images/2.jpg"
    );
    loadCheck();

    const colorThief = new ColorThief();
    const images = document.querySelectorAll("img");
    // images.forEach((img) => {
    //     if (img.complete) {
    //         if (img.parentElement != document.body) {
    //             let rgb = colorThief.getColor(img);
    //             let color = rgbToHex(rgb[0], rgb[1], rgb[2]);
    //             img.parentElement.style.backgroundColor = color;
    //             fading(img);
    //             console.log("loaded");
    //             console.log(img.parentElement.style.backgroundColor);
    //         }
    //     } else {
    //         image.addEventListener("load", function () {
    //             colorThief.getColor(img);
    //         });
    //     }
    // });
    // images.forEach((img) => {
    //     if (img.parentElement != document.body) {
    //         let rgb = colorThief.getColor(img);
    //         let color = rgbToHex(rgb[0], rgb[1], rgb[2]);
    //         img.parentElement.style.backgroundColor = color;
    //         // fading(img);
    //         console.log("loaded");
    //         console.log(img.parentElement.style.backgroundColor);
    //     }
    // });
};
