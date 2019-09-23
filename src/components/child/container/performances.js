import actions from './actions'

const mainPerformances = dispatch => {
    const onChangeName = name => dispatch(actions.changeNameAction(name))

    return {
        onChangeName
    }
}

export default mainPerformances
