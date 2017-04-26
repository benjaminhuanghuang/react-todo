 export const addTodo = (list, item) => {
     //list.push(item)
     //return list       // Failed on test2

     return [...list, item] // equals to return list.concat(item)
 }

 export const generateId = () => Math.floor(Math.random() * 100000)

 export const findById = (todoId, list) => list.find(item => item.id === todoId)

 export const toggleTodo = (todo) => ({ ...todo,
     isComplete: !todo.isComplete
 })

 export const updateTodo = (list, updated) => {
     const updatedIndex = list.findIndex(item => item.id === updated.id)
     return[
         ...list.slice(0, updatedIndex),
         updated,
         ...list.slice(updatedIndex+1),
     ]
 }