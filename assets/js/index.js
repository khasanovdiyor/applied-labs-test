const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,

  breakpoints: {
    720: {
      slidesPerView: 4,
    },

    420: {
      slidesPerView: 2,
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function toggle() {
  let mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenu.style.display === "block") {
    mobileMenu.style.display = "none";
  } else {
    mobileMenu.style.display = "block";
  }
}
