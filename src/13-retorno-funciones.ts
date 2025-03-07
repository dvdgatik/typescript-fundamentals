/*
Void
retorno de las funciones
¿Como trabajar con el retorno de las funciones
hay un retorno en TS especifico llamado void


ver curso manipulacion de arrays
*/

/*
¿Como se coloca de forma explicita el retorno?
(prices: number[]): number

el ya lo hacia de la forma inferida pero puedes especificarlo despues del parentesis de los argumentos
es una forma de decir a los demas devs que el return sera solo de un tipo especifico
*/
(()=>{
  const calcTotal = (prices: number[]): string => {
    //prices.reduce()
    let total = 0;
    prices.forEach(item=> {
      total += item
    })
    return total.toString() // en el return me regresa un number

  }

  let rta = calcTotal([1,2,1,2,3])

  console.log(rta)


  //Funciones que no tienen retorno (funcion de efectos secundarios), normalmente produce llamda a otras funciones

  //Habiamos definido que una funcion no retorna nada
  const printTotal = (prices: number[]): void => {
    let response =  calcTotal(prices)
    console.log(`El total es: ${response}`)
    return response
  }

  //Automaticamente si no retorna nada me devuelve un void
  let rta2 = printTotal([1,2,3,4])


})()
