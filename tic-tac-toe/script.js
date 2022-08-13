const X_class = 'x'
const circle_class = 'circle'
const cellElements = document.querySelectorAll('[data-cell]')
let circleTurn

cellElements.forEach(cell => {
  cell.addEventListener('click', handleClick, {once:true})
})

function handleClick(e) {
  
}