function openModal(e) {
  console.log(e.target.parentElement);
  let image = e.target;
  if (e.target != "div") image = e.target.parentElement;
  let modal = document.getElementById("modal");
  let mImage = modal.children[0];
  let mH2 = modal.children[1];
  let mP = modal.children[2];
  let bImage = image.children[0];
  let bH2 = image.children[1];
  let bP = image.children[2];
  console.log(bH2);
  mImage.src = bImage.src;
  mH2.innerHTML = bH2.innerHTML;
  mP.innerHTML = bP.innerHTML;
  modal.classList.add("block-dis");
  document.body.classList.add("modal-open");
}

function closeModal() {
  let modal = document.getElementById("modal");
  console.log("asd");
  console.log(modal.classList);
  modal.classList.remove("block-dis");
  document.body.classList.remove("modal-open");
}

window.onload = () => {
  let images = document.querySelectorAll(".img-box");
  console.log(images);
  images.forEach((image) => {
    image.addEventListener("click", openModal);
  });
};
