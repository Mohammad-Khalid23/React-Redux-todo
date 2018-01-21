import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import TODO from '../component/todo.jsx'
import { connect } from 'react-redux'
import TodoAction from '../store/actions/todoAction.js'
import todoReducer from '../store/reducers/todoReducer'

function mapStateToProps(state) {
  return {
    todoItem: state
  }
}


function mapDispatchToProps(dispatch) {
  return {
    addTodo: function (value) {
      dispatch(TodoAction.addTodo(value))
    },
    delTodo: function (value) {
      dispatch(TodoAction.delTodo(value))
    },
    allDelete: function () {
      dispatch(TodoAction.allDelete())
    },
    editTodo: function (value,index) {
      dispatch(TodoAction._editTodo(value,index))
    }
  }
}
class App extends Component {
  //takek todo value
  todoValue(val) {
    this.props.addTodo(val)
  }
  //delete one todo
  deleteTodo(index) {
    this.props.delTodo(index)
  }
  //delete all todo
  allDelete() {
    this.props.allDelete()
  }
  editTodo(value,index){
    console.log(value,"value in app js edit")
    console.log(index," ind value in app js edit")
    this.props.editTodo(value,index)
  }

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <h2>React Redux Todo by Khalid Ayub</h2>
        </div>
        <div className="App-intro">
          <TODO List={this.props.todoItem} editTodo={this.editTodo.bind(this)} todoValue={this.todoValue.bind(this)} allDelete={this.allDelete.bind(this)} delete={this.deleteTodo.bind(this)} />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
