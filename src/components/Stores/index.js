
import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import StoreContext from '../../context/Store/StoreContext'


const Stores = () => {

    //Estado Global
    const ctx = useContext(StoreContext)
    //console.log(ctx) //{guitars: Array(0), hola: 'mundo'}
    

    const { stores, mundo, changeText, getStores } = ctx //<-- destruccturacion

    //Estado Local
    useEffect(() => {
		getStores()
	},[]) 


    return (
        <>
			<div className="max-w-7xl mx-auto my-8 px-4 sm:px-6 lg:px-8" >
				<div className="md:flex md:items-center md:justify-between">
					<div className="flex-1 min-w-0">
						<h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
							Listado de Tiendas
						</h2>
					</div>
					<div className="mt-4 flex md:mt-0">
						<Link to="/tiendas/crear">
							<button type="button" className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
								Crear tienda
							</button>
						</Link>
					</div>
				</div>


				<div className="bg-white">
					<div>
						<div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

							{
								stores.map((element, i) => {
									return (
										<>
											<div key={i} className="">
												<div className="rounded-lg bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75">
													<Link to={`/tiendas/${element._id}`} >
													<img src="https://editorial01.shutterstock.com/wm-preview-1500/853967b/e221f591/the-guitar-store-has-a-store-front-painted-like-a-fender-amplifier-southampton-britain-shutterstock-editorial-853967b.jpg" alt="Imagen de guitarra" className="w-full h-full object-center object-cover" />
													</Link>
												</div>
												<div className="pt-10 pb-4 text-center">
													<h3 className="text-sm font-medium text-gray-900">
														<Link to={`/tiendas/${element._id}`} >
															{element.domicilio}
														</Link>
													</h3>
													<div className="mt-3 flex flex-col items-center">
														<p className="mt-1 text-sm text-gray-500">{element.telefono}</p>
													</div>
													<p className="mt-4 text-base font-medium text-gray-900">THE GUITAR STORE</p>
												</div>
											</div>
										</>
									)
								})
							}

						</div>

					</div>
				</div>
			</div>
		</>
    )
}

export default Stores


// https://editorial01.shutterstock.com/wm-preview-1500/853967b/e221f591/the-guitar-store-has-a-store-front-painted-like-a-fender-amplifier-southampton-britain-shutterstock-editorial-853967b.jpg