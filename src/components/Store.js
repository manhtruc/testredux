import editStatusReducer from '../reducers/editStatusReducer'
import numReducer from '../reducers/numReducer'

var redux = require('redux')

// const oldState = {
//     num: ['desktop ', 'mouse ', 'keyboard '],
//     editStatus: true
// }

const allReducer = redux.combineReducers({
    num: numReducer,
    editStatus: editStatusReducer,
})


var store1 = redux.createStore(allReducer)
store1.subscribe(() => {
    console.log(JSON.stringify(store1.getState()));
})


store1.dispatch({
    type: "add_item",
    newItem: "cpu"
})


store1.dispatch({
    type: "change_status"
})


store1.dispatch({
    type: "delete_item",
    index: 1
})

export default store1;