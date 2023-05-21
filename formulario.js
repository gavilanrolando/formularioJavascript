
const formulario = document.getElementById("formulario");//Para acceder al Formulario
const inputs = document.querySelectorAll("#formulario input");// Obtenemos un arreglo de todos los imputs
const expresiones = {
	//usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
	cuit: /^\d{11,13}$/ // 7 a 14 numeros.
}
const validarFormulario = (e)=> { 
    switch (e.target.name){
		case "Name":
		if(expresiones.nombre.test(e.target.value)){
			document.getElementById("grupo__Name").classList.remove("");
			document.getElementById("grupo__Name").classList.add("");
			document.querySelector("grupo__Name i").classList.remove("fa-check-circle");
			document.querySelector("grupo__Name i").classList.add("fa-times-circle");
		}
		else {
			document.getElementById("grupo__Name").classList.add("");
		}
		break;
		case "cuitNum":
		console.log("Funciona");
		break;
		case "e-mail":
		console.log("Funciona");
		break;
		case "Tel":
		console.log("Funciona");
		break;

	}
}

inputs.forEach((input)=>{
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
});//por cada imputs quiero que se ejecute un codigo

formulario.addEventListener("submit", (e)=> {
    e.preventDefault();// para que no lo envie en forma inmediata
})