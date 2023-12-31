import axios from "axios"

export const GET_USER = "GET_USER"

export const getUser = () => {
    return (dispatch) => {
        return axios
            .get("http://localhost:3001/api/v1/user")
            .then((res) => {
                console.log(res.data)
                dispatch({ type: GET_USER, payload: res.data })
            })
            .catch((err) => {
                console.log(err)
            })
    }
}
