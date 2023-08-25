

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
          <div className="container">
    <div className="row">
        <div className="col-md-12">
            <div className="nav-item">
                <ul className="nav navbar">
                    <li className="nav-item">
                        <Link to="/getalltenants" className="nav-link">Show All Tenants</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/getallowners" className="nav-link">Show All Owners</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/getallproperties" className="nav-link">Show All Properties</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/logout" className="nav-link">Log Out</Link>
                    </li>
                </ul>
            </div>
            <h1>Welcome, Admin!</h1>
            <table className="table table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Requests Remaining</th>
                        <th scope="col">Contact Number</th>
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
                                    className="btn btn-danger"
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
    </div>
</div>

        );
    }


   


