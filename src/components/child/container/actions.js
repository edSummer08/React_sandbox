export const types = {
    setNewName: 'SET_NEW_NAME',
    clearName: 'CLEAR_NAME',
    addName: 'ADD_NAME',

    getPostsSuccess: 'GET_POSTS_SUCCESS'
}

const actions = {

    changeNameAction: name => ({
        type: types.setNewName,
        payload: name
    }),

    getPostsSuccess: posts => ({
        type: types.getPostsSuccess,
        payload: posts
    })
}

export default actions 
