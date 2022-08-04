const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const jugadores = [
    {nombre: 'Armani', posicion: 'Arquero', numero: '1'},
    {nombre: 'Perez', posicion: 'Mediocampista', numero: '5'},
    {nombre: 'Maidana', posicion: 'Defensor', numero: '4'},
    {nombre: 'Diaz', posicion: 'Defensor', numero: '2'},
    {nombre: 'Martinez', posicion: 'Defensor', numero: '6'},
    {nombre: 'Suares', posicion: 'Delantero', numero: '7'},
]

//const numerosFiltrados = numeros.filter( x => x > 2 & x< 8)
//console.log(numerosFiltrados)


//const numerosMultiplicados = numeros.map( x => x * 2)
//console.log(numerosMultiplicados)

//const posicionJugadores = jugadores.map( x => x.posicion)
//console.log(posicionJugadores)

//quiero mostrar los nombres de los defensores y su número

const jugadoresFiltrados = jugadores.filter( x => x.posicion == 'Defensor')
const nombresJugadores = jugadoresFiltrados.map( x => [x.nombre, x.numero])
console.log(nombresJugadores)

//quiero mostrar los nombres de los delanteros y su número

const jugadoresFiltrados2 = jugadores.filter( x => x.posicion == 'Delantero')
const nombresJugadores2 = jugadoresFiltrados2.map( x => [x.nombre, x.numero])
console.log(nombresJugadores2)
