const btns = document.querySelector('.product__btns')

const btnDisabled = btns.querySelector('.button--disabled')
const btnActive = btns.querySelector('.button--active')

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