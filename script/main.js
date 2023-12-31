


let modal = document.querySelector('.modal'),
   header = document.querySelector('.header'),
   modalClose = document.querySelector('.modal__close'),
   navIcons = document.querySelectorAll('.nav__main-icon'),
   modalBtn = document.querySelector('.modal__button'),
   modalInp = document.querySelector('.modal__input')
   plusBtn = document.querySelector('.nav__icon-plus');


navIcons.forEach((item) => {
   item.addEventListener('click', () => {
      item.classList.add('active')
   })
})

modalClose.addEventListener('click', () => {
   header.classList.remove('active')
   modal.classList.remove('active')
})

plusBtn.addEventListener('click', () => {
   header.classList.add('active')
   modal.classList.add('active')
})

modalBtn.addEventListener('click', () => {
   header.classList.remove('active')
   modal.classList.remove('active')
})


function createCard(card){
   return `<div class="nav__main-icon">
               <i class="fa-solid fa-utensils nav__icon"></i>
            </div>`
}