/*
Trabajando con numbers
*/
//Funcion anonima autoejecutada, Scope para no tener problema con el nombre de variables

(()=>{

  //----Trabajando de forma inferida-----
  let productPrice = 100;
  productPrice = 12;
  console.log(productPrice)


  //----Trabajarlo de forma explicita-----
  let customerAge: number = 28;
  //Empieza a detectar y prevenir
  customerAge = customerAge + '1';// esto en JS se concatenaria y seria un "281"



  /* si vas a crear una variable, le pones un tipo pero no le asignaras un valor
  obligatoriamente tienes que declararla de forma explicita
  */
  let productStock: number;
  console.log('productStock' productStock) //TS detecta un que al hacer console la variable no tiene un valor
  //Con JS hasta que se inicializara te hubieses dado cuenta
  // Tambien funciona y detecta si ya tenemos estructuras de control (controles de flujo)
if(productStock > 10) {
  console.log('Its Greater')
}



let discount = parseInt('123')  //como parseInt devuelve un number al final el motor de inferencia deduce que es un number
//si no lo puede convertir si pones una cadena que no es un numero devolvera un NaN NOt a Number igual lo representa como un numero
// pero solo lo notaras hasta la ejecucion
console.log(discount)

if (discount <= 200) {
    console.log('apply')
} else {
  console.log('not apply')
}

//un hexadecimal, binario, decimal tambien forman parte del conjunto de tipo numerico (number)
let hex = 0xfff;
console.log(hex) //transforma al valor decimal

let bin = 0b0000001010;  //Typescript tambien detecta errores al declarar binarios
console.log(bin)

// en JS existe el objeto Number y number
/*
number es el tipo
Number: Number tambien funcionaria pero no hace referencia al tipo numero o conjunto de numeros
sino a objeto de numeros
en conclusion no lo tipes con el Number
*/
const myNumber: number = 10;
})()
