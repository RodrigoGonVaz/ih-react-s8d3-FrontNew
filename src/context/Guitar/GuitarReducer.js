

const reducer = (globalState, action) => {
    switch (action.type) {

        case "GET_GUITARS":
            return {
                ...globalState,
                guitars: action.payload //action = dispatch
            }
            
        case "GET_GUITAR":
        case "UPDATE_GUITAR":
            return {
                ...globalState,
                singleGuitar: action.payload //action = dispatch
            }

        case "CHANGE_TEXT":
            return {
                ...globalState,
                hola: action.payload //action = dispatch
            }



        default:
            return globalState
    }
}

export default reducer