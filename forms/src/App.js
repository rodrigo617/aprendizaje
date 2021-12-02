// como utilizar multiples inputs y estos guardarlos dentro de la misma propiedad del estado
// (useState) y como darle un valor inicial a cada uno de los campos 

import { useState} from 'react' //importo un hook
const App = () => {
    const [value, setValue] = useState ({normal: 'por defecto', texto:'', select: '' }) //uso un objeto literal para utilizar mas de un campo a rellenar
    const handleChange = (e) => {
        //setValue(e.target.value) //cada vez que actualizo este valor, gatillo un nuevo render
        setValue({ 
            ...value,
            [e.target.name]: e.target.value 
        })//propiedad dinamica que toma el valor del campo que modifique
    }
    console.log(value)
    return (
        <div>
            {value.length < 5 ? <span> longitud minima de 5</span> : null}
            <input type='text' name='normal' value={value.normal} onChange={handleChange} />
            <textarea name='texto' onChange={handleChange} value={value.texto} />

            <select value={value.select} name='select' onChange={handleChange}>
                <option value=''>-- Seleccione -- </option>
                <option value='chanchofeliz'>Chancho feliz </option>
                <option value='chanchitofeliz'>Chanchito feliz</option>
                <option value='chanchitotriste'>Chanchito triste</option>
            </select>
        </div>
    )
}

export default App