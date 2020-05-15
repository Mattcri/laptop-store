const btns = document.querySelector('.product__btns')

const btnDisabled = btns.querySelector('.button--disabled')
const btnActive = btns.querySelector('.button--active')

const icon = document.querySelector('.wrap-menu__icon')
const list = document.querySelector('.mobile-list')
const links = document.querySelectorAll('.mobile-list li')

icon.addEventListener('click', () => {
   list.classList.toggle('open')
   links.forEach(link => {
      link.classList.toggle('fade')
   });
});

listener()
function listener() {
   btnDisabled.addEventListener('mouseover', changeBtnColor, true)
   btnDisabled.addEventListener('mouseout', changeBtnColorDisabled, true)
}

function changeBtnColor() {
   if(true) {
      btnDisabled.style.backgroundColor = "#c36cbb"
      btnDisabled.style.color = "#fff"
      btnActive.style.backgroundColor = "transparent"
      btnActive.style.color = "#c36cbb"
   } 
}

function changeBtnColorDisabled() {
   if (true) {
      btnDisabled.style.backgroundColor = "transparent"
      btnDisabled.style.color = "#c36cbb"
      btnActive.style.backgroundColor = "#c36cbb"
      btnActive.style.color = "#fff"
   }
}