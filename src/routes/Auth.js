import React, {useContext, useEffect, useState} from 'react'
import {Navigate} from 'react-router-dom'
import UserContext from '../context/User/UserContext'


//                  props = todas las propiedades que yo le ponga en <Register /> que yo le ponga al Router.js
//                  component: Component --> extraer los componentes de Register todo lo que esta dentro del returen (<></>)
export default function AuthRoute({ component: Component, ...props }) {
    const userCtx = useContext(UserContext)
    
    const { authStatus, verifyingToken } = userCtx

    //loading es el spiner 🔴 
    const [loading, setLoading] = useState(true)

    useEffect( () => {
         verifyingToken()
        setLoading(false)

    }, [authStatus])

    return (
		<>
                {/* si el usuario esta logeado que pase esto, sino abreme el componente */}
			{	authStatus ?	(<Navigate replace to="/" />)	:	(<Component/>) }
		</>
    )
    
}