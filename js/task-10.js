function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const input = document.querySelector('input')
const createBtn = document.querySelector('[data-create]')
const destoyBtn = document.querySelector('[data-destroy]')
const boxesContainer = document.getElementById('boxes')


createBtn.addEventListener('click', createBoxes)
destoyBtn.addEventListener('click', destoyBoxes)
function createBoxes(amount) {
  amount = parseInt(input.value)
  
  const collectionOfBoxes = [] 
  let size = 20
    for (let i = 0; i<amount; i += 1) {
      let div = document.createElement('div')
      div.style.backgroundColor = getRandomHexColor()
      div.style.width = size + 'px'
      div.style.height = size  + 'px'
      size+=10
      collectionOfBoxes.push(div)
    }
  boxesContainer.append(...collectionOfBoxes)
}
function destoyBoxes(){
  boxesContainer.innerHTML = ''
}





