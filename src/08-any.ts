/**
  Tipos de datos especiales: any (esclusivos de TS)

 */



(()=>{

  //any: cualquier cosa puede ir alli (volvemos a JS)
  let myDynamicVar: any; // es una forma de desactivar el sistema de revision de TS en esa variable

  myDynamicVar = 0;
  myDynamicVar = null;
  myDynamicVar = true;
  myDynamicVar = {}


  myDynamicVar = 'hola';
  //myDynamicVar.
  // al no tener el analizador de TS no ofrece ninguna ayuda y tampoco sugiere ningun metodo

  //quiero forzar a que esto sea tratado como un string si tenemos un any pero su ultimo tipo fue un string
  //se usa cast que es transformar de un tipo a otro forzandolo

  /*
  En TypeScript, el cast (o type assertion) es una forma de indicarle al compilador que trate un valor como un tipo específico, es decir, decirle "confía en mí, sé que este valor es de este tipo".

¿Para qué sirve?
Cuando TypeScript no puede inferir con certeza el tipo exacto de una variable o expresión.

Para acceder a propiedades o métodos específicos de un tipo más específico.

No cambia el valor en tiempo de ejecución, solo le dice al compilador cómo interpretar el tipo.


hay dos formas de hacer un cast
variable as tipo

  */
  const rta =  (myDynamicVar as string).toLowerCase()
  console.log(rta)


  myDynamicVar = 21441
  const rta2 = (<number>myDynamicVar).toFixed()
  console.log(rta2)
  //esta segunda forma tiene que ver con algo llamado los genericos








  /* Se aconseja que el any no sea utilizable
  - Cuando ya estas en un nivel con un proyecto con un equipo consolidando de TS
  - Muchos equipos de ingenieria olvidan el any  y casi por regla de TS hacen que no se pueda utilizar, que sea restrictivo
  - Muchos articulos mencionan que es una mala practica
  - TypeScript es de forma incremental
  - Para proyectos que estan empezando de forma incremental puede ser valido el uso de TS
  - Si en algun momento no sabemos el tipo de dato, puede estar provocando muchos errores el tipado
  - Utilizalo con mucho cuidado en partes de migracion pero cuando ya hay un equipo maduo que sabe TS
    ya se puede controlar mejor el tipado
  - Any no puede devolver alguna libreria que este mal tipada o no este tipada
  - La mayoria de librerias soporta tipos en este momento
  - pero puede haber una libreria que se dejo de mantener pero necesitas utilizarla
   */

})()


