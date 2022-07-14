import { useState } from "react"

const useFormulario = (inicial) => {
    const [formulario, setformulario] = useState(inicial)
    const handleChange = (e) => {
        setformulario({
        ...formulario,
        [e.target.name]: e.target.value
        })
    }

    const reset = () => {
        setformulario(inicial)
    }

    return [formulario, handleChange, reset]
}

export default useFormulario