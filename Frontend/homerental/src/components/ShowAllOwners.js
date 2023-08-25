

import React, { Component } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import bootstrap from 'bootstrap';
import { useEffect, useReducer, useState } from "react"
import AdminHome from './AdminHome';


export default function ShowAllOwners() {
    const[owner,setOwner]=useState();

    useEffect(()=>{
        fetch("http://localhost:8080/getallowners")
        .then(res => res.json())
        .then(data => {setOwner(data)})
       // return()=>{cont.abort()};
     },[]);

     const deleteOwner =(id) =>
    {
       fetch("http://localhost:8080/deleteownerbyid/"+id,{method:"DELETE"})
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
                    window.location.reload();
                  // alert("Owner deleted successfully");
               }
               else{
                  // alert("Owner can not deleted");
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
          {owner && owner.map(owner => (
            <tr key={owner.id}>
              <th scope="row">{owner.id}</th>
              <td>{owner.fname}</td>
              <td>{owner.lname}</td>
              <td>{owner.address}</td>
              <td>{owner.no_of_req_rem}</td>
              <td>{owner.contact_no}</td>
              <td>
                <button
                  className="btn btn-block"
                  id="c-displanbtn"
                  onClick={() => deleteOwner(owner.id)}
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


   


