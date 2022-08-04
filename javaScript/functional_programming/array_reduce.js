// suma de todos los elementos de un arreglo

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const resultado = numeros.reduce((acc, el) => acc + el, 0)
//console.log(resultado)

//indexar el arreglo para mejorar la performance de la búsqueda
const jugadores = [
    {nombre: 'Armani', posicion: 'Arquero', numero: '1'},
    {nombre: 'Perez', posicion: 'Mediocampista', numero: '24'},
    {nombre: 'Diaz', posicion: 'Defensor', numero: '2'},
    {nombre: 'Maidana', posicion: 'Defensor', numero: '4'},
    {nombre: 'Zuculini', posicion: 'Mediocampista', numero: '5'},
]
const indexed = jugadores.reduce((acc, el) => ({
    ...acc,
    [el.posicion]: el,
}), {})

console.log(indexed)

//para dejar plano un arreglo

const arreglo = [1, 2, [3, 4], 5, ['perro', 'gato', 'pollo'], 7, 8, 9]

const plano = arreglo.reduce((acc, el) => acc.concat(el), [])
console.log(plano)