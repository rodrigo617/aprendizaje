import { useState, useEffect } from "react"

// reglas de los hooks:
// no se llaman en loops, ni condiciones, ni while ni nada. Siempre en el nivel mas alto del componente.
// solo se llaman en 2 partes:
//      componentes de react
//      custom hooks
//      cuando se crea un custom hook, siempre debe iniciar con use*

// esto es un HOOK
const useContador = (inicial) => {
const [contador, setContador] = useState(inicial)
const incrementar = () => {
    setContador(contador + 1)
}

return [contador, incrementar]
}

const Interval = ({contador}) => {
useEffect(() => {
    const i = setInterval(() => console.log(contador), 1000)
    return () => clearInterval(i)
}, [contador])
return (
    <p>Intervalo</p>
)
}
const App = () => {
  const [contador, incrementar] = useContador(0) //llamando a mi custom hook
useEffect(() => {
    document.title = contador
},[contador])// contador es la variable de dependencia. El hook está atento a cada
  // cambio de estado de 'contador', por lo que ejecutará la función con cada cambio
return (
    <div>
    Contador: {contador}
    <button onClick={incrementar}>Incrementar</button>
    <Interval contador={contador} />
    </div>
)
}

export default useEffect