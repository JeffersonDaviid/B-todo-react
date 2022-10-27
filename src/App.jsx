import './App.css';
import ListaTareas from './components/ListaTareas';
import LogIn from './components/LogIn';

function App() {
  const openMenu = () => {
    document.querySelector('.login').classList.add('login__show');
  };
  return (
    <div className='App'>
      <LogIn />
      <h1 className='title' onClick={openMenu}>
        ToDo App <span className='Logo-X'>X</span> Jefferson
      </h1>
      <ListaTareas />
    </div>
  );
}

export default App;
