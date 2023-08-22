import { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigation } from "react-router-dom";


export default  function Logincomp()
{

    
        const  init={
            uid:"",
            pwd:""
        }
        const reducer=(state,action) =>
        {
            switch(action,type)
            {
                case 'update':
                    return {...state,[action.fld]:action.val}
                case 'reset':
                    return init;
            }
        }
        const [info,dispatch]=useReducer(reducer,init);
        const  [msg,setMsg]=useState("");
        const navigation=useNavigation();
        const reduxAction=useDispatch();

         const sendData = (e) => {
        e.preventDefault();
        const reqOption={
            method:'post',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(info)
        }
        fetch("http://localhost:8080/Logincomp",reqOption)
        .then(resp =>{if(resp.ok)
            
            {
                console.log(resp.status)
              return resp.text();
            }
            else
               console.log(resp.statusText)
              throw new Error("server error");
            })
        .then(text =>text.length ? JSON.parse(text) :{})
        .then(obj =>{
            if(Object.keys(obj).length ===0)
            {
                setMsg("Wrong uid/pwd");
            }
            else{
                
                if(obj.status===false)
                {
                    alert("Request failed")
                }
                else{
                    if(obj .role_id ==1)
                    {
                       navigate("/home_func");
                    }
                }
            }

        })
        .catch((error)=> alert("server error "))
      }


    return(
        <div>
            <h1> Login page</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="uid" className="form-label">Enter uid :</label>
                    <input type="text" className="form-control" id="uid" name="uid" value={info.uid}/>
                    onChange={(e)=>{dispatch({type:'update',fld:'uid',val:e.target.value})}} 
                    <div id="uidHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                    <label htmlFor="pwd" className="form-label">Enter Password :</label>
                    <input type="text" className="form-control" id="pwd" name="pwd" value={info.pwd}/>
                    onChange={(e)=>{dispatch({type:'update',fld:'pwd',val:e.target.value})}} 
                    <div id="passwordHelp" className="form-text"></div>
                </div>
               <button type="sumbmit" className="btn btn-primary mb-3">Submit</button>
               <button type="reset" className="btn btn-primary mb-3">Reset</button>

            </form>
        </div>
    )
        
          
        
        
    
}