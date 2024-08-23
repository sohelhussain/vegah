const $ = (e) => document.querySelector(e);
const $$ = (e) => document.querySelectorAll(e);


const swiperHome = (e) => {
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};
swiperHome();

$(".menu-icon").addEventListener("click", (e) => {
  $(".respo").style.right = "0%";
});
$(".close-icon").addEventListener("click", (e) => {
  $(".respo").style.right = "-100%";
});
