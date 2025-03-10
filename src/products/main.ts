import { createProducto, calcStock, products } from './product.service'


/*
Supongamos que en el backend cambian el title por nombre
entonces tu en el model cambias la propiedad
y TS avisara a todos los archivos esto seria complicado debuggearlo en JS
*/
addProducto({
    title: 'P1',
    createdAte: new Date(1992, 1 , 1),
    stock: 5,
  })
  addProducto({
    title: 'P2',
    createdAte: new Date(1992, 1 , 1),
    stock: 6,
    sizes: 'M'
  })

console.log(products)

const total = calcStock()

console.log(total)
