
import './App.css';
import Header from './Components/header';
import Footer from './Components/footer';
import Todo from './Components/todo';
import AddTodo from './Components/addtodo';
import About from './Components/About';
import { useState } from 'react';
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'


function App() {
  let initTodo;
  if(localStorage.getItem("todos")==null){
    initTodo=[]
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"))
  }

  const [todos,setTodos]=useState(initTodo )
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  
  const onDelete=(todo)=>{
    console.log("I am on delete of todo:",todo)
    setTodos(todos.filter((e)=>{
        return e!==todo
    }))
  }

  const addnew=(newtitle,newdesc)=>{
    let snum
    if(todos.length===0){
      snum=0
    }
    else{
      snum=todos[todos.length-1].sno+1
    }
    
    const myTodo={
      sno:snum+1,
      title:newtitle,
      desc:newdesc
    }
    setTodos([...todos,myTodo])
    console.log(myTodo)

  }
  
  return (
    <>
    <Router>
    <Header title="TodoList" searchBar={true} />

    <Routes>
      <Route
        path="/"
        element={
          <>
            <AddTodo addnew={addnew} />
            <Todo todos={todos} onDelete={onDelete} />
          </>
        }
      />
      <Route path="/about" element={<About />} />
    </Routes>
    
    <Footer/>
    </Router>
    </>
    
  );
}

export default App;
