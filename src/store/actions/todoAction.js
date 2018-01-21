export default class TodoAction {

    static ADD_TODO = 'ADD_TODO'
    static DEL_TODO = "DEL_TODO"

    static addTodo(value){
        return{
            type :  "ADD_TODO",
            payload : value
        }
    }
    static _editTodo(value,index){
        return{
            type :  "EDIT_TODO",
            payload : {
                value : value,
                index :index
            }
        }
    }
    static delTodo(index){
        return{
            type :  "DEL_TODO",
            payload : index

        }
    }
    static allDelete(index){
        return{
            type :  "ALL_DELETE",

        }
    }

}