$(window).on("load", function () {
  let slideIndex = $(".slide.active").index();
  const slideLen = $(".slide").length;

  const slideMostrar = () => {
    $(".slide").removeClass("active").eq(slideIndex).addClass("active");
    console.log(slideIndex);
    if (slideIndex === slideLen - 1) {
      slideIndex = 0;
    } else {
      slideIndex++;
    }
    setTimeout(slideMostrar, 5000);
  };
  slideMostrar();
});

