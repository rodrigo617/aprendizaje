import { useState } from "react"

const useFormulario = (inicial) => {
    const [formulario, setformulario] = useState(inicial)
    const handleChange = (e) => {
        setformulario({
        ...formulario,
        [e.target.name]: e.target.value
        })
    }

    return [formulario, handleChange]
}

export default useFormulario