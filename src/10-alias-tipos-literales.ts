/*
Crear tus propios tipos
alias y tipos literales
*/

(()=>{
  //Type: palabra reservada exclusiva de typescript (no existe en JS)
  //Sirve para crear nuestros propios tipos con pascalCase
  // Creamos nuestro propio alias type
  // Puedo reutilizar este tipo cada vez que hago referencia al Id del usuario
  type UserID =  string | number | boolean;
  let userId : UserID; //  string | number | boolean

   function greeting(userId: UserID, size: ShirtSize ) {

    //Ya hay tres tipos de opciones(redundancia de codigo)
    //Si estoy haciendo referencia a userID deberia ser una misma congruencia y tipado
    if(typeof userId === 'string') {
      console.log(userId.toLowerCase())

    } else {
      console.log(userId.toFixed(4))
    }
  }

  // Literal Types (de templates)
//Hay una mejor manera de acotar estas opciones dependiendo de los numeros de strings
// Esto hace que a la hora de asignar un nuevo valor que no este dentro del conjunto typescript lo avise
//Debe ser exactamente el carater por lo que es sensible a mayusculas y minusculas
  let shirtSize: 'S' | 'M' | 'L' | 'XL';
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';
  shirtSize = 'qwfjqpwfj'
   shirtSize = 'S';


   type ShirtSize = 'XS' | 'S' | 'M' | 'L' | 'XL'
   let shirtSize1: ShirtSize;

   shirtSize1 = 'XS'

  // Te sugiere las opciones del conjunto
greeting(1412214, 'L')
})()

