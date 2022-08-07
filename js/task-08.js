const form = document.querySelector('.login-form')
form.addEventListener("submit", onSubmit)

function onSubmit(e){
    e.preventDefault();
    
      if (e.currentTarget.email.value === "" || e.currentTarget.password.value === "") {
        return alert("Please fill in all the fields!");
      }
      const formEls = e.currentTarget.elements
      const email = formEls.email.value
      const password = formEls.password.value
      const formData = {
        email,
        password
      }
      console.log(formData)
      form.reset()
    }


