

//Estado Global - STORE 
//Todos los componentes en REACT van a tener acceso a al estado global
//La estructura que se utiliza para generar el estado global se le conoce como FLUX

//1.IMPORT
import { useReducer } from "react";
import axiosClient from "../../config/axios";
import GuitarContext from "./GuitarContex";
import GuitarReducer from "./GuitarReducer"




const GuitarState = (props) => {

    //Todo lo que tenga que ver con guitarras se guarda en este estado global
    //1.Initial State
        //Que se ejecute en todos los componentes
    const initialState = {
        guitars: [],
        singleGuitar: {
            _id: "",
            nombre: "",
            descripcion: "",
            color: "",
            precio: "",
            imagen: "",
        },
        hola: "mundo"
    }


    //2. Config de reducer y creacion del estado global- uso del Hook
    //Reducers son funciones que alteran el estado global
    //GuitarReducer son todas las funciones que van a alterar el estado global
    //dispatch es un asistente del reducer que manda los datos a la funcion del Reducer, y el reducer hace los cambios globales
    //Reducer necesita los datos y el dispatch se los manda 
    const [globalState, dispatch] = useReducer(GuitarReducer, initialState)



    //3.Funciones de cambio en estado Global
    //va a ejecutar un dispatch
    const changeText = () => {

        //Este objeto se le conoce como action en Reducer
        dispatch({
            type: "CHANGE_TEXT",
            //datos reales que cambia el estado global
            payload: "Estoy aprendiendo context sin morir"
        })

    }

    const getGuitars = async() => {
        //console.log("Obteniendo Guitarras....") <-- al darle click en comp./guit/index
        const res = await axiosClient.get("guitars/readall")
        console.log(res)
		
        const list = res.data.data
        console.log(list) 

		dispatch({
			type: "GET_GUITARS",
			payload: list
		})
    }

    const getGuitar = async(guitarId) => {

        const res = await axiosClient.get(`guitars/readone/${guitarId}`)
        //console.log(res) // {data: {…}, status: 200, statusText: 'OK', headers: {…}, config: {…}, …} se invoca en Single/index.js
        const selectedGuitar = res.data.data

        dispatch({
            type: "GET_GUITAR",
            payload: selectedGuitar
        })

    }

	const createGuitar = async (form) => {

		const res = await axiosClient.post("guitars/create", form)

		console.log(res) // {data: {…}, status: 200, statusText: 'OK', headers: {…}, config: {…}, …}

	}

    //4. Retorno
    return (
        <GuitarContext.Provider 
        value={{
            guitars: globalState.guitars,
            hola: globalState.hola,
            singleGuitar: globalState.singleGuitar,
            changeText,
            getGuitars,
            getGuitar,
            createGuitar
        }} >
                {/* Es la representacion de todos los componentes del router - Outlet(de estado global) */}
            {props.children}


        </GuitarContext.Provider>
    )

}

export default GuitarState