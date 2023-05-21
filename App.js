
const nombre = document.getElementById("name")
const email = document.getElementById("email")
const password = document.getElementById("pass")
const form = document.getElementById("formulario")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    parrafo.innerHTML = ""
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let entrar = false
    if (nombre.value.length <6) {
    warnings+= " Completar con mas de 6 caracterres <br>"
    entrar = true
    }
    
    if (!regexEmail.test(email.value)){
        warnings+= " El email no es valido <br>"
        entrar = true
    }
    if(password.value.length <8){
        warnings+= " La contraseña no es valida <br>"
        entrar = true
    }
    if(entrar = true){
        parrafo.innerHTML = warnings
    }
    else{
        warnings+= " Enviado <br>"
    }
});

