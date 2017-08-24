import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import TODO from '../component/todo.jsx'
import { connect } from 'react-redux'
import TodoAction from '../store/actions/todoAction.js'
import addTodo from '../store/reducers/addTodo.js'

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

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to my React Redux Todo </h2>
        </div>
        <p className="App-intro">
          <TODO List={this.props.todoItem} todoValue={this.todoValue.bind(this)} allDelete={this.allDelete.bind(this)} delete={this.deleteTodo.bind(this)} />
        </p>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
