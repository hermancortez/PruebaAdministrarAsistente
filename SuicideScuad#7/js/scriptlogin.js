






  function checkRut(inputElement) {
    // Despejar Puntos

    let rutClean = inputElement.value.replace('.','');
    // Despejar Guión
    rutClean = rutClean.replace('-','');
    
    // Aislar Cuerpo y Dígito Verificador
   const bodyRut = rutClean.slice(0,-1);
   let dv = rutClean.slice(-1).toUpperCase();
    
    // Formatear RUN
    inputElement.value = bodyRut + '-'+ dv
    
    // Si no cumple con el mínimo de digitos
    if(bodyRut.length < 8) { 
        inputElement.setCustomValidity("RUT Incompleto");
         return false;
        }  
  
    // Casos Especiales (0 y K)
    dv = (dv == 'K')?10:dv;
    dv = (dv == 0)?11:dv;
    
    // Si todo sale bien, eliminar errores (decretar que es válido)
    inputElement.setCustomValidity('');
}

  function checkContrasena(inputElement) {
  
    const password = inputElement.value   
           
    // Si no cumple con el mínimo de digitos
    if(password.length > 20 || password.length < 5)   { 
   
         inputElement.setCustomValidity("Contraseña no valida"); 
         return false;
    }    
    inputElement.setCustomValidity("");
     
    return true;
   
}

function checkForm () {

    

    const rutElement= document.getElementById("rut");
    let rutIsValid= checkRut(rutElement);
    
    if(rutIsValid)location.assign("/listadousuarios.html");

    alert ("Falta ingresar datos")

console.log(rutElement)
}
 
  

