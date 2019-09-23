export const types = {
    setNewName: 'SET_NEW_NAME',
    clearName: 'CLEAR_NAME',
    addName: 'ADD_NAME'
}

const actions = {
    changeNameAction: payload => ({
        type: types.setNewName,
        payload
    })
}

export default actions 
