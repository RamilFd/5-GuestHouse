const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 2.3,
        spaceBetween: 20,
      },
    },
  });

let btn_burger = document.querySelector('.menu__burger');
let menu_inner = document.querySelector('.menu__inner');
  
btn_burger.addEventListener('click', function() {
  menu_inner.classList.toggle('menu__inner--active')
  btn_burger.classList.toggle('menu__burger--active')
})



let body = document.querySelector('.body');
let modal = document.querySelector('.modal-fade');
let btns_order = document.querySelectorAll('#order');

for (let btn_order of btns_order) {
  btn_order.addEventListener('click', function() {
    modal.classList.add('modal-fade--active');
    body.classList.add('body__modal');
  })
}


let btn_modalClose = document.querySelector('.model-card__btn');
btn_modalClose.addEventListener('click', function() {
  modal.classList.remove('modal-fade--active');
  body.classList.remove('body__modal');
})

modal.addEventListener('click', function() {
  modal.classList.remove('modal-fade--active');
  body.classList.remove('body__modal');
})

let modal_window = modal.querySelector('.modal-window');
modal_window.addEventListener('click', function(event) {
  event.stopPropagation();
})
