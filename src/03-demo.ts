// Typescript va a detectar que definiste las mismas variable sen otro archivo
// Esto normalmente no pasa con entornos preconfigurados como Angular o React
// En este caso estan chocando porque no manejamos ningun scope o alcance ni tampoco hemos hecho programacion modular
// con una funcion anonima autoejecutada se resuelve el problema (pregunta para entrevista funciones autoejecutadas)

(()=>{
 //poner adentro las variables
})();

let myProductName: string = "Prodct 1"

let myproductPrice = 10
