// let menu = document.querySelector(".menu");
// let barbtn = document.querySelector(".menuIcon");
$(".menuIcon i").click(function () {
  $(".menu").addClass("active");
});
$(".close i").click(function () {
  $(".menu").removeClass("active");
});
