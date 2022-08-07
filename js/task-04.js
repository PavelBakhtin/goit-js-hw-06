let counterValue = document.getElementById("value")
const incEl = document.querySelector('[data-action="increment"]')
const decEl = document.querySelector('[data-action="decrement"]')
counterValue.textContent = 0
incEl.addEventListener('click',() => counterValue.textContent = parseInt(counterValue.textContent) + 1 )
decEl.addEventListener('click',() => counterValue.textContent -= 1)