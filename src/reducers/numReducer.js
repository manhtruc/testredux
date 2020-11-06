const numInitialState = ['desktop ', 'mouse ', 'keyboard ']
const numReducer = (state = numInitialState, action) => {
    switch (action.type) {
        case "add_item":
            return [...state, action.newItem]

        case "delete_item":
            return state.filter((value, key) => key !== action.index)
        default:
            return state
    }
}
export default numReducer;