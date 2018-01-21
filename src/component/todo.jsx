import React, { Component } from 'react'
import store from '../store/index.js'


const style = {
    li: {
        listStyle: "none"
    }
    , button: {
        borderRadius: "5px",
        padding: "4px 10px",
        border: "none",
        margin: "5px",
        color: "whiteSmoke",
        backgroundColor: "#222"
    },
    input: {
        padding: "5px",
        borderRadius: "8px"
    },
    redBtn: {
        borderRadius: "5px",
        padding: "4px 10px",
        border: "none",
        margin: "5px",
        color: "whiteSmoke",
        backgroundColor: "#ff4e4e"
    },
    greenBtn: {
        borderRadius: "5px",
        padding: "4px 10px",
        border: "none",
        margin: "5px",
        color: "whiteSmoke",
        backgroundColor: "green"
    },
    p: {
        width: "30%",
        border: "1px solid grey",
        margin: "0 auto",
        borderRadius: "8px",
        marginBottom: "8px",
        boxShadow: "8px 8px 5px #888888"

    }
}

class TODO extends Component {
    constructor() {
        super();
        this.state = {
            currentTodo: '',
            showEditButton: false,
            indexValue:''
        }
    }
    componentWillMount() {
        console.log("mount")
        this.setState(this.props.List)
        localStorage.setItem("todo", JSON.stringify(this.state))

    }
    takeTodo() {
        if (this.state.currentTodo === '') {
            alert("Please Write Something")
        } else {
            this.props.todoValue(this.state.currentTodo)
            this.state.currentTodo = ''

        }

    }
    saveTodo() {
            this.props.editTodo(this.state.currentTodo,this.state.indexValue)
            this.setState({
                currentTodo:'',
                showEditButton:false
            })

        }
    deleteTodo(index) {
        this.props.delete(index)
    }
    editTodo(index) {
        console.log(this.props.List[index].todoList, "list value")
        this.setState({
            currentTodo: this.props.List[index].todoList,
            indexValue: index,
            showEditButton:true
        })
    }
    allDelete() {
        alert("Deleting All...")
        this.props.allDelete();
    }
    render() {
        store.subscribe(() => {
            this.setState(store.getState())
        })



        return (
            <div>
                <input style={style.input} value={this.state.currentTodo} placeholder="ADD TODO" type="text" onChange={(e) => {
                    this.setState({
                        currentTodo: e.target.value
                    })
                }} />
                <br />
                {this.state.showEditButton ?
                    <button style={style.button} onClick={this.saveTodo.bind(this)}>SAVE</button> :
                    <button style={style.button} onClick={this.takeTodo.bind(this)}>ADD</button>
                }
                <br /> <button style={style.redBtn} onClick={this.allDelete.bind(this)}>ALL DELETE</button>
                {
                    this.props.List.map((data, index) => (
                        <p style={style.p} >
                            <li style={style.li} key={index}>{data.todoList}<br />
                                <button onClick={this.deleteTodo.bind(this, index)} style={style.redBtn}>Delete</button>
                                <button onClick={this.editTodo.bind(this, index)} style={style.greenBtn}>Edit</button>

                            </li>

                        </p>

                    ))
                }
            </div>

        )
    }
}
export default TODO;