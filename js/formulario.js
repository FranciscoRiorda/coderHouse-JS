
// Envío de formulario

const miFormulario = document.getElementById('formulario');

miFormulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault();

    const formulario = new FormData(miFormulario);

    const email = formulario.get('email');
    const mensaje = formulario.get('msg');
    
    alert(`Formulario enviado. \n\n Correo donde recibirá una respuesta: ${email} \n\n Tu consulta: ${mensaje}`);
}

//////////////////////////
