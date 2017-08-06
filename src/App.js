import React, { Component } from 'react';
import logo from './logo.svg';
//
import './App.css';
import {TodoForm, TodoList} from './components/todo'
import {addTodo, generateId, findByIe, toggleTodo, updateTodo} from './lib/todoHelpers'


class App extends Component {
  state = {
        currentTodo:'',
        todos:[
          {id:1, name:"Learning JSX", isComplete:true},
          {id:2, name:"Build App", isComplete:false},
          {id:3, name:"Ship It", isComplete:false}
        ]
    }

  // constructor(){
  //   super()
  // }

  // Property initializer syntax, avoid bind methods to this
  handleToggle = (id)=>
  {
    const todo = findByIe(id, this.state.todos)
    const toggled = toggleTodo(todo)
    const updatedTodos = updateTodo(this.state.todos, toggled)

    this.setState({
      todos : updatedTodos
    })
  }
  handleInputChange = (evt)=>{
      this.setState({
        currentTodo: evt.target.value
      });
  }

  handleSubmit = (evt)=>{
    evt.preventDefault()
    const newId = generateId()
    const newTodo = {id: newId, name:this.state.currentTodo, isComplete:false}
    const updatedTodos = addTodo(this.state.todos, newTodo)

    this.setState({
      todos: updatedTodos,
      currentTodo: "",
      errorMessage: ""
    })  
  }

  handleEmptySubmit = (evt) =>{
     evt.preventDefault()
     this.setState(
       {
         errorMessage: "Please supply a todo name."
       }
     )
  }
  render() {
    const submitHandler = this.state.currentTodo?this.handleSubmit: this.handleEmptySubmit
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
          <div className="Todo-App">
            {this.state.errorMessage && <span className="error">{this.state.errorMessage}</span>}
            <TodoForm handleInputChange={this.handleInputChange} 
                      currentTodo={this.state.currentTodo}
                      handleSubmit={submitHandler}></TodoForm>
            <TodoList todos={this.state.todos} handleToggle={this.handleToggle}/>
          </div>
      </div>
    );
  }
}

export default App;
