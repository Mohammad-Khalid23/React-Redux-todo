import TodoAction from '../actions/todoAction.js'

function todoReducer(state = [], action) {

    switch (action.type) {
        case "ADD_TODO":
            // return Object.assign({}, state, { todoList:state.todoList.action.val })
            return [
                ...state, {
                    todoList: action.payload
                }
            ]
        case "DEL_TODO":
            state.splice(action.payload, 1)
            return state
        case "EDIT_TODO":
            // state = state.splice(action.payload.index, 1, action.payload.value)
            state[action.payload.index] ={todoList : action.payload.value}
            // temp = {asd:"121212121"}
            console.log(state, "state in edit reducer")
            return state
        case "ALL_DELETE":
            state.splice(0)
            return state

        default:
            return state
    }

}
export default todoReducer;