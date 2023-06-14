import {createStore} from "redux";

const initialState = {
    name: "John Doe",
    age: 25
};

const reducer = (state = initialState, action) => {
        switch(action.type) {
        case "CHANGE_NAME":
            return {
                ...state,
                name: action.payload
            }
        case "CHANGE_AGE":
            return {
                ...state,
                age: action.payload
            }
        default:
            return state;
    }
    }

    const store = createStore(reducer);

    export default store;
