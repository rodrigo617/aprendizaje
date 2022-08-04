const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const jugadores = [
    {nombre: 'Armani', posicion: 'Arquero', numero: '1'},
    {nombre: 'Perez', posicion: 'Mediocampista', numero: '5'},
    {nombre: 'Maidana', posicion: 'Defensor', numero: '4'},
    {nombre: 'Diaz', posicion: 'Defensor', numero: '2'}
]

const numerosFiltrados = numeros.filter( x => x > 2 & x< 8)
//console.log(numerosFiltrados)

const jugadoresFiltrados = jugadores.filter( x => x.posicion == 'Defensor')
console.log(jugadoresFiltrados)

