import { useState } from "react"
import { useAuth } from "../context/authContext"
import { useNavigate } from "react-router-dom"
import { Alert } from "./Alert"
import { Link } from "react-router-dom"


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
        <div className="w-full max-w-xs m-auto">
            {error && <Alert message={error} />}
            <form onSubmit={handleSubmit} className="bg-white 
            shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4"> 
                <label htmlFor='email'>Email</label>
                <input 
                    type='email' 
                    name='email' 
                    placeholder="youremail@company.ltd" 
                    className="shadow appearence-none border rounded
                    w-full py-2 px-3 text-gray-700 leading-tight
                    focus:outline-none focus:shadow-outline" 
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label htmlFor='password'>Email</label>
                <input 
                    type='password' 
                    name='password' 
                    placeholder="******" 
                    className="shadow appearence-none border rounded
                    w-full py-2 px-3 text-gray-700 leading-tight
                    focus:outline-none focus:shadow-outline" 
                    onChange={handleChange}
                />
            </div>

            <button className="bg-blue-500 hover:bg-blue-700 
            text-white text-sm font.bold py-2 px-4 rounded
            focus:outline-none focus:shadow-outline">Register</button>
        </form>

        <p className="my-4 text-sm flex justify-between px-3">Already have an Account? <Link to='/login'>Login</Link></p>

        </div>
    )
}