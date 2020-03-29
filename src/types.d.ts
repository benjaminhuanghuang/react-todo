type Todo = {
  text: string;
  completed: boolean;
};

type ToggoleTodo = (selectedTodo: Todo) => void;

type AddTodo = (newTodo:string)=>void;