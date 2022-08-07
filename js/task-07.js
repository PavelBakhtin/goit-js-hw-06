const inputEl = document.getElementById('font-size-control')
const textEl = document.getElementById('text')
inputEl.addEventListener("change", abracadabra)
function abracadabra (e){
textEl.style.fontSize = `${e.currentTarget.value}px`

}