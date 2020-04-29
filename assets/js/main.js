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
var links = [
  "index.html",
  "index.html#about",
  "gallery.html",
  "events.html",
  "team.html",
  "#myfooter",
];

function loadHome() {
  let starter = document.getElementById("starter");
  let content = document.getElementById("content");
  starter.classList.add("starter-animate");
  content.classList.remove("hidden");
}

window.onload = () => {
  let starter = document.getElementById("starter");
  let content = document.getElementById("content");
  let navlinks = Array.from(document.getElementsByClassName("nav-link"));
  let mynav = document.getElementById("mynav");
  for (let i = 0; i < navlinks.length; ++i) {
    navlinks[i].addEventListener("click", (nav) => {
      event.preventDefault();
      if (mynav.classList !== "mynav") mynav.classList.remove("active");
      location.replace(links[i]);
    });
  }
  let members = document.querySelectorAll(".memberbox");
  let memberdees = document.querySelectorAll(".memberdeets");
  console.log(members);
  members.forEach((member) => {
    member.addEventListener("mouseover", () => {
      memberdees.forEach((mem) => {
        mem.classList.remove("current");
      });
      member.nextSibling.nextSibling.classList.add("current");
    });
  });
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

// document.onreadystatechange = function () {
//   if (document.readyState !== "complete") {
//     document.querySelector("body").style.visibility = "hidden";
//     document.querySelector("#loader").style.visibility = "visible";
//   } else {
//     document.querySelector("#loader").style.display = "none";
//     document.querySelector("body").style.visibility = "visible";
//   }
// };

function scroller() {
  let backtotop = document.getElementById("back-to-top");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
    backtotop.classList.remove("hidden");
  else backtotop.classList.add("hidden");
}
