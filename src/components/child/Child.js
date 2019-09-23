import React, { useContext } from 'react'
import MainContext from '../../MainContext'

const Child = () => {
    const value = useContext(MainContext)

    const handleInput = e => {
        value.onChangeName(e.target.value)
    }

    return (
        <div>  
            <p>My context name value is : {value.name}</p>
            <span>Enter some text</span>
            <input type="text" onChange={handleInput} />
        </div>
    )
}

export default Child
