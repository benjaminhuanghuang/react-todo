import React, { useState } from "react";
//
import { TodoListItem, TodoList, TodoForm } from "./components";
//
import "./App.css";

const initialTodos: Array<Todo> = [
  { text: "walk the dog", completed: true },
  { text: "Write app", completed: false }
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggoleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }
      return todo;
    });

    setTodos(newTodos);
  };

  const addTodo:AddTodo = (newTodo: string) => {
    newTodo.trim() !== "" && setTodos([...todos, {text:newTodo, completed: false}])
  } 

  return ( 
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <TodoForm addTodo={addTodo} />
    </>
  );
};

export default App;
