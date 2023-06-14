import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, reset } from "../actions/counter.action.jsx"
import MainLayout from "../layouts/MainLayout.jsx"

const Counter = () => {
    const dispatch = useDispatch()
    const total = useSelector((state) => state.counter.total)

    return (
        <MainLayout>
            <div className="App">
                <h1>{total}</h1>
                <button onClick={() => dispatch(increment())}>Increase</button>
                <button onClick={() => dispatch(reset())}>Reset</button>
                <button onClick={() => dispatch(decrement())}>Decrease</button>
            </div>
        </MainLayout>
    )
}

export default Counter
