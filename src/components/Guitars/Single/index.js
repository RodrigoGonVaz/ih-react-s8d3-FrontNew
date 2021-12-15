import React, { useContext } from 'react'
import GuitarContext from '../../../context/Guitar/GuitarContex'
import { useParams } from 'react-router-dom'

const Single = () => {

    const ctx = useContext(GuitarContext)
    const { getGuitar, singleGuitar } = ctx

    const params = useParams()
    const id = params.id
    //console.log(params, id) //{id: '61ba1b01dae493ac19bd1ac9'} // '61ba1b01dae493ac19bd1ac9'

    return (
		<div>
			Página individual de guitarra			


			<button onClick={() => { getGuitar(id) }}>
				Obtener guitarra individual
			</button>

            <h1> {singleGuitar.nombre} </h1>
            <p> {singleGuitar.descripcion} </p>
            <p> {singleGuitar.precio} </p>

		</div>
    )
}

export default Single
