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
    p:{
        width:"30%",
        border:"1px solid grey",
        margin : "0 auto",
        borderRadius: "8px",
        marginBottom:"8px",
        boxShadow: "8px 8px 5px #888888"

    }
}

class TODO extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    componentWillMount() {
        console.log("mount")
        this.setState(this.props.List)
        localStorage.setItem("todo", JSON.stringify(this.state))

    }
    takeTodo() {
        if(this.refs.input.value === ''){
            alert("Please Write Something")
        }else{
            this.props.todoValue(this.refs.input.value)
        this.refs.input.value = ''
            
        }

    }
    deleteTodo(index) {
        this.props.delete(index)
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
                <input style={style.input} placeholder="ADD TODO" type="text" ref="input" />
                <br /><button style={style.button} onClick={this.takeTodo.bind(this)}>ADD</button>
                <br /> <button style={style.redBtn} onClick={this.allDelete.bind(this)}>ALL DELETE</button>
                {
                    this.props.List.map((data,index) => (
                        <p style={style.p} >
                            <li style={style.li} key={index}>{data.todoList}<br /><button onClick={this.deleteTodo.bind(this, index)} style={style.redBtn}>Delete</button>   </li>

                        </p>

                    ))
                }
            </div>

        )
    }
}
export default TODO;