/*
null and undefined: realmente estos son dos tipos de datos
null and undefined son dos cosas diferentes

*/

(()=>{
  let myNumber: number = undefined; // esto no puede ser iguala indefinido, no se le puede asignar un undefined
  //a una variable que tiene otro tipo
  let myString: string = null;

  // Si utilizas el tipado inferido te daras cuenta que tanto como undefined y null son tipo any
  // Al definirlos explicitamente ya no seria any
  // Seria raro tener un nulo que solo es nulo
  let myNull: null = null;
  let myUndefined: undefined = undefined;

  // Podriamos hcar que una variable de tipo number al inicializarlo permita el null
  // voy a hacer que sea un numero pero que inicilize en null por alguna razon
  let myNumber1: number | null = null;
  myNumber1 = 4;

  let myString1: string | undefined = undefined;
  myString1 = 'HOLA'

  /*
  Esto nos podria ayudar como por ejemplo frameworks que estan en runtime como Angular (React y Vue tambien)
  al estar evaluando componentes que son dinamicos
  hasta que no cargue ese template ese valor sera nulo y una vez cargado se le asigna un valor
  esto es sobre todo en nulo

  podria haber casos en que en algun momento de inicializacion sea undefined
  */

  //Hay que tener muy encuenta como manejar estos casos lo anterior funcionaria en el momento de inicializacion
  // pero al operarlo como funciona

  function hi(name: string | null) {
    let hello = 'Hola';
    //Solo cuando me envian el nombre lo quiero concatenar
    // El if valida si no es nulo o undefined
    if (name) {
        hello += name
    } else {
      hello+= ' Nobody'
    }
    console.log(hello)

  }

  hi(undefined)

  // Hay una forma mucho mas sencilla que TS nos da sin tantas lineas de codigo



  function hiv2(name: string | null) {
    let hello = 'Hola';
    //Ejecute la funcion y automaticamente me puso el signo de pregunta
    //Al no saber si sera nulo TS te avisa aunque puedes usar la opcion del signo ? para validarlo
    // SI esto lo haces dentro de un If validado TS no te avisara porque ya se valido previamente
    // ? lo que hace es que si esto no existe entonces la expresion me devuelve nulo
    // Esto representa exactamente lo mismo de las lineas de arriba pero en una linea
    //Si esto da un nulo, se va a la segunda opcion
    //optional chaining // verificar si algo es nulo
    // Antes de ejecutar verifica que algo no sea nulo
    hello += name?.toLocaleLowerCase() ?? ' nobody'


    console.log(hello)

  }

  hi(undefined)
  hiv2(null)





  /*
  Nullish coalescing operator (??) VS logical OR operator (||)
La gran diferencia entre estos dos es que el logical OR operator (||) toma como valores falsos a 0, NaN, strings vacíos ("", '', ``), false, a demás de null y undefined,
mientras que nullsh coalescing operator tomo como valores falso solamente a null y undefined.

En el caso de las funciones se ejecuta la misma,
 realizan todos los cálculos que tienen que hacer,
 pero ambos operadadores ?? y || únicamente se fijan en lo que retorna dichas funciones.
 En el caso del ejemplo del profesor veo más factible utilizar nullish coalescing operator
 en vez de logical OR operator.




 El Optional chaining o encadenamiento opcional no solo se puede usar con null, sino también con undefined.

A su vez se puede usar también con funciones de la siguiente forma:


let result = someInterface.customMethod?.();
Fuente:

Me pareció interesante ya que no recuerdo haberlo visto hasta ésta parte de la escuela de Desarrollo.
  */
})()
