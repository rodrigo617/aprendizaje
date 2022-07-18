//import { useContext } from 'react'
//import { context } from '../context/authContext'

import { useAuth } from "../context/authContext"

export function Home() {

    const {user} = useAuth()

    //const authContext = useContext(context)

    console.log(user)

    return <div>home</div>
}

export default Home