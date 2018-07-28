var nav = document.getElementById("top-nav");
var logo_img = document.getElementById("logo-img");

var logo = logo_img.style;
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        nav.classList.add("show-color");
        logo_img.style.height = "60px";
    }

    else {
        nav.classList.remove("show-color");
        nav.style.transition = ".5s";
        logo.height = "100px";
        logo.transition = ".5s";
    }

}
