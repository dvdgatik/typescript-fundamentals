/*
Para deshacerse de las funciones anonimas autoejecutables
podemos importar/exportar modulos con las palabras clave import / export

Creamos un archivo llamado product (para efectos del ejemplo) y añadimos .model
realmente model no signitifa nada para TS pero se usa para especificar algo del mismo nombre de arhivo

y creamos product.service (service que se encargara para los service)

y finalmente main.ts todo esto se hara con programacion modular


- todo lo que tenga que ver con el modelado de datos (definicion de los tipos etc) lo colocaremos en el
product.model (Sizes Product etc...)


ya no estaremos usando funciones autoejecutables sino que utilizaremos modulos


para utilizar modulos haremos que SIzes y Products sean exportables con la palabra clave export despues de type


Despues addProducts y product lo agregaremos a service

importamos el product model con import y form (con from hacemos referencia a la ruta del archivo)



Para no repetir el export se puede exportar todo junto al final del archivo como un objeto


type Sizes = 'S' | 'M' | 'L' | 'XL';
type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
}

export {
    Sizes,
    Product,
}
*/
