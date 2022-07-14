//COMPONENTES FUNCIONALES

// esta es una función pura, porque nunca cambia el valor de retorno
const MiComponente = ({ miProp }) => {
    return(
    <div>
        Nombre: {miProp}
    </div>
    )
}
const App = () => {
    return(
    <MiComponente miProp={'chanchito feliz'} />
    )
}

export default intro
