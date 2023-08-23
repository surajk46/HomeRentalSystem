import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import LogInComp from './components/LogInComp';
import HomeFunc from './components/HomeFunc';
import TenantReg from './components/TenantReg';
import ContactUs from './components/ContactUs';
import AddProperty from './components/AddProperty';
import OwnerReg from './components/OwnerReg';
import AdminHome from './components/AdminHome';
import AddProperty1 from './components/AddProperty1';

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
                <Link to="/addproperty" class="nav-link">AddProperty</Link>
            </li> 
        </ul>

        <Routes>
            <Route path='/home' element={<HomeFunc/>}/>
            <Route path='/login' element={<LogInComp/>}/>
            <Route path='/tenantreg' element={<TenantReg/>}/>
            <Route path='/ownerreg' element={<OwnerReg/>}/>
            <Route path='/addproperty' element={<AddProperty1/>}/>
            <Route path='/contactus' element={<ContactUs/>}/>
            <Route path='/adminhome' element={<AdminHome/>}/>
       </Routes>
    </div>
  );
}

export default App;
