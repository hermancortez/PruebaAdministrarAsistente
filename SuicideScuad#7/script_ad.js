
/*Esta funcion es para ocultar o mostrar el formulario adicional en la pag html*/ 

function mostrarFormulario(){
 
    var x = document.getElementById('ocultar');
    
    if (x.style.visibility === 'hidden') {
    x.style.visibility = 'visible';
    } else {
     x.style.visibility = 'hidden';
    }
}



  function validar_asis(){
    var id_asistente, nombres , edad, email, telefono; 
    id_asistente = document.getElementById("id_asistente").value; //.value
    nombres = document.getElementById("nombres").value;
    edad = document.getElementById("edad").value;
    email = document.getElementById("email").value;
    telefono = document.getElementById("telefono").value;

    console.log(id_asistente + nombres + edad + email + telefono);

    if(id_asistente === "" || nombres === "" || edad === "" || email === "" || telefono === "" ){
        alert("Todos los campos son obligatorios");
        
    }else if(id_asistente >= 0 && id_asistente<= 99999999 && nombres.length > 0 && nombres.length<=100  && edad >0 && edad<=150 && telefono.length === 8){
        alert("Sus datos son validos");
        
    }else{
        console.log("se encontaron errores,revise sus datos por favor...");
    }
}