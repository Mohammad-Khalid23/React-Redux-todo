export default class TodoAction {

    static ADD_TODO = 'ADD_TODO'
    static DEL_TODO = "DEL_TODO"

    static addTodo(value){
        return{
            type :  "ADD_TODO",
            val : value
        }
    }
    static delTodo(index){
        return{
            type :  "DEL_TODO",
            val : index

        }
    }
    static allDelete(index){
        return{
            type :  "ALL_DELETE",

        }
    }

}