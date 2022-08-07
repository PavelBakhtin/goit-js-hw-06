const inputEl = document.getElementById('validation-input')
inputEl.classList.add('validation-input')
inputEl.addEventListener('blur',(e) => {
    const valState = inputEl.value.length == inputEl.dataset.length ? 'valid' : "invalid"
    switch(valState){
       case 'valid' : inputEl.classList.add(valState), inputEl.classList.remove("invalid")
       break;
       case 'invalid' : inputEl.classList.add(valState), inputEl.classList.remove("valid")
       break;
    }   
})
