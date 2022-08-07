const input = document.querySelector('input')
const output = document.getElementById('name-output')
input.addEventListener('input',(e) => output.textContent = e.currentTarget.value)