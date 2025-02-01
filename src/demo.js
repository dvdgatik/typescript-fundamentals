
/*
- Este codigo tiene errores pero no se dara cuenta hasta que se ejecute en node o navegador
- Lo que quieremos es feedback temprano (con el analizador de codigo estatico, tenerlo al mismo nivel que cuando escribimos codigo)
- Podemos activar el analizador de codigo estatico de TS en JS
*/
// @ts-check
(()=> {
  const myCart = [];
  const products = [];
  const limit = 2;

  async function getProducts() {
    const rta = await fetch('http://api.escuelajs.co/api/v1/products', {
      mehtod: 'GET' // detectar errores de typos, el metodo no existe
    });
    const data = await rta.parseJson(); //este metodo no existe
    products.concat(data);
  }
  function getTotal() {
    const total = 0;
    for (let i = 0; i < products.lenght; i++) {
      total += products[i].prize; // estamos agregando una suma pero es una constante
    }
    return total;
  }
  function addProduct(index) {
    if (getTotal <= limit) {
      myCart.push(products[index]);
    }
  }

  await getProducts(); // estamos ejecutando un await, solo se puede ejutar con una funcion que tenga async
  addProducto(1);
  addProducto(2);
  const total = getTotal();
  console.log(total);
  const person = {
    name: 'Nicolas',
    lastName: 'Molina'
  }
  const rta = person +  limit;
  console.log(rta);
});
