import {addTodo, findById} from './todoHelpers'

test('addTodo should add the passed todo to the list', ()=>{
    const startTodos =[
        {id:1, name:"one", isComplete:false},
        {id:1, name:"two", isComplete:false}
    ]

    const newTodo = {id:3, name:"three", isComplete:false}

    const expected =[
        {id:1, name:"one", isComplete:false},
        {id:1, name:"two", isComplete:false},
        {id:3, name:"three", isComplete:false}
    ]

    const result = addTodo(startTodos, newTodo)

    expect(result).toEqual(expected)
    //expect(result).not.toBe(startTodos)
})

test('addTodo should not mutate the existing todo array', ()=>{
    const startTodos =[
        {id:1, name:"one", isComplete:false},
        {id:1, name:"two", isComplete:false}
    ]

    const newTodo = {id:3, name:"three", isComplete:false}

    const expected =[
        {id:1, name:"one", isComplete:false},
        {id:1, name:"two", isComplete:false},
        {id:3, name:"three", isComplete:false}
    ]

    const result = addTodo(startTodos, newTodo)

    expect(result).not.toBe(startTodos)   // startTodos and result should not be same array
})

test('findById should return the expected item from an array', ()=>{
    const startTodos =[
        {id:1, name:"one", isComplete:false},
        {id:2, name:"two", isComplete:false},
        {id:3, name:"three", isComplete:false}
    ]
    const expected =  {id:2, name:"two", isComplete:false}
    const result = findById(2, startTodos)
    expect(result).toEqual(expected)
})

test.skip('toggleTodo should toggle the isComplete prop of a todo', ()=>{
     expect(1).toEqual(1)
})

test.skip('toggleTodo should not mutate the original todo', ()=>{
})

test.skip('updateTodo should update an item by Id', ()=>{
})

test.skip('updateTodo should  should not mutate the original array', ()=>{

})