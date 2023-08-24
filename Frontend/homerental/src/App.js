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
import TenantHome from './components/TenantHome';
import AddProperty1 from './components/AddProperty1';
import OwnerHome from './components/OwnerHome';
import { useSelector } from 'react-redux';
import LogoutComp from './components/LogoutComp';
import ShowMyProperty from './components/ShowMyProperty';

function App() {

    const mystate = useSelector((state)=>state.logged)
  return (
    <div className="App">
       <div style={{display:mystate.loggedIn?"none":"block"}}>
           <ul class="nav navbar">
                <li class="nav-item">
                    <Link to="/" class="nav-link">Home</Link>
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
       </div>

   

        <Routes>
            <Route path='/' element={<HomeFunc/>}/>
            <Route path='/login' element={<LogInComp/>}/>
            <Route path='/tenantreg' element={<TenantReg/>}/>
            <Route path='/ownerreg' element={<OwnerReg/>}/>
            <Route path='/contactus' element={<ContactUs/>}/>

            <Route path='/adminhome' element={<AdminHome/>}/>
            <Route path='/tenanthome' element={<TenantHome/>}/> 

            <Route path='/ownerhome' element={<OwnerHome/>}/> 
            <Route path='/addproperty' element={<AddProperty1/>}/>
            <Route path='/showmyproperty' element={<ShowMyProperty/>}/>

            <Route path='/logout' element={<LogoutComp/>}/>
       </Routes>
    </div>
  );
}

export default App;
