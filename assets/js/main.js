var starter = document.getElementById("starter");

function loadHome() {
    var starter = document.getElementById("starter");
    var navbar = document.getElementById("mynav");
    var starterTexts = document.querySelectorAll(".starter-text");
    starterTexts.forEach(starter => starter.classList.add('hidden'));
    starter.classList.add("starter-animate");
    // starter.classList.remove("starter-flex");
    navbar.classList.add('nav-block');
    navbar.classList.remove('hiddenav');

}

var navigatorsProperties = ['animationend', 'webkitAnimationEnd'];

window.onload = () => {
    var starter = document.getElementById("starter");
    var hiddens = document.querySelectorAll(".hidden");

    for (var i in navigatorsProperties) {
        starter.addEventListener(navigatorsProperties[i], function() {
            hiddens.forEach((hidden) => hidden.classList.remove('hidden'));
            starter.classList.add('hidden');
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
    if (window.scrollY > (start.offsetTop - 25)) {
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
        const isHalfShown = slideInAt > bubblediv.offsetTop - 100;
        const isNotScrolledPast = window.scrollY < imageBottom;

        if (isHalfShown && isNotScrolledPast) {
            bubblediv.className = 'offset-md-1 col-md-9 col-sm-12 active bubblediv';
        }    
        // } else {
        //     bubblediv.className = 'offset-md-1 col-md-9 col-sm-12 bubblediv';
        // }
    });
}

window.addEventListener('scroll', debounce(checkSlide));