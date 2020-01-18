var starter = document.getElementById("starter");

function loadHome() {
    var starterText = document.getElementById("starter-text");
    starterText.classList.add('hidden');
    var starter = document.getElementById("starter");
    var navRight = document.getElementById("rightn");
    starter.classList.add("starterchng");
    navRight.classList.remove('hidden');

}

var navigatorsProperties = ['animationend', 'webkitAnimationEnd'];

window.onload = () => {
    var starter = document.getElementById("starter");
    var hiddens = document.querySelectorAll(".hidden");
    var nav = document.getElementById("mynav");
    var road = document.getElementById("road");
    var navLeft = document.getElementById("leftn");
    for (var i in navigatorsProperties) {
        starter.addEventListener(navigatorsProperties[i], function() {
            starter.classList.add('hidden');
            hiddens.forEach((hidden) => hidden.classList.remove('hidden'));

        }, false);
    }
};