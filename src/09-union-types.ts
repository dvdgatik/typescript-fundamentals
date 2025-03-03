/*

Con any tenemos la flexibilidad de colocar cualquier tipo
pero para hacerlo de forma en base a buenas practicas lo ideal es usar Union Types

realmente ya hemos utilizado union types por ejemplo en los arrays

quiero de esa flexibilidad de JS, que un array no tenga un tipo etc etc
(number | string  | boolean | Object)[] = ['hola', true]
*/

(()=>{
  // en union types ya no puedo usar la inferencia porque debo decircelo de forma explicita
  // con any puedes poner el tipo que quieras, pero realmente quieres/necesitas poner el tipo que quieras
  // es bastante restrictivo el desarrollo
  // en lugar de poner cualquier tipo para casos especificos lo puedo acotar mas
  // todo dependera de tu caso de uso

  // el id de una base de datos
  let userId: string | number;
  userId = 1325235325;
  userId = 'Esto es un string';



  function greeting(myText: string | number) {
    if(typeof myText === 'string') {
      //aqui ya aseguramos que es un string por tanto TS puede sugerir los metodos para el string
      console.log(myText.toLowerCase())

    } else {
      // EL analizador de TS ya sabe que es un number y puede sugerir metodos porque ya se comprobo desde la condicion
      // como solo hay dos tipos y se comprobo en el string en la condicion el caso contrario sera que solo queda un tipo
      console.log(myText.toFixed(4))
    }
  }

  greeting('DAVID')
  greeting(3.141599999)

  // ¿Que pasa si yo quiero actuar de forma diferente cuando sea un string o un number?
  //¿Cuando sea un string quiero que actue de una forma y cuando sea un number quiero que actue de otra forma
  // quiero tener la cohesion que tiene typescipt de acuerdo al tipado


  /*
  Los union types son especialmente útiles cuando quieres definir tu propio tipo de dato,
  en ese caso acotas tu variable al tipo de dato personalizado y
  con union determinas qué valores quieres que tenga,
  tu variable no recibirá valores diferentes a lo que tú definas.

Especialmente útil en catálogos.

  */
})()
