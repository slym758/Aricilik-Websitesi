const hamburger = document.querySelector(".hamburger");
const responsiveMenu = document.querySelector(".responsive_menu");
const exit = document.querySelector(".exit");

hamburger.addEventListener("click", function () {
  responsiveMenu.classList.remove("hidden");
  hamburger.style.opacity = 0;
  exit.style.display = "block";
  btnLeft.style.display = "none";
  btnRight.style.display = "none";
});

exit.addEventListener("click", function () {
  responsiveMenu.classList.add("hidden");
  hamburger.style.opacity = 100;
  exit.style.display = "none";
});
