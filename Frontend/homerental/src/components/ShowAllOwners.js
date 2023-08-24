

import React, { Component } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import bootstrap from 'bootstrap';
import { useEffect, useReducer, useState } from "react"


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
       fetch("http://localhost:8080/deleteownerbyid/"+id)
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

                   alert("Owner deleted successfully");
               }
               else{
                   alert("Owner can not deleted");
               }
       })
    }

        return (
            <div>
                <h1>Welcome, Admin!</h1>

                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">{owner && Object.keys(owner)[0]}</th>
                            <th scope="col">{owner && Object.keys(owner)[1]}</th>
                            <th scope="col">{owner && Object.keys(owner)[2]}</th>
                            <th scope="col">{owner && Object.keys(owner)[3]}</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        owner && owner.map((t)=>{
                            <tr>
                                <th scope="row">{t.id}</th>
                                <td>{t.fname}</td>
                                <td>{t.lname}</td>
                                <td>{t.address}</td>
                                <td>{t.no_of_req_rem}</td>
                                <td>{t.contact_no}</td>
                                <td> 
                                    <Link>
                                        <button className="btn  btn-block" id="c-displanbtn" onClick={() => deleteOwner(owner && t.id)}>Delete</button>
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


   


