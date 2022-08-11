//the concept is to build large functions from small functions

// const _ = require('lodash')

// const  users = [
//     { id: 1, nombre: 'rodrigo', apellido: 'lopez'}
// ]

// const getNombreCompleto = (_users) => {
//     const primero = _users[0]
//     const capitalizados = {
//         nombre: _.upperFirst(primero.nombre),
//         apellido: _.upperFirst(primero.apellido),
//     }
//     return `${capitalizados.nombre} ${capitalizados.apellido}`
// }

// const x = getNombreCompleto(users)
// console.log(x)

const _ = require('lodash')
const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x)

const  users = [
    { id: 1, nombre: 'rodrigo', apellido: 'lopez'}
]

const head = x => x[0]
const capitalizaNombreYApellido = x => ({
    nombre: _.upperFirst(x.nombre),
    apellido: _.upperFirst(x.apellido,)
})
const generaNombre = x => `${x.nombre} ${x.apellido}`

// point free
const getNombreCompleto = compose(generaNombre, capitalizaNombreYApellido, head)

const x = getNombreCompleto(users)
console.log(x)