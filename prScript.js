"use strict";
const btnToggle = document.querySelector("#btnToggle");
//const nav1 = document.querySelector(".nav1");
// const topMenu = document.querySelector(".topMenu");
const nav2 = document.querySelector(".nav2Top");

// function to toggle the button in the navigation bar for mobile phones
function btnToggler() {
  const btnimgs1 = "promineImgs/menuIcon.png";
  const btnimgs2 = "promineImgs/closeIcon.png";
  let btnToggleImg = document.querySelector("#btnToggle img");
  if (
    nav2.classList.contains("hidden") &&
    btnToggleImg.src.includes(btnimgs1)
  ) {
    nav2.classList.remove("hidden") && nav2.classList.add("nav2");
    btnToggleImg.src = btnimgs2;
  } else if (
    !nav2.classList.contains("hidden") &&
    btnToggleImg.src.includes(btnimgs2)
  ) {
    nav2.classList.add("hidden");
    btnToggleImg.src = btnimgs1;
  }
}

// Event Listner to toggle top navigation for mobile phones
btnToggle.addEventListener("click", btnToggler);

// carousel background change
const carousel = document.querySelector("#carousel");
const arrimg = [
  "promineImgs/oilandgas5.jpg",
  "promineImgs/oilLogistics2.jpg",
  "promineImgs/truck7.jpg",
  "promineImgs/oilandgas3.jpg",
];

function changebg() {
  const randnum = Math.floor(Math.random() * arrimg.length);
  const randimg = arrimg[randnum];
  carousel.style.backgroundImage = `url(${randimg})`;
}
setInterval(changebg, 4000);
// connectinf the footer link to whatsapp
document
  .getElementById("whatsapp-link")
  .addEventListener("click", function (e) {
    e.preventDefault();
    if (/Mobile/i.test(navigator.userAgent)) {
      window.location = this.href;
    } else {
      window.location.href = "http//:www.ovuacomp.com";
    }
  });
