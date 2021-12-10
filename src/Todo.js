import React from 'react'

function Todo({todo,toggleStatus}) {

function toggleTodoStatus(){
	toggleStatus(todo.id)
}

	return (
<div>
	<label>
		<input type="checkbox" onChange={toggleTodoStatus} checked={todo.complete} />
		{todo.name}
	</label>
	
</div>
        
      
	)
}

export default Todo;