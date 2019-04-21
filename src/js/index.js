import '../scss/style.scss'
let Elem = document.querySelector('#box')

Elem.innerHTML = 'I am added via JavaScript!!!!!'

console.log('blaaauaaaa!')

// #################################### TOP MENU TOGGLE
const toggle = document.querySelector('.toggle')
const nav = document.querySelector('.nav-top')

toggle.addEventListener('click', function() {
  toggle.classList.toggle('isActive')
  nav.classList.toggle('isActive')
})
// ################################### /TOP MENU TOGGLE
