export const GET_INCREMENT = "GET_INCREMENT"
export const GET_DECREMENT = "GET_DECREMENT"
export const GET_RESET = "GET_RESET"

export const increment = () => {
    return (dispatch) => {
        dispatch({
            type: "GET_INCREMENT",
        })
    }
}

export const decrement = () => {
    return (dispatch) => {
        dispatch({
            type: "GET_DECREMENT",
        })
    }
}

export const reset = () => {
    return (dispatch) => {
        dispatch({
            type: "GET_RESET",
        })
    }
}
