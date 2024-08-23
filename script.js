const $ = (e) => document.querySelector(e);
const $$ = (e) => document.querySelectorAll(e);

function smootScorlling() {
  gsap.registerPlugin(ScrollTrigger);
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}

smootScorlling();

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

// const src = gsap.timeline({
//     scrollTrigger:{
//         trigger:"#container-third",
//         scroller:"#main",
//         // markers:true,
//         start:"0% 0%",
//         end:"100% 0%",
//         pin:true,
//         scrub:1
//     }
// })
// src.to(".card-slide", {
//   top: "-100%",
// });

// $('.ser').addEventListener('mouseenter', e => {
//   $('.mega-menu').style.display = 'flex';
// })
// $('.ser').addEventListener('mouseleave', e => {
//   $('.mega-menu').style.display = 'none';
// })

// document.addEventListener("DOMContentLoaded", function () {
//   const menuItems = document.querySelectorAll(".ser");

//   menuItems.forEach(item => {
//     item.addEventListener("mouseenter", function () {
//       console.log('run');
//       const megaMenu = this.querySelector(".mega-menu");
//       if (megaMenu) {
//         megaMenu.style.display = "flex";
//       }
//     });

//     item.addEventListener("mouseleave", function () {
//       const megaMenu = this.querySelector(".mega-menu");
//       if (megaMenu) {
//         megaMenu.style.display = "none";
//       }
//     });
//   });
// });

$(".menu-icon").addEventListener("click", (e) => {
  $(".respo").style.right = "0%";
});
$(".close-icon").addEventListener("click", (e) => {
  $(".respo").style.right = "-100%";
});
