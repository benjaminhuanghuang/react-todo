 export const addTodo = (list, item) => {
    //list.push(item)
    //return list       // Failed on test2
    
    return [...list, item]   // equals to return list.concat(item)
 }