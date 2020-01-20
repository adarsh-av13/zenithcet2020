var starter = document.getElementById("starter");

function loadHome() {
    var starterText = document.getElementById("starter-text");
    starterText.classList.add('hidden');
    var starter = document.getElementById("starter");
    var navRight = document.getElementById("rightn");
    starter.classList.add("starterchng");
    navRight.classList.remove('hiddenav');

}

var navigatorsProperties = ['animationend', 'webkitAnimationEnd'];

window.onload = () => {
    var starter = document.getElementById("starter");
    var hiddens = document.querySelectorAll(".hidden");
    var navLeft = document.getElementById("leftn");


    for (var i in navigatorsProperties) {
        starter.addEventListener(navigatorsProperties[i], function() {
            starter.classList.add('hidden');
            navLeft.classList.remove('hiddenav');
            hiddens.forEach((hidden) => hidden.classList.remove('hidden'));

        }, false);
    }
};



function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}


function checkSlide(e) {
    const f1car = document.getElementById("f1car");
    if (window.scrollY > 700)
        f1car.className = "f1car start";
    else
        f1car.className = "f1car";
    const sliderImages = document.querySelectorAll('.bubble');
    sliderImages.forEach(slideImage => {
        //halfway
        const slideInAt = (window.scrollY + window.innerHeight) - 500;
        //bottom
        const imageBottom = slideImage.offsetTop + 609;
        const isHalfShown = slideInAt > slideImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;

        if (isHalfShown && isNotScrolledPast) {
            slideImage.classList.add('active');
        } else {
            slideImage.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', debounce(checkSlide));