import React from 'react'

export interface TodoFormProps{

}
export const TodoForm: React.SFC<TodoFormProps> =(props)=> {
    return (
        <form onSubmit={props.handleSubmit}>
        <input type="text" onChange={props.handleInputChange} value={props.currentTodo}/>
    </form>)
}
   
