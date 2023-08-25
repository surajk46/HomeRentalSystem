

import React, { Component } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import bootstrap from 'bootstrap';
import { useEffect, useReducer, useState } from "react"


export default function ShowAllTenant() {
    const[tenant,setTenant]=useState();

    useEffect(()=>{
        fetch("http://localhost:8080/getalltenants")
        .then(res => res.json())
        .then(data => setTenant(data))
       // return()=>{cont.abort()};
     },[]);


  
     const deleteTenant =(id) =>
    {
       fetch("http://localhost:8080/deletetenant/"+id,{method : "DELETE"})
       .then(resp => {
           if(resp.ok)
           { 
               console.log(resp)
               return resp.text();
           }
         else
           {
              console.log("server error")
             throw  new Error("server error")  
           }
         })
         .then(text => text.length ? JSON.parse(text):{})
       .then(obj => {
               if(Object.keys(obj).length===0)
               {

                  // alert("Tenant deleted successfully");
                   window.location.reload();
               }
               else{
                   //alert("Tenant can not deleted");
                   window.location.reload();

               }
       })
    }

        return (
            <div>
              <div className='nav-item'>
                <ul className="nav navbar">
                    <li className="nav-item">
                    <Link to="/getalltenants" className="nav-link">ShowAllTenant</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/getallowners" className="nav-link">ShowAllOwner</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/getallproperties" className="nav-link">ShowAllproperties</Link></li>
                    
                    <li className="nav-item">
                    <Link to="/logout" className="nav-link">Log Out</Link></li>
                </ul>
                </div>
            <h1>Welcome, Admin!</h1>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Fname</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Address</th>
                  <th scope="col">No of Req Rem</th>
                  <th scope="col">Contact No</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {tenant && tenant.map((t) => (
                  <tr key={t.id}>
                    <th scope="row">{t.id}</th>
                    <td>{t.fname}</td>
                    <td>{t.lname}</td>
                    <td>{t.address}</td>
                    <td>{t.no_of_req_rem}</td>
                    <td>{t.contact_no}</td>
                    <td>
                      <button
                        className="btn btn-block"
                        id="c-displanbtn"
                        onClick={() => deleteTenant(t.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
    }


   


