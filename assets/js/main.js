function navRes() {
  let nav = document.getElementById("mynav");
  if (nav.className == "mynav") nav.className += " active";
  else nav.className = "mynav";
}

function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

var navigatorsProperties = ["animationend", "webkitAnimationEnd"];

function loadHome() {
  let starter = document.getElementById("starter");
  let content = document.getElementById("content");
  starter.classList.add("starter-animate");
  content.classList.remove("hidden");
}

window.onload = () => {
  let starter = document.getElementById("starter");
  let content = document.getElementById("content");
  if (sessionStorage.getItem("wasVisited")) {
    starter.classList.add("hidden");
    content.classList.remove("hidden");
  }
  for (var i in navigatorsProperties) {
    starter.addEventListener(
      navigatorsProperties[i],
      function (e) {
        if (e.animationName == "fade-out") {
          starter.classList.add("hidden");
          sessionStorage.setItem("wasVisited", 1);
        }
      },
      false
    );
  }
};
