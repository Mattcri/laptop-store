const btns = document.querySelector('.product__btns')

const btnDisabled = btns.querySelector('.button--disabled')
const btnActive = btns.querySelector('.button--active')

const icon = document.querySelector('.wrap-menu__icon')
const list = document.querySelector('.mobile-list')
const links = document.querySelectorAll('.mobile-list li')

let itemCommentaries = 0
const leftArrow = document.querySelector('.fa-chevron-circle-left')
const rightArrow = document.querySelector('.fa-chevron-circle-right')
// const one = document.querySelectorAll('.people__item-one')
const one = document.getElementsByClassName('people__item-one')
// const two = document.querySelectorAll('.people__item-two')
const two = document.getElementsByClassName('people__item-two')


console.log(one)
console.log(two)

leftArrow.addEventListener('click', () => {
   one[0].style.display = 'none'
   one[1].style.display = 'none'
   two[0].style.display = 'block'
   two[1].style.display = 'block'
})
rightArrow.addEventListener('click', () => {
   one[0].style.display = 'block'
   one[1].style.display = 'block'
   two[0].style.display = 'none'
   two[1].style.display = 'none'
})

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
   // leftArrow.addEventListener("click",()=>{changeItem(1)});
   // rightArrow.addEventListener("click",()=>{changeItem(2)});
   
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

// PODRÍA SERVIR HACER ALGO ASÍ 
// var elems = document.getElementsByClassName('btn-pageMenu');
// for (var i=0;i<elems.length;i+=1){
//   elems[i].style.display = 'block';
// }

// function changeItem(n) {
//    if(n===1) {
//       if(itemCommentaries === 0) {
//          itemCommentaries = 1
//       } else {
//          itemCommentaries--
//       } 
//    } else {
//       if(itemCommentaries === 1) {
//          itemCommentaries = 0
//       } else {
//          itemCommentaries++
//       }
//    }
//    for (let i = 0; i < document.getElementsByClassName('item').length; i++) {
//       document.getElementsByClassName('item')[i].style.display = 'none'
//    }
//    document.getElementsByClassName('item')[itemCommentaries].style.display = 'block'
//    document.querySelectorAll('.item')[itemCommentaries].style.display = 'block'
//    for (let i = 0; i < document.querySelector('.people').length; i++) {
//       one[i].style.display = 'none'
//       two[i].style.display = 'block'
//    }
//    two[itemCommentaries].style.display = 'block'
//    leftArrow.addEventListener('click', () => {
//       one.style.display = 'none'
//       two.style.display = 'block'
//    })
// }
