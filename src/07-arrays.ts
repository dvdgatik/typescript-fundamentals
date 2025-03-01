/*
Trabajando tipado y analisis de codigo estatico con arrays
*/


(()=>{
  // por inferencia
  //number[] array que solo contiene numeros
  // igual detecta en los metodos del array si no se esta usando el tipo que corresponde
  const price = [1,2,3,4,5,6]
  price.push('qdw')
  price.push({})
  price.push(4)

  //El contenido de ese array puede ser string ó number ó boolean el pipe "|" se puede considerar un OR
  //(string | number | boolean)[]
  const price1 = [1, 2, 3, 4, 5, 'hola', true]

  //El contenido de este array pued ser string o boolean
  let products = ['hola', true]

  products.push('hola')
  products.push(true)
    products.push(10)
  //quiero que luego en forma runtime, un array sea flexible a mas tipos en lugar de estar acotado de string y boolean

  //ya no puedo usar el tipo inferido debo declararlo de forma explicita

  //el valor inicial es string y boolean pero tambien soporta numeros
  let mixed: (number | string | boolean)[] = ['hola', true]

  mixed.push('bla bla bla')
  mixed.push(false)
  mixed.push(389)
  mixed.push([])
  mixed.push({})


  console.log(mixed)

//casi todos los elementos en JS son objects
// al permitir un tipo Objcet tambien se permiten los Arrays
  let mixed1: (number | string | boolean | Object)[] = ['hola', true]

  mixed1.push('bla bla bla')
  mixed1.push(false)
  mixed1.push(389)
  mixed1.push([])
  mixed1.push({})

//let numbers = ['']
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, '']

// aqui ya lo alerta porque se infiere que solo son numbers
let x2numbers = numbers.map(item => item * 2)

console.log(x2numbers)


// nota: recomendacion profundizar en los arrays
})()
