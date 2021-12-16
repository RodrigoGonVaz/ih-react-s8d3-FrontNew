// ./client/src/Router.js

// 1. IMPORTACIONES
import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Guitars from './components/Guitars'
import Single from './components/Guitars/Single'
import EditGuitar from './components/Guitars/Single/Edit'
import Home from './components/Home'
import Layout from './components/Layout'
import Stores from './components/Stores'
import SingleStore from './components/Stores/SingleStore'
import EditStore from './components/Stores/SingleStore/EditStore'
import GuitarState from './context/Guitar/GuitarState'
import StoreState from './context/Store/StoreState'
import CreateGuitar from './components/Guitars/Create'
import CreateStore from './components/Stores/CreateStore'
import UserState from './context/User/UserState'


  

// 2. FUNCIÓN
const Router = () => {
	
	return (
		<>
        <UserState>
            <StoreState>
                <GuitarState>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Layout />}>
                                {/* localhost:3000/ */}
                                <Route index element={<Home />} />
                                {/* localhost:3000/registro */}
                                <Route path="registro" element={<Register />} />
                                {/* localhost:3000/iniciar-sesion */}
                                <Route path="iniciar-sesion" element={<Login />} />
                                <Route path="guitarras" element={<Guitars />} />
                                {/* localhost:3000/guitarras/:id */}
                                <Route path="tiendas" element={<Stores />} />
                                {/* localhost:3000/guitarras/crear */}
                                <Route path="guitarras/crear" element={<CreateGuitar />} />
                                <Route path="tiendas/crear" element={<CreateStore />} />
                                <Route path="guitarras/:id" element={<Single />} />
                                <Route path="tiendas/:id" element={<SingleStore />} />
                                {/* localhost:3000/guitarras/:id/editar */}
                                <Route path="guitarras/:id/editar" element={<EditGuitar />} />
                                <Route path="tiendas/:id/editar" element={<EditStore />} />

                            </Route>
                        </Routes>
                    </BrowserRouter>
                </GuitarState>
            </StoreState>
        </UserState>
		</>
	)
}


// 3. EXPORTACIÓN
export default Router