$(document).ready(function () {
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
        $(">ul.sub", this).slideUp(150);
      }
    );
  });

  $(".menu-links .sub").hide();
  $(".mlist").click(function () {
    $(this).find(".rightIcn").toggleClass("ndeg udeg");
    // let next = $(this).next();
    // $(".answer").not(next).slideUp();
    $(this).next(".sub").slideToggle(200);
  });
});
