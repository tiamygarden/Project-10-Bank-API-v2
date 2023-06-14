export const initialState = {
    total: 0,
}

export default function counterReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_INCREMENT":
            return {
                ...state,
                total: state.total + 1,
            }
        case "GET_DECREMENT":
            return {
                ...state,
                total: state.total - 1,
            }
        case "GET_RESET":
            return {
                ...state,
                total: 0,
            }
        default:
            return state
    }
}
