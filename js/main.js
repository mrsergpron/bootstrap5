$(function () {
  $(".open-search").click(function (event) {
    event.preventDefault();
    $("#search").addClass("active");
  });

  $(".close-search").click(function (event) {
    event.preventDefault();
    $("#search").removeClass("active");
  });
});
