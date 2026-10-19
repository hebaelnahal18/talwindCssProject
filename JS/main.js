const swiper = new Swiper(".providersSwiper", {
  slidesPerView: 1,
  spaceBetween: 12,
  loop: true,
  grabCursor: true,

  breakpoints: {
    400: {
      slidesPerView: 2,
    },

    640: {
      slidesPerView: 3,
    },

    768: {
      slidesPerView: 4,
    },

    1024: {
      slidesPerView: 5,
    },
  },
});
let langBtn = document.getElementById("langBtn");
let langMenu = document.getElementById("langMenu");

langBtn.addEventListener("click", () => {
    langMenu.classList.toggle("hidden");
});