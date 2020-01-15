var starter = document.getElementById("starter");

function loadHome() {
    var starterText = document.getElementById("starter-text");
    starterText.classList.add('hidden');
    var starter = document.getElementById("starter");
    starter.classList.add("starterchng");
}

var navigatorsProperties = ['animationend', 'webkitAnimationEnd'];

window.onload = () => {
    var starter = document.getElementById("starter");
    var nav = document.getElementById("mynav");
    var navLeft = document.getElementById("leftn");
    var navRight = document.getElementById("rightn");
    for (var i in navigatorsProperties) {
        starter.addEventListener(navigatorsProperties[i], function() {
            starter.classList.add('hidden');
            nav.classList.remove('hidden');
            setTimeout(function() {
                navRight.classList.remove('hidden');
            }, 100);
        }, false);
    }
};