$(document).ready(function (e) {
  $(".filter_button").click(function () {
    var value = $(this).attr("data-filter");

    if (value == "all") {
      //$('.filter').removeClass('hidden');
      $(".filter").show("1000");
    } else {
      //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
      //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
      $(".filter")
        .not("." + value)
        .hide("3000");
      $(".filter")
        .filter("." + value)
        .show("3000");
    }
  });
});

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
