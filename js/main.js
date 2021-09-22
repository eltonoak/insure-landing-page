let show = true;
const menu = document.querySelector(".menu");
const btnOpen = document.querySelector(".btn-open");
const btnClose = document.querySelector(".btn-close");
const expand = document.querySelector(".expand");

btnOpen.addEventListener('click', () => {
  btnOpen.classList.toggle("hide");
  btnClose.classList.toggle("hide");
  expand.classList.toggle("hide");
})
btnClose.addEventListener('click', () => {
  btnClose.classList.toggle("hide");
  btnOpen.classList.toggle("hide");
  expand.classList.toggle("hide");
})