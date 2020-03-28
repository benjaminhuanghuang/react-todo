import React, { useState, useCallback, useRef } from "react";

interface Todo {
  id: string;
  complete: boolean;
}

export interface TodoListProps {
  removeTodo: any;
  removeTodo: any;
  todos: any;
}

interface ControlProps {
  addTodo: any;
}

let idSeq = Date.now();

function Control(props: ControlProps) {
  const { addTodo } = props;
  const inputRef = useRef();

  const onSubmit = e => {
    e.preventDefault();
    const newText = inputRef.current.value.trim();

    if (newText.length === 0) {
      return;
    }

    addTodo({
      id: ++idSeq,
      text: newText,
      complete: false
    });

    inputRef.current.value = "";
  };

  return (
    <div className="control">
      <h1>Todos</h1>
      <form action="">
        <input
          type="text"
          ref={inputRef}
          className="new-tod"
          placeholder="Iput"
        />
      </form>
    </div>
  );
}

function Todos(props: any) {
  const { todos, toggleTodo, removeTodo } = props;
  return (
    <ul>
      {todos.map(todo => {
        return (
          <TodoItem>
            key={todo.id} 
            todo={todo}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}>
          </TodoItem>
        );
      })}
    </ul>
  );
}

export interface TodoItemProps {
  todo:any;
  toggleTodo:any;
  removeTodo:any;
}

export const TodoItem: React.FC<TodoItemProps> = (props) => {
  const {todo:{
    di, text, complete
  }, toggleTodo, removeTodo} = props

  const onChange=()=>{
    toggleTodo(id);
  }
  const onRemove=()=>{
    removeTodo(id);
  }
  return (
    <li>
      <input type="checkbox" onChange={onchange} checked={complete}></input>
      <label className={complete:}>{text}</label>
      <button onClick={onRemove}>&#xd7</button>
    </li>
    );
};

export const TodoAppHooks: React.SFC<TodoListProps> = props => {
  const [todos, setTodos] = useState([]);

  const addTodo = useCallback((todo: Todo) => {
    setTodos((todos: Todo[]) => [...todos, todo]);
  }, []);

  const removeTodo = useCallback((id: string) => {
    setTodos((todos: Todo[]) => todos.filter(todo => todo.id !== id));
  }, []);

  const toggleTodo = useCallback((id: string) => {
    setTodos((todos: Todo[]) =>
      todos.map(todo => {
        return todo.id === id ? { ...todo, complete: !todo.complete } : todo;
      })
    );
  }, []);

  return (
    <div className="todo-list">
      <Control addTodo={addTodo} />
      <Todos removeTodo={removeTodo} toggleTodo={toggleTodo} todos={} />
    </div>
  );
};
