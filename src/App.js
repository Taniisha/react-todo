import './App.css';
import Header from './MyComponents/Header'; //with export default
import Footer from './MyComponents/Footer'; //function name and separately export default
import {Todos} from './MyComponents/Todos'; //when exporting without 'default',component must be inside '{}'
import React,{useEffect, useState} from 'react';
import AddTodo from './MyComponents/AddTodo';
import About from './MyComponents/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {

    if (localStorage.getItem("todos") === null){
      var initTodo = [] 
    }else{
      initTodo = JSON.parse(localStorage.getItem("todos"))
    }

  const onDelete = (todo) => {
    console.log("deleted",todo)
    setTodos(
      todos.filter((item)=>{
        return item !== todo
      })
    )
    localStorage.setItem("todos",JSON.stringify(todos)) 
  }

  const addTodo = (title,desc) => {
    console.log("adding ",title,desc)
    if (todos.length == 0){
      var sno  = 1
    }else{
      sno = todos[todos.length - 1].sno + 1
    }
    const newTodo = {
      "sno":sno,
      "title":title,
      "desc":desc
    }

    setTodos([...todos,newTodo])    // sometimes, executing such useState update functions take time to finish, and the programme skips to next statement
    //the solution to this problem is useEffect hook
  }
  
  const [todos, setTodos] = useState(initTodo)
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])   //[todos] indicate that everytime todos object is changed, this effect will perform

  return (
    <>
      <Router>
        <Header title={"Todo List"} searchbar={true}/>  {/* The value off attribute would be a JSX element, therefore placed inside {} */}
        <Routes>
          <Route path='/' element={
              <>
                <AddTodo addTodo={addTodo}/>
                <Todos todos={todos} onDelete={onDelete}/>
              </>
            
          }>
          </Route>
          <Route path='/about' element={
            <About/>
          }>
          </Route>  
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
