import React,{useState,useRef,useEffect} from "react";
import Todolist from './Todolist'
import  './App.css'
import uuid from "uuid/dist/v4";
var l_key = "sdfdsfdsf454df"

function App() {

const [todos,setTodos] = useState([]);
const todoNameRef = useRef();
const storage = localStorage;



useEffect(function() {

  var oldTodos = JSON.parse(storage.getItem(l_key));
  setTodos(oldTodos)

},[])

useEffect(function(){

   localStorage.setItem(l_key, JSON.stringify(todos));

},[todos])




function handleNewTodo(){
var name =  todoNameRef.current.value;

if(name === "") return;

setTodos(function(preTodos){
  // console.log(preTodos)
  return [...preTodos,{id: uuid(), name: name,complete: false}]
})

todoNameRef.current.value = null
} 

function toggleStatus(id){
  var newTodos = [...todos];
  var todo = newTodos.find(todo => todo.id === id);
  todo.complete = !todo.complete;
  setTodos(newTodos);
}

function clearCompleted(){
  var newTodos = todos.filter(todo => !todo.complete);
  setTodos(newTodos);
}



  return ( 
<div>
  <Todolist  todos={todos}  toggleStatus = {toggleStatus}/>
  <input ref={todoNameRef} type="text" />
  <button onClick={handleNewTodo}>Add todo</button>
  <button onClick={clearCompleted}>Clear Completed</button>
  <div> you have  { todos.filter( todo => todo.complete).length}  todos completed</div>
</div>
  
  )
}

export default App;
