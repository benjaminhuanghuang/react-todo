import React from 'react'

export const TodoForm =(props)=> (
    <form action="">
        <input type="text" onChange={props.handleInputChange} value={props.currentTodo}/>
    </form>)


TodoForm.propTypes = {
    currentTodo : React.PropTypes.string.isRequired,
    handleInputChange : React.PropTypes.func.isRequired
}