const $jq = jQuery.noConflict();

$jq(document).ready(function () {
  $jq(".header__slider").slick({
    infinite: true,
  });
});
$(function () {
  $(".header__slider").slick({
    infinite: true,

    // dots: true,
    infinite: true,
    // speed: 500,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 5000,
  });
});
