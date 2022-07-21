//import { useContext } from 'react'
//import { context } from '../context/authContext'


import { useAuth } from "../context/authContext"

export function Home() {

    const {user, logout, loading, error} = useAuth()

    //const authContext = useContext(context)
    const handleLogout = async() => {
        try {
            await logout()
        } catch {
            console.error(error)
        }
    }
    console.log(user)

    if (loading) return <h1>loading..</h1>
    return (
        <div>
            <h1>Welcome {user.displayName || user.email}</h1>

            <button onClick={handleLogout}>
                logout
            </button>
        </div>
    )
}

export default Home