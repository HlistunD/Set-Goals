import './App.css';
import { TodoList } from './TodoList';
import book from "./book.png"

function App() {
  return (
    <div className="App">
      <div className='general'>
      <h1 className='head'>Let's make your goal</h1>
      <TodoList/>
      <img className='image' src={book} alt="book" width="200px"/>
    </div>
    </div>
  );
}

export default App;
