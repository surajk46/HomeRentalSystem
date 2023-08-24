import { Link, Route, Routes } from 'react-router-dom';
export default function HomeFunc(){
    return(
        <div>
            <h1>Welcome To Home Page</h1>
            {/* <p>Welcome {JSON.parse(localStorage.getItem("loggedUser")).email}</p>       */}


           
                <Link to="/ownerhome" class="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover ">Owner home</Link>
                <br/>
                <Link to="/adminhome" class="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover">Admin Home</Link>
                <br/>
                <Link to="/tenanthome" class="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover">Tenant home</Link>
           
        </div>
    )
     
}
