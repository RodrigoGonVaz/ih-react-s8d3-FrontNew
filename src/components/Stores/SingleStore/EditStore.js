import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import StoreContext from '../../../context/Store/StoreContext'




const EditStore = () => {
    
    // 1. ESTADO GLOBAL
	const params = useParams()
	const idStore = params.id

	const ctx = useContext(StoreContext)

	const {
		getStore,
        updateStore 
	} = ctx

	const {
		domicilio,
        telefono,
	} = ctx.singleStore

	// 2. ESTADO LOCAL
	const [storeData, setStoreData] = useState({
		domicilio: "",
		telefono: ""
	})

	// 3. FUNCIONES
	useEffect(() => {
		// a. FUNCIÓN DE ACTUALIZACIÓN
		const updateLocalState = async () => {
			console.log(idStore)
			// 1. DESCARGAR LOS DATOS DE LA StoreRA DE LA PÁGINA
			await getStore(idStore)
			

			// 2. CAMBIAR EL ESTADO CON ESTOS NUEVOS CAMBIOS DEL GLOBAL AL LOCAL
			setStoreData({
                domicilio,
                telefono
			})

			// 3. RETURN Y CERRAMOS FUNCIÓN ASÍNCRONA
			return
		}
		    updateLocalState()
	}, [])

	const handleChange = (e) => {
		e.preventDefault()
		setStoreData({
			...storeData,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		updateStore(storeData, idStore)
	}


	return (
		<>
			<form onSubmit={(event) => { handleSubmit(event) }}>
				<div className="shadow sm:rounded-md sm:overflow-hidden">
					<div className="bg-white py-6 px-4 space-y-6 sm:p-6">
						<div>
							<h3 className="text-lg leading-6 font-medium text-gray-900">Personal Information</h3>
							<p className="mt-1 text-sm text-gray-500">Use a permanent address where you can recieve mail.</p>
						</div>

						<div className="grid grid-cols-6 gap-6">
							<div className="col-span-6 sm:col-span-3">
								<label for="first-name" className="block text-sm font-medium text-gray-700">Domicilio</label>
								<input
									onChange={ (event) => { handleChange(event) } } 
									type="text" 
									name="domicilio"
                                    value={storeData.domicilio}   
									className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
							</div>

							<div className="col-span-6 sm:col-span-3">
								<label for="last-name" className="block text-sm font-medium text-gray-700">Telefono (+52)</label>
								<input 
									onChange={ (event) => { handleChange(event) } } 
									type="number" 
									name="telefono"
                                    value={storeData.telefono} 
									className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
							</div>
                        </div>


							
					<div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
						<button type="submit" className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
							Guardar Tienda
						</button>
					</div>
                    </div>
				</div>
			</form>
		</>
	)
}

export default EditStore
