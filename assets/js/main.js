var starter = document.getElementById("starter");

function loadHome() {
    var starter = document.getElementById("starter");
    starter.classList.add("starterchng");
}

var navigatorsProperties = ['animationend', 'webkitAnimationEnd'];

window.onload = () => {
    var starter = document.getElementById("starter");
    var nav = document.getElementById("mynav");
    for (var i in navigatorsProperties) {
        starter.addEventListener(navigatorsProperties[i], function() {
            starter.classList.add('hidden');
            nav.classList.remove('hidden');
        }, false);
    }
};