import React from 'react'
import Todo from "./Todo"

function Todolist({todos,toggleStatus}) {

	return (

			todos.map(function(todo){
				return <Todo key={todo.id} todo={todo} toggleStatus={toggleStatus} />
			})
		
	)
}

export default Todolist