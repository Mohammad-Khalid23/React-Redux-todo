import {createStore} from 'redux'
import todoReducer from './reducers/todoReducer'
let store = createStore(todoReducer);

store.subscribe(()=>{

    console.log(store.getState(),"store")

})
export default store;