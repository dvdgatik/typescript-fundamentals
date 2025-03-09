/*
En la clase anterior vimos como hacerle para que las funciones acepten objetos
pero vamos a ver como trabajar con Objetos en TS


Asi como utilizamos Sizes como un tipe alias en una propiedad o atributo
para reutilizar codigo

vamos a definir una estructura para el Objeto

y lo podras utilizar para argumentos cuando pasas un objeto

e incluso para arreglos  o arreglos de objetos
*/

(()=>{
    type Sizes = 'XS' | 'S' | 'M' | 'L' | 'XL'
    type Product = {
    title: string,
    createdAte: Date,
    stock: number,
    sizes?: Sizes
   }

  const products: Product[] = []
  const addProducto = (data: Product) => {
    products.push(data);
  }

  addProducto({
    title: 'P1',
    createdAte: new Date(1992, 1 , 1),
    stock: 1,
  })
  addProducto({
    title: 'P1',
    createdAte: new Date(1992, 1 , 1),
    stock: 1,
    sizes: 'M'
  })

  //En los objetos no aparecera undefined
  console.log(products)
  products.push({})
  products.push({
    title: 'P1',
    createdAte: new Date(1992, 2, 3),
    stock: 5,
    sizes: 'S'
  })


  console.log(products)
})()
