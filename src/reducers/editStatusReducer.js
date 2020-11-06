const editStatusInitialState = true
const editStatusReducer = (state = editStatusInitialState, action) => {
    switch (action.type) {
        case "change_status":
            return !state
        default:
            return state
    }
}

export default editStatusReducer;