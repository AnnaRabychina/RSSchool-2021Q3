const progress = document.querySelectorAll('.progress')

progress.forEach(el => el.addEventListener('input', function () {
  const value = this.value

  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`
}));
 

const swiperVideo = new Swiper('.swiper-video', {
  direction: 'horizontal',
  slidesPerView: 1,
  loop: true,
  simulateTouch: true,
  touchAngle: 45,
  grabCursor: true,
  preloadAImages: false,
  pagination: {
    el: '.video-pagination',
    clickable: true,
  },
   navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
 
});




const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  slidesPerView: 3,
  spaceBetween : 50,
  loop: true,
  simulateTouch: true,
  touchAngle: 45,
  grabCursor: true,
  preloadAImages: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
   navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
   
    420: {
      slidesPerView: 2,
      spaceBetween: 10
    },
  
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    },
        
    1555: {
      slidesPerView: 3,
      spaceBetween : 50
    },
  }
  
});





