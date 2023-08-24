import { Link, Route, Routes } from 'react-router-dom';
import { Button, Form,Col, Container, Row} from "react-bootstrap";
import { useEffect, useReducer, useState } from "react"

export default function ShowMyProperty(){
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


    
    const deleteProperty =(id) =>
    {
       fetch("http://localhost:8080/deleteproperty/"+id)
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
               // console.log(obj);           
               // if(obj==null)
               // {
               //      alert("Property deleted successfully");
               // }
               // {
               //     alert("Propery can not deleted");
               // }
               if(Object.keys(obj).length===0)
               {

                   alert("Property deleted successfully");
               }
               else{
                   alert("Propery can not deleted");
               }
       })
    }

    return(
        <div>
            <h1>Welcome {JSON.parse(localStorage.getItem("loggedUser")).email} </h1>
            <h3>Below listed are your Properties</h3>
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
                    <select id="area" name="area" value={area} onChange={(e) => { setArea(e.target.value);getPropertyByArea(e.target.value)}}>
                        {area && area.map((c)=>(
                             <option key={c.id} value={c.id} >{c.name}</option>
                        ))}     
                    </select>
            </div>


                {property && property.map((property)=>(
                    // <div className="card" style={{width: 18 +'rem',float:'left'}}>
                    <div className="card" >
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
                            <Link to="#" className="card-link">ViewMore</Link>
                           <Link>
                                <button className="btn  btn-block" id="c-displanbtn" onClick={() => deleteProperty(property && property.id)}>Delete</button>
                           </Link>

                        </div>
                    </div>
                ))}
                    

        </div>
    )
     
}