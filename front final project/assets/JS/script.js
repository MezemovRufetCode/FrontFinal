$(document).ready(function () {
  // open close menu side
  $(".menuIcon i").click(function () {
    $(".menu").addClass("active");
  });
  $(".close i").click(function () {
    $(".menu").removeClass("active");
  });

  //dropdown slide
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

  //dropdown icon rotate
  $(".menu-links .sub").hide();
  $(".mlist").click(function () {
    $(this).find(".rightIcn").toggleClass("ndeg udeg");
    $(this).next(".sub").slideToggle(200);
  });

  // parallax
  $(".parallax-window").parallax({
    imageSrc: "./assets/images/h3-background-img.jpg",
  });

  //owl carousel Entrance
  $("#entrance .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    dots: true,
    nav: true,

    autoplay: true,
    autoplaySpeed: 1000,
    smartSpeed: 1500,

    responsive: {
      0: {
        items: 1,
      },
    },
  });

  //owl Carousel blogpost
  $("#reviews .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    nav: true,
    autoplay: true,
    autoplaySpeed: 1000,
    smartSpeed: 1500,

    responsive: {
      0: {
        items: 1,
      },
    },
  });
});
