import {useState} from "react"
import './App.css';
import Header from './Components/header';
import Footer from './Components/footer';
import TodoForm from './Components/todoForm';
import TodoList from './Components/todoList';

function App() {
  const [todoArr ,setTodoArr] = useState([])
  const [toggleBtn,setToggleBtn] = useState(false)
  const [todoData,setTodoData]= useState({todoTitle: "",todoDetails:""})
  const [todoEditID,setTodoEditID] = useState(null)
   
  const onEditItem = (editId)=>{
   setToggleBtn(true)
   const editTodo = todoArr.find( edTodo => editId === edTodo.todoId)
   setTodoData({todoTitle: editTodo.todoTitle,todoDetails:editTodo.todoDetails})
   setTodoEditID(editId)


  } 
 

  return (
    <div className="App">
      <Header/>
       <TodoForm 
       todoArrayFunc = {setTodoArr}
       todoArray={todoArr}
       toggleBtn={toggleBtn}
       todoData={todoData}
       todoEditID={todoEditID}
       setTodoData={setTodoData}
       setToggleBtn={setToggleBtn}
       />

       <TodoList
        todoItems = {todoArr}
        todoArrayFunc = {setTodoArr}
        onEditItem={onEditItem} 
        />
      <Footer/>
    </div>
  );
}

export default App;
