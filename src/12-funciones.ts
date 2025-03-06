/*
Funciones
const myFunc = (a, b) => a + b;

const myFunc = (a, b) => a + b;

myFunc() //NaN

myFunc(1) // NaN

myFunc(1, 2) // 3

myFunc(1, 2, 3) // 3

myFunc(1, 2, 3, 4) // 3


Las fechas no nos alerta sobre las fechas pero puedes usar el objeto date
en el caso de date podemos usar el objeto
*/

type Sizes = 'S' | 'M' | 'L' | 'XL'

(()=>{
  function createProductToJSON(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ) {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  // Me empieza a dar errores si yo no le envio todos los parametros
  // Me dice que debo enviar todos los parametros que estableci
  // JS no se queja
  const producto1 = createProductToJSON('P1', new Date(), 34, 'XL')

  // al ser un objeto tendremos el autocompletado para acceder a las propiedades del objeto (title, etc...)
  console.log(producto1)
  console.log(producto1.title)
  console.log(producto1.createdAt)
  console.log(producto1.size)


//Las arrow function se ingresan como constantes es decir se asignan a una variable con su respectiva sintaxis
// (param, param) => retorno {}
//Es la manera en la que mas se trabaja con las funciones sobre todo porque funcion tiene un problema
//con la referencia this



// vamos a hacer opcional this, cuando un parametro no se envia por defecto se regresa un undefined
const createProductToJSONv2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes | undefined //optional
  ) => {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const producto2 = createProductToJSONv2('P1', new Date(), 34)
  console.log(producto2)
})()

