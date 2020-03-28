import React from 'react'
//
import "./TodoListItem.css"
export interface TodoListItemProps {
  todo: Todo;  // Todo was defined in types.d.ts
}

export const TodoItem: React.SFC<TodoListItemProps> = ({todo}) => {
  return (
    <li>
      <label className ={todo.complete? "complete": undefined}>
        <input type="checkbox" checked={todo.complete}/>
        {todo.text}
      </label>
    </li>
    );
};
