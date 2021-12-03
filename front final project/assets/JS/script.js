// let menu = document.querySelector(".menu");
// let barbtn = document.querySelector(".menuIcon");
$(".menuIcon i").click(function () {
  $(".menu").addClass("active");
});
$(".close i").click(function () {
  $(".menu").removeClass("active");
});

$(function () {
  $(".nav-links ul li").hover(
    function () {
      $(">ul.sub:not(:animated)", this).slideDown(500);
    },
    function () {
      $(">ul.sub", this).slideUp(300);
    }
  );
});
