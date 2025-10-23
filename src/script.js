import Swiper from "swiper";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const swiper = new Swiper(".swiper", {
  modules: [Pagination],
  direction: "horizontal",
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 16,
  centeredSlides: false,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  /* 
  breakpoints: {
    768: {
      enabled: false,
    },
  }, */
});
