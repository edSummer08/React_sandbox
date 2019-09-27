import React, { useState, useReducer, useEffect } from 'react';

const initialState = { count: 0 } 

function reducer (state, action) {
    switch(action.type) {
        case 'INCREMENT':
            return {count: state.count + 1}
        case 'DECREMENT':
            return {count: state.count - 1}
        default:
            throw new Error()
    }
}

export function CounterWithUseReducer() {
    const [ state, dispatch ] = useReducer(reducer, initialState)

    return (
        <div>
            <p>{state.count}</p>
            <button onClick={() => dispatch({ type: 'DECREMENT'})}>-</button>
            <button onClick={() => dispatch({ type: 'INCREMENT'})}>+</button>
        </div>
    )
}

export function CounterWithUseState() {
    const [ count, setCount ] = useState(0)

    useEffect(() => {
        document.title = `You clicked ${count} times`
    })

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>
                Click me! 
            </button>
        </div>
    )
}
