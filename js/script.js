const btns = document.querySelector('.product__btns')

const btnDisabled = btns.querySelector('.button--disabled')
const btnActive = btns.querySelector('.button--active')

const icon = document.querySelector('.wrap-menu__icon')
const list = document.querySelector('.mobile-list')
const links = document.querySelectorAll('.mobile-list li')
const mobileLinks = document.querySelectorAll('.mobile-list__item')

let itemCommentaries = 0
const leftArrowDesk = document.querySelector('.arrow-left__element--desktop')
const rightArrowDesk = document.querySelector('.arrow-rigth__element--desktop')
const leftArrowMob = document.querySelector('.arrow-left__element--mobile')
const rigthArrowMob = document.querySelector('.arrow-rigth__element--mobile')
const one = document.getElementsByClassName('people__item-one')
const two = document.getElementsByClassName('people__item-two')

console.log(one)
console.log(two)
console.log(mobileLinks[1])

icon.addEventListener('click', () => {
   list.classList.toggle('open')
   links.forEach(link => {
      link.classList.toggle('fade')
   });
});

mobileLinks[1].addEventListener('click', () => {
   list.classList.toggle('open')
   links.forEach(link => {
      link.classList.toggle('fade')
   });
})
mobileLinks[2].addEventListener('click', () => {
   list.classList.toggle('open')
   links.forEach(link => {
      link.classList.toggle('fade')
   });
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
   anchor.addEventListener('click', function (e) {
       e.preventDefault()
       document.querySelector(this.getAttribute('href')).scrollIntoView({
           behavior: 'smooth'
       })
   })
})

listener()
function listener() {
   btnDisabled.addEventListener('mouseover', changeBtnColor, true)
   btnDisabled.addEventListener('mouseout', changeBtnColorDisabled, true)
   leftArrowDesk.addEventListener("click",()=>{changeItem(1)});
   rightArrowDesk.addEventListener("click",()=>{changeItem(2)});
   leftArrowMob.addEventListener('click',()=>{itemMobile(1)});
   rigthArrowMob.addEventListener('click',()=>{itemMobile(2)});
   
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

function changeItem(n) {
   if(n===1) {
      if(itemCommentaries === 0) {
         itemCommentaries = 1
      } else {
         itemCommentaries--
      } 
   } else {
      if(itemCommentaries === 1) {
         itemCommentaries = 0
      } else {
         itemCommentaries++
      }
   }

   for (let i = 0; i < document.getElementsByClassName('item').length; i++) {
      one[i].style.display = 'none'
      two[i].style.display = 'block'
      one[itemCommentaries].style.display = 'block'
      two[itemCommentaries].style.display = 'none'
   }
}

function itemMobile(n) {
   if(n===1) {
      if(itemCommentaries === 0) {
         itemCommentaries = 1
      } else {
         itemCommentaries--
      } 
   } else {
      if(itemCommentaries === 1) {
         itemCommentaries = 0
      } else {
         itemCommentaries++
      }
   }

   for (let i = 0; i < document.querySelectorAll('.item').length; i++) {
      document.querySelectorAll('.item')[i].style.display = 'none'
   }
   document.querySelectorAll('.item')[itemCommentaries].style.display = 'block'
}