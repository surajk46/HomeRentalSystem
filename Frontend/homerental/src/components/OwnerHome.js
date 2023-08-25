import React, { Component } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import bootstrap from 'bootstrap';
import { useEffect, useReducer, useState } from "react"


export default function OwnerHome() {
    const[owner,setOwner]=useState();

    const [id, setId] = useState([]);

            useEffect(() => {
            const items = JSON.parse(localStorage.getItem('loggedUser')).id;
            if (items) {
            setId(items);
            fetch("http://localhost:8080/getownerbyloginid/"+items)
            .then(res => res.json())
            .then(data => {setOwner(data);localStorage.setItem("loggedOwner",JSON.stringify(data))})
            }
            }, []);

    const getId=()=>{
     
       
    }


   

    
    
 
   
        return (
            <div >
                
                <h1>Welcome, Property Owner!</h1>

               
                <ul class="ml-5 pl-5">
                    <div class="border 1px bg-primary mb-2 col-lg-2 bg-opacity-50">
                    <li class="nav-item pt-5; ">
                        <p class="text-light">Add to your Dream Property</p>
                            <Link to="/addproperty" class="nav-link;"><button class="mb-2" onClick={getId}>Add Property</button></Link>
                    </li>
                    </div>

                    <div class="border 1px bg-primary mb-2 col-lg-2">
                        <li class="mt-5">
                            <p class="text-light">Show Your dream property, Where you want to live</p>
                                <Link to="/showmyproperty" class="nav-link"><button class="mb-2" >Show Property</button></Link>
                        </li>
                    </div>

                    <div class="border 1px bg-primary mb-2 col-lg-2">
                        <li class="mt-5">
                            <p class="text-light"></p>
                                <Link to="/logout" class="nav-link"><button class="mb-2" >logout</button></Link>
                        </li>
                    </div>

                </ul>
               

            </div>
        );
    }


   


