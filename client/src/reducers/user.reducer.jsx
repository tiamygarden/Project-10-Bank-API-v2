const initialState = {
    email: "   ",
    password: "   ",
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_USER":
            return {
                ...state,
                email: action.payload.email,
                password: action.payload.password,
            }
        default:
            return state
    }
}
