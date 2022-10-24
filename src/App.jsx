import './App.css';
import ListaTareas from './components/ListaTareas';
import LogIn from './components/LogIn';

function App() {
  return (
    <div className='App'>
      <LogIn />
      <h1 className='title'>
        Todo App <span className='Logo-X'>X</span> Jefferson
      </h1>
      <ListaTareas />
    </div>
  );
}

export default App;
