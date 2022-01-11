import './App.css';
import Header from './Components/header';
import Footer from './Components/footer';
import TodoForm from './Components/todoForm';
import TodoList from './Components/todoList';

function App() {
  return (
    <div className="App">
      <Header/>
       <TodoForm/>
       <TodoList/>
      <Footer/>
    </div>
  );
}

export default App;
