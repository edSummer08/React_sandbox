import { types } from './actions'

export const initialValue = {
    name: 'Ed',
    posts: []
}

export const reducer = (state, action) => {
    switch(action.type) {
        case types.setNewName:
            return {
                ...state,
                name: action.payload 
            }
        case types.getPostsSuccess:
            return {
                ...state,
                posts: action.payload
            }
        default:
            return state
    }
}

export default reducer
