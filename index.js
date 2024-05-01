import { handleClock } from "./clock.js";

const showModalBtn = document.querySelector(".header__show-modal");
const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".modal__close");

showModalBtn.addEventListener("click", (event) => {
  modal.classList.add("modal_show");

  setTimeout(() => {
    modalCloseBtn.classList.add("modal__close_show");
  }, 5000);
});

modalCloseBtn.addEventListener("click", (event) => {
  modal.classList.remove("modal_show");
});

handleClock();

console.log("Start", new Date().toLocaleTimeString());

const arrayy = new Array(10000)
  .fill(null)
  .map((_, i) => ++i)
  .map((item) => item ** item)
  .map((item, _, array) => array.filter((item) => item % 5));
console.log(arrayy);

console.log("End", new Date().toLocaleTimeString());
