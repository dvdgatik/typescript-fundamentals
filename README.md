Por que usar TypeScript

- TypeScript ha tenido una adopcion y una acogida de la comunidad bastante fuerte desde el 2017 hasta la fecha
- cada vez incrementas mas sus descargas en npm
- Es uno de los lenguajes mas queridos para los programadores
- Gracias a su revision de tipos estaticos (Analisis de codigo estatico) puede prevenir errores de tipo antes de correrlo
- Desde analisis de codigo estatico (como python tambien): Puedes prevenir hasta el 15 por ciento de bugs en tus proyectos

- Slack
- Airbnb


- Saber JavaScript es diferente a saber TypeScript
- Tu te das cuenta que tienes un error en JavaScript solo al momento de ejecucion (navegador, node, donde sea)
- Tener feedback lo antes posible
- TypeScript va tomar el lemguaje junto con sus nuevas caracteristicas (ESNext, ES6, ES7 etc...) y le va a poner tipos
- Analisis de codigo estatico de todo eso
- Primera capa: analisis de codigo estatico (typos, una funcion no esa definida, etc...)
- 2. Pruebas unitarias
- 3. Pruebas de Integracion (Vemos como todo funciona en conjunto)
- 4. Revision de Codigo

Analisis de codigo estatico compilacion

¿Un desarrollador de TypeScript es diferente a un Desarrolador de JavaScript?
    - Si pero no es una gran diferencia si tienes conocimientos de JavaScript podras entender TypeScript facilmente
  

  Instalar typescript

- Dentro de la carpeta
- ad gitignore editorconfig

- Generar package.json 
  - npm init -y

- typescript no lo lee node ni el navegador

npx ejecuta dependencias dentro del proyecto (no de manera global)
- comando para instalar 
- --save-dev dependencia de desarrollo
npm install typescript --save-dev 

npx tsc --version
- No importa que version pueda salir los fundamentos se mantienen


Atrapando errores con analisis de codigo estatico

 Compilador de typescript:

Typescriot va a tratar de convertir el codigo a una version especifica en donde igual funcione

ts es la extension para TypeScript


Ejecuta compilador (convierte el archivo typescript a JS y crea uno nuevo con la extension js)
npx tsc 01-hello.ts 

Ejecuta el compilador con una version especifica de ES
npx tsc demowithTS.ts --target es6

dist / distribution

transpilar: s un tipo especial de compilador que traduce de un lenguaje fuente a otro fuente también de un nivel de abstracción parecido

Generar el archivo JS en una carpeta diferente 
npx tsc demowithTS.ts --target es6 --outDir dist

podemos usar Regex para transpilar todos los archivos que terminan en una extension .ts
npx tsc src/*.ts --target es6 --outDir dist

Typescript no lee nativamente node ni navegadores por ello debemos hacer un proceso de transpilación

Hay herramientas como Deno que corre typescript por defecto


