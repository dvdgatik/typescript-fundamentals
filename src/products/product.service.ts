/*
Tenemos el servicio que declara un array de productos en memoria
la forma de agregar un producto y calcular el export
y cada una de esas funciones es exportable
*/

import { Product, Sizes } from './product.model'

export const products: Product[] = []

export const addProducto = (data: Product) => {
    products.push(data);
}

export const calcStock = (): number => {
  let total = 0
  products.forEach((item)=>{
    total += item.stock
  })
  return total
}
