/**
 Trabajando con strings
 nota: tipado y analisis estatico
 */
(()=>{
  let productTitle = 'My amazing product'
  // productTitle = 4
  // productTitle = null
  // productTitle = () => {}
  productTitle = 'My amazing product change'

  console.log(productTitle)

  //La comilla doble o simple, no importa
  // la comilla doble la podemos utilizar cuando quieremos usar la comilla simple
  const productDescription = " I'm bla bla bla bla"

  //backtick: maneja variables y cadenas de manera sencilla con multiplaes lineas y concatenar como si fuera un template

  let productPrice =  123
  let isNew: boolean = false
  //aqui no hay problema con los diferentes tipos porque solo se concatenan y convierten a string al template
  const summary = `
    title: ${productTitle}
    description: ${productDescription}
    price: ${productPrice}
    isNew: ${isNew}
  `;

  console.log(summary)



  // tipado explicito

  //lo mismo usar string no String

  const myString: string = 'string'
})()
