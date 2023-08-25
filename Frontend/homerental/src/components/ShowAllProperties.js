

import React, { Component } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import bootstrap from 'bootstrap';
import { useEffect, useReducer, useState } from "react"


export default function ShowAllProperties() {
    const[cityid,setCityid]=useState();
    const[areaid,setAreaid]=useState();

    const[city,setCity]=useState();
    const[area,setArea]=useState();
    useEffect(()=>{
        fetch("http://localhost:8080/getallcity")
        .then(res => res.json())
        .then(data => {setCity(data)})
        //return()=>{cont.abort()};
     },[]);
    
    const getAreaByCity=(v)=>{
        fetch("http://localhost:8080/getareabycity?city_id="+v)
        .then(resp=>resp.json())
        .then(data=>setArea(data))
    }


    const[property,setProperty]=useState();
    useEffect(()=>{
        fetch("http://localhost:8080/getallproperty")
        .then(res => res.json())
        .then(data => {setProperty(data)})
        //return()=>{cont.abort()};
     },[]);

     const getPropertyByCity=(v)=>{
        fetch("http://localhost:8080/getpropertybycityid/"+v)
        .then(resp=>resp.json())
        .then(data=>setProperty(data))
    }
    const getPropertyByArea=(v)=>{
        fetch("http://localhost:8080/getpropertybyareaid/"+v)
        .then(resp=>resp.json())
        .then(data=>setProperty(data))
    }

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

                   //alert("Owner deleted successfully");
                   window.location.reload();
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
            <h1>Welcome Admin</h1>
            {/* <p>Welcome {JSON.parse(localStorage.getItem("loggedUser")).email}</p>       */}


           
               
               < div className="mb-3">
                <label htmlFor="city" className="form-label">Enter City Name: </label>
                    <select id="city" name="city" 
                    onChange={(e) => { setCityid(e.target.value);getAreaByCity(e.target.value);getPropertyByCity(e.target.value)}}>
                        {city && city.map((c)=>(
                             <option key={c.id} value={c.id} >{c.name}</option>
                        ))}             
                    </select>
                </div>


            <div className="mb-3">
                <label htmlFor="area" className="form-label">Enter area Name: </label>
                    <select id="area" name="area"  onChange={(e) => {setCityid(e.target.value); getPropertyByArea(e.target.value)}}>
                        {area && area.map((c)=>(
                             <option key={c.id} value={c.id} >{c.name}</option>
                        ))}     
                    </select>
            </div>


                {property && property.map((property)=>(
                    <div className="card" style={{width: 18 +'rem',float:'left'}}>
                        <img src={`data:image/jpeg;base64,${property && property.image}`} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{property && property.property_name}</h5>
                            <p className="card-text">pdesc</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">{property && property.price}</li>
                            <li className="list-group-item">{property && property.deposit}</li>
                            {/* <li className="list-group-item">Vestibulum at eros</li> */}
                        </ul>
                        <div className="card-body">
                            <a href="#" className="card-link">ViewMore</a>
                            <a href="#" className="card-link">like</a>
                        </div>
                    </div>
                ))}
                    

        </div>
        );
    }


   


