function validardatos(){
    var idaccidente, fecha, hora, lugar,origen,Cliente; 
    idaccidente = document.getElementById("idaccidente").value; //.value
    fecha = document.getElementById("fecha").value;
    hora = document.getElementById("hora").value;
    lugar = document.getElementById("lugar").value;
    origen = document.getElementById("origen").value;
    Cliente = document.getElementById("Cliente").value;

    console.log(rut + pago + mes + ano);

    if(idaccidente === "" || fecha === "" || hora === "" || lugar === "" || origen === "" || Cliente === "" ){
        alert("Todos los campos son obligatorios");
        return false;
        
    }else{
        console.log("Todo bien...");
    }
   
}