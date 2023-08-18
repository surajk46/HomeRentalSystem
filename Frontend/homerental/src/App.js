import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/HomeFunc';
import LogInComp from './components/LogInComp';
import HomeFunc from './components/HomeFunc';
import TenantReg from './components/TenantReg';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div className="App">
       <ul class="nav navbar">
            <li class="nav-item">
                <Link to="/home" class="nav-link">Home</Link>
            </li>
            <li class="nav-item">
                <Link to="/login" class="nav-link">Log In</Link>
            </li>
            <li class="nav-item">
                <Link to="/tenantreg" class="nav-link">Tenant Registration</Link>
            </li>
            <li class="nav-item">
                <Link to="/ownerreg" class="nav-link">Owner Registration</Link>
            </li>
            <li class="nav-item">
                <Link to="/contactus" class="nav-link">Contact Us</Link>
            </li> 
        </ul>

        <Routes>
            <Route path='/home' element={<HomeFunc/>}/>
            <Route path='/login' element={<LogInComp/>}/>
            <Route path='/tenantreg' element={<TenantReg/>}/>
            <Route path='/contactus' element={<ContactUs/>}/>
       </Routes>
    </div>
  );
}

export default App;
