/*
Ya vimos como utilizar librerias que tienen soporte para TS, pero hay librerias que todavia no lo tienen
veremos como usar librerias que no tienen soporte

Lodash
la libreria se llama Lodash (tiene muchas funciones de programacion funcional que
os permite tener algoritmos complejos en JS, funciones que normalmente no tiene JS)


por la documentacion nos podemos dar cuenta que no utiliza import ni export (ES6) no soporta las veriones nuevas
de JS por ende TS tampoco
// Load the full build.
var _ = require('lodash');
// Load the core build.
var _ = require('lodash/core');
// Load the FP build for immutable auto-curried iteratee-first data-last methods.
var fp = require('lodash/fp');

// Load method categories.
var array = require('lodash/array');
var object = require('lodash/fp/object');

// Cherry-pick methods for smaller browserify/rollup/webpack bundles.
var at = require('lodash/at');
var curryN = require('lodash/fp/curryN');

El ecosistema de TS a agregado a las librerias que no soportan TS a creado unos modulos para
agregar manualmente tipado a las librerias el mismo  VS te sugiere


var _ = require('lodash')

import _ from 'lodash' //aqui TS nos advierte que no encontro un sistema de tipos para lodash

npm i --save-dev @types/lodash
*/

import _ from 'lodash' //aqui TS nos advierte que no encontro un sistema de tipos para lodash

const data = [
  {
    username: 'David',
    role: 'admin'
  },
  {
    username: 'valentina',
    role: 'vendedor'
  }
  {
    username: 'daniel',
    role: 'customer'
  }
]

const rta = _.groupBy(data, (item)=>item.username)

console.log(rta)
//lo importante es que esta tipado

/**
 * output
 * {
  admin: [ { username: 'David', role: 'admin' } ],
  vendedor: [ { username: 'valentina', role: 'vendedor' } ],
  customer: [ { username: 'daniel', role: 'customer' } ]


  {
  David: [ { username: 'David', role: 'admin' } ],
  valentina: [ { username: 'valentina', role: 'vendedor' } ],
  daniel: [ { username: 'daniel', role: 'customer' } ]
}

Muy seguramente React, Angular tienen estas librerias incorporadas
 */
