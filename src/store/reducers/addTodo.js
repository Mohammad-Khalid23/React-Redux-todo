import TodoAction from '../actions/todoAction.js'

function addTodo(state = [], action) {
    // console.log(action.val)
    // console.log(action.type)
    // console.log(state.todoList,"reducer")
    
    switch (action.type) {
        case "ADD_TODO":
            // return Object.assign({}, state, { todoList:state.todoList.action.val })
        return [
            ...state,{
                todoList : action.val
            }
        ]
        case "DEL_TODO":
        state.splice(action.val,1)
        return state

            case "ALL_DELETE" :
            state.splice(0)
            return state

            default:
        return state
    }

}
export default addTodo;