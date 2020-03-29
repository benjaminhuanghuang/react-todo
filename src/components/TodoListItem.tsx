import React from "react";
//
import "./TodoListItem.css";


export interface TodoListItemProps {
  todo: Todo; // Todo was defined in types.d.ts
  toggleTodo: ToggoleTodo;
}

export const TodoListItem: React.SFC<TodoListItemProps> = ({
  todo,
  toggleTodo
}) => {
  return (
    <li>
      <label className={todo.completed ? "complete" : undefined}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo)}
        />
        {todo.text}
      </label>
    </li>
  );
};
