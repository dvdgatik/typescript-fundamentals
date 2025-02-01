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

