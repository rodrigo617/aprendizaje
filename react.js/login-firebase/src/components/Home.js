//import { useContext } from 'react'
//import { context } from '../context/authContext'

import { async } from "@firebase/util"
import { useAuth } from "../context/authContext"

export function Home() {

    const {user, logout, loading} = useAuth()

    //const authContext = useContext(context)
    const handleLogout = async() => {
        await logout()
    }
    console.log(user)

    if (loading) return <h1>loading..</h1>
    return (
        <div>
            <h1>Welcome {user.email}</h1>

            <button onClick={handleLogout}>
                logout
            </button>
        </div>
    )
}

export default Home