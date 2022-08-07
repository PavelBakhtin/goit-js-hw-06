function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeBtn = document.querySelector('.change-color')
const colorName = document.querySelector('.color')
changeBtn.addEventListener('click', changeColor)
function changeColor(e){
document.body.style.backgroundColor = getRandomHexColor()
colorName.textContent = getRandomHexColor()
}