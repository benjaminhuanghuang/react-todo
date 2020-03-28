import React, { useState } from "react";
import { TodoForm } from "./TodoForm";

interface Todo {
  id: string;
  complete: boolean;
}
export interface TodoListProps {}

export const TodoList: React.SFC<TodoListProps> = props => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo: Todo) => {
    setTodos((todos: Todo[]) => [...todos, todo]);
  };
  const removeTodo = (id: string) => {
    setTodos((todos: Todo[]) => todos.filter(todo => todo.id !== id));
  };
  const toggleTodo = useCallback((id: string) => {
    setTodos((todos: Todo[]) =>
      todos.map(todo => {
        return todo.id === id ? { ...todo, complete: !todo.complete } : todo;
      })
    );
  }, []);

  return (
    <div className="todo-list">
      <TodoForm addTodo={addTodo} />
      <Todos removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </div>
  );
};
function Todos() {
  return <div></div>;
}
