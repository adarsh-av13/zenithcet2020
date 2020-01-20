var starter = document.getElementById("starter");

function loadHome() {
    var starter = document.getElementById("starter");
    var navbar = document.getElementById("mynav")
    var navRight = document.getElementById("navbarRight");
    starter.classList.add("starter-animate");
    navbar.classList.remove('hiddenav');
    navRight.classList.remove('hiddenav');

}

var navigatorsProperties = ['animationend', 'webkitAnimationEnd'];

window.onload = () => {
    var starter = document.getElementById("starter");
    var hiddens = document.querySelectorAll(".hidden");
    var navLeft = document.getElementById("navbarLeft");

    for (var i in navigatorsProperties) {
        starter.addEventListener(navigatorsProperties[i], function() {
            starter.classList.add('hidden');
            navLeft.classList.remove('hiddenav');
            hiddens.forEach((hidden) => hidden.classList.remove('hidden'));

        }, false);
    }
};


function debounce(func, wait = 0, immediate = true) {
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
    const f1car = document.getElementById("car");
    const start = document.getElementById("start");
    const startimg = document.getElementById("startimg");
    if (window.scrollY > (start.offsetTop - 50)) {
        f1car.className = "car start";
        startimg.className = "hidden";
    } else {
        f1car.className = "car";
        startimg.className = "startpos-car";
    }
    const bubbledivs = document.querySelectorAll('.bubblediv');
    bubbledivs.forEach(bubblediv => {
        //halfway
        const slideInAt = (window.scrollY + window.innerHeight) - 550;
        //bottom
        const imageBottom = bubblediv.offsetTop + 609;
        const isHalfShown = slideInAt > bubblediv.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;

        if (isHalfShown && isNotScrolledPast) {
            bubblediv.className = 'offset-1 col-9 bubblediv';
            bubblediv.querySelector('.bubble').className = 'bubble tri active'
        } else {
            bubblediv.className = 'offset-9 col-1 bubblediv';
            bubblediv.querySelector('.bubble').className = 'bubble tri'
        }
    });
}

window.addEventListener('scroll', debounce(checkSlide));