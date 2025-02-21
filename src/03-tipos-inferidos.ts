// Tipos Inferidos typing
// su haces hover a la variable vas a ver que automaticamente es considerado un string
// y esto es porque TS tiene un "motor de inferencia"
// entonces si asigno una cadena al ser una cadena typescript infiere que eso es una cadena
let myProductName: string = "Prodct 1"

let myproductPrice = 10

// si cambias el valor a otro tipo de dato de una variable TS ya lo detecta y te advierte
myProductName = 1


myProductName.toLowerCase() // automaticamente TS te sugerira metodos o autocompletara segun el tipo de dato por ejemplo toLowerCase para strings

myproductPrice.toFixed() // este metodo solo petenece a los tipos number


const myProductStock = 1000 // al ser una constante ya no infiere el tipo de dato

myProductStock = 3000 // tambien detecta si quieres cambiar el valor de una constante

// Lo ideal es utlizar el motor de inferencia cada que sea posible hay varios escenarios donde se recomienda declarar el tipo explicitamente
