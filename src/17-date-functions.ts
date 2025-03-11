import {subDays, format} from 'date-fns'; //si en el from al poner el nombre de la libreria significa que TS lo acepto

// subDay: resta de fechas


const date = new Date(1998, 1, 28) // 0 = enero, 1 = febrero.
const rta = subDays(date, 30)
console.log(rta)
const str = format(rta, 'yyyy/MM/dd')
console.log(str)
