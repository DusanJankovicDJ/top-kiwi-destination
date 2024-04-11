// #Script - Make sticky header

window.onscroll = function () { addShadow() };

let header = document.getElementsByTagName("header");

// Get the offset position of the navbar
let sticky = header[0].offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function addShadow() {
    if (window.pageYOffset > sticky) {
        header[0].classList.add("sticky");
    } else {
        header[0].classList.remove("sticky");
    }
}

// #Script - Make mobile menu visible/unvisible
let closeIcon = document.getElementsByClassName('mi-clear')
let mobMenu = document.getElementsByClassName('small-screen-menu')

function Toggle() {
    if (mobMenu[0].style.top === "-300px") {
        mobMenu[0].style.top = "0px";
        mobMenu[0].style.opacity = "1";
    } else {
        mobMenu[0].style.top = "-300px";
        mobMenu[0].style.opacity = "0";
    }
}