/*
Objetos en funciones
Ya vimos como trabajar con funciones

ahora veremos como enviar objetos a dichas funciones como parametros
porque realmente podemos enviar atributio por atributo
pero si la data es extensa podemos encapsularlo en un objeto

*/

(()=>{
  const login = (usuario: string, password: string) => {
      console.log(`${usuario} ${password}`)
  }

  login('david', '123')


  const loginConObjeto = (data: {usuario: string, pass: string | number}) => {
      console.log(`${data.usuario} ${data.pass}`)
  }
  loginConObjeto({
    usuario: 'example.com',
    pass: '123'
  })

  type Sizes = 'XS' | 'S' | 'M' | 'L' | 'XL'

  const products: any[] = []

  // Tambien puedes definir propiedades opcionales en los objetos
  const addProducto = (data: {
    title: string,
    createdAte: Date,
    stock: number,
    sizes?: Sizes
  }) => {
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
})()
