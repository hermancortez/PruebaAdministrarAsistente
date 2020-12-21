

function validardos(){
    var rut, pago, mes, ano; 
    rut = document.getElementById("rut").value; //.value
    pago = document.getElementById("pago").value;
    mes = document.getElementById("mes").value;
    ano = document.getElementById("ano").value;

    console.log(rut + pago + mes + ano);

    if(rut === "" || pago === "" || mes === "" || ano === "" ){
        alert("Todos los campos son obligatorios");
        
    }else if(pago >= 0 && pago<= 99999999 && rut.length > 0 && rut.length<=10){
        alert("Sus datos son validos");
        
    }else{
        console.log("Todo bien...");
    }
   
}

/*function validartres(){
    var rut, pago, mes, ano; 
    rut = document.getElementById("rut").value; //.value
    pago = document.getElementById("pago").value;
    mes = document.getElementById("mes").value;
    ano = document.getElementById("ano").value;

    console.log(rut + pago + mes + ano);

    if(pago >= 0 && pago<= 99999999 && rut.length > 0 && rut.length<=10){
        alert("Sus datos son validos");
        
    }else{
        console.log("Todo bien...");
    }
    
}

function esconder (){
    document.getElementById("titulo").hidden = true;
}*/



