import React, { useContext } from 'react'
import StoreContext from '../../../context/Store/StoreContext'
import { useParams } from 'react-router-dom'

const SingleStore = () => {

    const ctx = useContext(StoreContext)
    const { getStore, singleStore } = ctx // StoreState.js

    const params = useParams()
    const id = params.id
    //console.log(params, id) //{id: '61ba1b01dae493ac19bd1ac9'} // '61ba1b01dae493ac19bd1ac9'

    return (
		<div>
			Página individual de Tiendas			


			<button onClick={() => { getStore(id) }}>
				Obtener tienda individual
			</button>

            <h1>Tienda ID: {singleStore._id} </h1>
            <p> {singleStore.domicilio} </p>
            <p> {singleStore.telefono} </p>

		</div>
    )
}

export default SingleStore