/*
Trabajando con booleanos
*/
(()=>{

  //forma implicita
let isEnable = true

//forma explicita
let isNew: boolean = true
console.log(isNew)
isNew = false
console.log(isNew)


const random = Math.random(); //por defecto saca un numero entre 0 y uno con todas sus decimales
console.log(random)

//falla porque es una cadena
//El analizador de codigo estatico no solo analiza las asignaciones sino tambien las comparaciones y condiciones
isNew = random >= 0.5 ? false: true;

console.log(isNew)

isNew = random >= 0.5 ? 'true': 'false'


/*
**boolean ** es un tipo primitivo **Boolean ** es un objeto

Se recomienda usar los primitivos por rendimiento e inmutabilidad en la memoria

*/


/*
en javascript para booleanos puedes usar undefined o null
pero en TS no es posible
*/

isEnabled = undefined;
isActivated = null;
})();
