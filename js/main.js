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

let cont = 0;

const words = document.querySelectorAll(".palabraCambia");
let index = 0;

const cambiarPalabra = () => {
  words.forEach((word, i) => {
      word.classList.toggle('active', i === index);
  });
  index = (index + 1) % words.length;
};

setInterval(cambiarPalabra,2000);

cambiarPalabra()

console.log(words)

document.getElementById('reproducir').addEventListener('click', function() {
  const video = document.querySelector(".video")
  video.setAttribute("controls","")
  video.play()
});


