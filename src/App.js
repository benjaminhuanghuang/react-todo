import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm, TodoList} from './components/todo'
import {addTodo, generateId} from './lib/todoHelpers'


class App extends Component {
  constructor(){
    super();
    this.state = {
        currentTodo:'',
        todos:[
          {id:1, name:"Learning JSX", isComplete:true},
          {id:2, name:"Build App", isComplete:false},
          {id:3, name:"Ship It", isComplete:false}
        ]
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleInputChange(evt){
      this.setState({
        currentTodo: evt.target.value
      });
  }

  handleSubmit(evt){
    evt.preventDefault()
    const newId = generateId()
    const newTodo = {id: newId, name:this.state.currentTodo, isComplete:false}
    const updatedTodos = addTodo(this.state.todos, newTodo)

    this.setState({
      todos: updatedTodos,
      currentTodo: ""
    })  
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
          <div className="Todo-App">
            <TodoForm handleInputChange={this.handleInputChange} currentTodo={this.state.currentTodo}
                handleSubmit={this.handleSubmit}></TodoForm>
            <TodoList todos={this.state.todos}/>
          </div>
      </div>
    );
  }
}

export default App;
