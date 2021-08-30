$(function () {
  $(".open-search").click(function (event) {
    event.preventDefault();
    $("#search").addClass("active");
  });

  $(".close-search").click(function (event) {
    event.preventDefault();
    $("#search").removeClass("active");
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $("#top").fadeIn();
    } else {
      $("#top").fadeOut();
    }
  });

  $("#top").click(function () {
    $("body, html").animate({ scrollTop: 0 }, 700);
  });

  $(".sidebar-toggler .btn").click(function () {
    $(".sidebar-toggle").slideToggle();
  });
});
