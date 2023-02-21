import Swiper from "swiper/bundle";

const swiper = new Swiper(".slider", {
  slidesPerView: 3,
  spaceBetween: 48,
  loop: true,
});



// slidesPerView: 3,
// spaceBetween: 48,
// autoplay: {
//   delay: 2500,
//   disableOnInteraction: false,
// },
// breakpoints: {
//   576: {
//     slidesPerView: 2,
//     spaceBetween: 30,
//   },
//   992: {
//     slidesPerView: 4,
//     spaceBetween: 30,
//   },
// },