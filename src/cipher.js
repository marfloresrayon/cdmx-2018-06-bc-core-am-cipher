window.cipher = {
//Consola me indica que botón y el evento onclick no están asignados en HTML
 }
  
//Función para llevar a cabo el cifrado
//Evento onclick
function cifrar() {
    //Declaración de constantes para almacenar los valores ingresados
    //.toUpperCase para convertir el string a mayúsculas (código ASCII)
    const message = document.getElementById('mensaje').value.toUpperCase();
    //parseInt convierte a enteros
    const offset = parseInt(document.getElementById('offsetvalor').value);
    //Loop que me permitirá recorrer el string una posición a la vez, a través de un índice
    for (let i = 0; i < message.length; i++) {
      //.charCodeAt me devolverá el número de cada caracter en ASCII
      let charcodear = message.charCodeAt(i);
      //Fórmula para obtener ASCII de acuerdo al offset ingresado por la usuaria
      let formulaMichelle = (charcodear - 65 + offset)% 26 + 65;
      //String.fromCharCode me devolverá el string cifrado a partir del resultado de la fórmula anterior
      let lastMessage = String.fromCharCode(formulaMichelle);
      //return lastMessage;
      //Declaración de variable para indicar la section en HTML donde deseo imprimir el mensaje cifrado
      let showLastMessage = document.getElementById("mensajeFinal");
      console.log= showLastMessage;
      //Impresión del mensaje cifrado en HTML. Uso de += para concatenar letras
      showLastMessage.innerHTML+= lastMessage;
    }
   };
 
 