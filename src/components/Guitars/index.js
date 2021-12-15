
import React, { useEffect, useContext } from 'react'
import GuitarContext from '../../context/Guitar/GuitarContex'
import { Link } from "react-router-dom"


const Guitars = () => {

    //Estado Global
    const ctx = useContext(GuitarContext)
    //console.log(ctx) //{guitars: Array(0), hola: 'mundo'}
    

    const { guitars, hola, changeText, getGuitars } = ctx //<-- destruccturacion

    //Estado Local


    return (
		<>
			<p>Listado de guitarras</p>
			{/* <p>{ hola }</p>

			<button onClick={ () => { changeText() } }>
				Cambiar texto
			</button> */}

			<button onClick={() => { getGuitars() } }>
				Listar guitarras
			</button>

			<div>
				<h2>Listado de Guitarras</h2>

				<ul>
					{
						guitars.map((element) => {
							return (
								<li key={element._id}>
									<Link to={`/guitarras/${element._id}`}>
										<p>{element.nombre}</p>
									</Link>
									<p>{element.precio}</p>
								</li>
							)
						})
					}
				</ul>

			</div>

		</>
	)
}

export default Guitars
