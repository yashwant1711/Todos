import { createContext, useContext } from "react";

export const TodosContext = createContext({
    todos : [
        {
            id : 1,
            todo : "To do message",
            completed : false,
        }
    ],
    addTodo : (todo) => {},
    updateTodo : (id, todo) => {},
    deleteTodo : (id) => {},
    toogleComplete : (id) => {}
})



export const useTodo = () =>{
  return  useContext(TodosContext)
}


export const Todoprovider = TodosContext.Provider