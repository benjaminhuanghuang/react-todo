import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoListItem } from "./TodoListItem";


export interface TodoListProps {
  todos: Array<Todo>
  toggleTodo: ToggoleTodo
}

export const TodoList: React.FC<TodoListProps> = ({todos, toggleTodo}) => {
  
  return (
    <ul>
      {todos.map((todo:Todo)=>{
          return <TodoListItem todo={todo} toggleTodo ={toggleTodo}/>
      })}
    </ul>
  );
};