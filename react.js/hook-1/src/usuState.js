import { useState } from "react"

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

const App = () => {
  const [contador, incrementar] = useContador(0) //llamando a mi custom hook
return (
    <div>
    Contador: {contador}
    <button onClick={incrementar}>Incrementar</button>
    </div>
)
}

export default useState
