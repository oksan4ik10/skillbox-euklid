
const navSearch = document.querySelector('.nav__search'),
search = document.querySelector('.search'),
closeSearch = document.querySelector('.search__close'), 
image = document.querySelector('.main__img'),
dots = document.querySelectorAll('.main__dot');


// поиск
navSearch.addEventListener('click', ()=>{
    search.style.display = 'block';
})
closeSearch.addEventListener('click', ()=>{
    search.style.display = 'none';
})

// слайдер

const swiper = new Swiper(".mySwiper", {
    spaceBetween: 50,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });