var swiper = new Swiper(".testimonial", {
  slidesPerView: 3,
  spaceBetween: 30,
  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    425: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
  
});
// let main_menu = document.querySelector('.main-nav-menu');
// document.querySelector('#bars').onclick = () => {
//   main_menu.classList.toggle('active');
// }
// js for tabs
// function change_tab_color_1() {
//   document.getElementById("tab-1").style.backgroundColor="#ff8b38";

// }

// function change_tab_color_2() {
//   document.getElementById("tab-2").style.backgroundColor="#ff8b38";

// }

// function change_tab_color_3() {
//   document.getElementById("tab-3").style.backgroundColor="#ff8b38";

// }