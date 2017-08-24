import {createStore} from 'redux'
import addTodo from './reducers/addTodo.js'
let store = createStore(addTodo);

store.subscribe(()=>{

    console.log(store.getState(),"store")

})
export default store;