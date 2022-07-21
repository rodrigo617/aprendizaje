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
        <div className="w-full max-w-xs m-auto text-black">
            <div className="bg-white rounded shadow-md px-5 pt-6 pb-8 mb-4">
                <h1 className="text-xl mb-4">Welcome {user.displayName || user.email}</h1>
                <img className="rounded mb-3" src={user.photoURL}></img>
                <button className="bg-slate-200 hover:bg-slate-300 rounded py-2 px-4"onClick={handleLogout}>logout</button>
            </div>
        </div>
    )
}

export default Home