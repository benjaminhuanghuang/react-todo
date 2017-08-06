
## Parent component to sub component
  In parent
  ```
  <TodoList todos={this.state.todos}/>
  ```
  In sub component, assess the data by using "props"
  ```
  export const TodoList =(props)=> {
    return (
        <div className="Todo-List">
            <ul>
                {props.todos.map(todo=> <li key={todo.id}> {todo.name} </li>)}
            </ul>
        </div>     
    )
  }
  ``` 

## Sub component to parent component
  Bind event handler in parent component to sub component
  In parent
  ```
  handleInputChange = (evt)=>{
      this.setState({
        currentTodo: evt.target.value
      });
  }

  <TodoForm handleInputChange={this.handleInputChange}></TodoForm>
  ```
  In sub component, bind event handler
  ```
  export const TodoForm =(props)=> (
    <form onSubmit={props.handleSubmit}>
        <input type="text" onChange={props.handleInputChange} value={props.currentTodo}/>
    </form>)
  ``` 