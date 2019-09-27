import React, { useContext, useEffect } from 'react'
import MainContext from '../../MainContext'

const Child = () => {
    const value = useContext(MainContext)

    // useEffect(() => {
    //     value.getPosts()
    // }, [])

    const handleInput = e => {
        value.onChangeName(e.target.value)
    }

    return (
        <div>  
            <p>My context name value is : {value.name}</p>
            <span>Enter some text</span>
            <input type="text" onChange={handleInput} />
            <p>
                <button onClick={() => value.getPosts()}>Get posts</button>
            </p>
            <ul>
                {value.posts.map(post => <li key={post.id}>{post.title}</li>)}
            </ul>
        </div>
    )
}

export default Child
