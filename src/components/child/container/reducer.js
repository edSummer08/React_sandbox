import { types } from './actions'

export const reducer = (state, action) => {
    switch(action.type) {
        case types.setNewName:
            return {
                ...state,
                name: action.payload 
            }
        default:
            return state
    }
}

export default reducer
