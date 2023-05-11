//no se como validar la fecha, ponerle un max y min
//validar el mail

function validarFormularioContacto() {
    // Obtener los valores ingresados por el usuario y recortar
    // los posibles espacios en blanco al principio y al final.
    const nombre = document.getElementById("nombre").value.trim();
    console.log(nombre);
    const email = document.getElementById("email").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    
    const titulo = document.getElementById("titulo").value.trim();
    const autor = document.getElementById("autor").value.trim();
    const editorial = document.getElementById("editorial").value.trim();

    // Verificar si algún campo está en blanco
    if (nombre === "" || email === "" || telefono === "" || titulo === "" || autor === "" || editorial === "") {
        alert("Por favor, complete todos los campos del formulario.");
        return false;
    }

    // Verificar si el nombre contiene solo caracteres alfabéticos y espacios
    for (let i = 0; i < nombre.length; i++) {
        let charCode = nombre.charCodeAt(i);
        if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
          alert("El campo 'nombre' solo puede contener caracteres alfabéticos y espacios.");
          return false;
        }
      }

      //el libro puede contener caracteres alfanumericos asi que no lo valido

    // Verificar si el autor contiene solo caracteres alfabéticos y espacios
    for (let i = 0; i < autor.length; i++) {
        let charCode = autor.charCodeAt(i);
        if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
            alert("El campo 'autor' solo puede contener caracteres alfabéticos y espacios.");
            return false;
        }
    }

    // Verificar si la editorial contiene solo caracteres alfabéticos y espacios
    for (let i = 0; i < editorial.length; i++) {
        let charCode = editorial.charCodeAt(i);
        if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
            alert("El campo 'editorial' solo puede contener caracteres alfabéticos y espacios.");
            return false;
        }
    }
  
      // Verificar si el telefono contiene solo 10 dígitos numéricos
      if (telefono.length !== 10) {
        alert("El campo 'telefono' debe contener exactamente 10 dígitos numéricos.");
        return false;
      }
      for (let j = 0; j < telefono.length; j++) {
        let digit = telefono.charAt(j);
        if (digit < "0" || digit > "9") {
          alert("El campo 'telefono' solo puede contener dígitos numéricos.");
          return false;
        }
      }

      

  // Si todas las validaciones son exitosas, enviar el formulario
  alert("Formulario enviado correctamente.");
  return true;

}


function validarFormularioNewsletter(){
  const emailNewslettter = document.getElementById("email-newsletter").value.trim();

  // Verificar si algún campo está en blanco
  if (emailNewslettter === "") {
    alert("Por favor, complete todos los campos del formulario.");
    return false;
}

    // Si todas las validaciones son exitosas, enviar el formulario
    alert("Formulario enviado correctamente.");
    return true;
}