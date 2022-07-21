import { useState } from "react"
import { useAuth } from "../context/authContext"
import { useNavigate } from "react-router-dom"
import { Alert } from "./Alert"


export function Register() {

    const [user, setUser] = useState ({
        email: '',
        password: '',
    })
    
    const { singup } = useAuth()
    const navigate = useNavigate()
    const [error, setError] = useState()


    //actualizar el estado
    const handleChange = ({target:{name, value}}) => {
        setUser({...user, [name]: value})
        singup(user.email, user.password)
    }

    //visualizar el estado
    const handleSubmit = async e => {
        e.preventDefault() //para que no se refresque la página
        setError('')
        try {
            await singup(user.email, user.password)
            navigate('/') //si no ocurrió un error continua en Navegate a home

        } catch (error){
                setError(error.message)

        }

    }
    return (
        <div>
            {error && <Alert message={error} />}
            <form onSubmit={handleSubmit}>
            <label htmlFor='email'>Email</label>
            <input 
                type='email' 
                name='email' 
                placeholder="youremail@company.ltd" 
                onChange={handleChange}
            />

            <label htmlFor='password'>Email</label>
            <input 
                type='password' 
                name='password' 
                placeholder="******" 
                onChange={handleChange}
            />

            <button>Register</button>
        </form>
        </div>
    )
}