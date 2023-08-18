import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <header>
        <Link to="/home">Home</Link>

        <Routes>
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
