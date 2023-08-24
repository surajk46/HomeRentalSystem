

import React, { Component } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import bootstrap from 'bootstrap';
import { useEffect, useReducer, useState } from "react"


export default function ShowAllTenant() {
    const[tenant,setTenant]=useState();

    useEffect(()=>{
        fetch("http://localhost:8080/getalltenants")
        .then(res => res.json())
        .then(data => {setTenant(data)})
       // return()=>{cont.abort()};
     },[]);

     const deleteTenant =(id) =>
    {
       fetch("http://localhost:8080/deletetenantbyid/"+id)
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

                   alert("Tenant deleted successfully");
               }
               else{
                   alert("Tenant can not deleted");
               }
       })
    }

        return (
            <div>
                <h1>Welcome, Admin!</h1>

                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">{tenant && Object.keys(tenant)[0]}</th>
                            <th scope="col">{tenant && Object.keys(tenant)[1]}</th>
                            <th scope="col">{tenant && Object.keys(tenant)[2]}</th>
                            <th scope="col">{tenant && Object.keys(tenant)[3]}</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        tenant && tenant.map((t)=>{
                            <tr>
                                <th scope="row">{t.id}</th>
                                <td>{t.fname}</td>
                                <td>{t.lname}</td>
                                <td>{t.address}</td>
                                <td>{t.no_of_req_rem}</td>
                                <td>{t.contact_no}</td>
                                <td> 
                                    <Link>
                                        <button className="btn  btn-block" id="c-displanbtn" onClick={() => deleteTenant(tenant && t.id)}>Delete</button>
                                    </Link>
                                </td>
                            </tr>
                        })
                    } 
                    </tbody>
                    </table>
                
               

            </div>
        );
    }


   


