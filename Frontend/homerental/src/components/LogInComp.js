import React, { useState, useReducer } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; 
import { login } from "./slice";

export default function LoginComp() { 

    const init = {
        email: "",
        password: ""
    };
    
    const reducer = (state, action) => {
        switch (action.type) {
            case 'update':
                return { ...state, [action.fld]: action.val };
            case 'reset':
                return init;
            default:
                return state; 
        }
    };

    const [info, dispatch] = useReducer(reducer, init);
    const [msg, setMsg] = useState("");
    const navigate = useNavigate(); 
    const reducAction = useDispatch();

    const sendData = (e) => {
        e.preventDefault();
        const reqOption = {
            method: 'post',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(info)
        };

        fetch("http://localhost:8080/checklogin", reqOption)
            .then(resp => {
                if (resp.ok)
                    return resp.text();
                else
                    throw new Error("server error");
            })
            .then(text => text.length ? JSON.parse(text) : {})
            .then(obj => {
                if (Object.keys(obj).length === 0)
                 {
                    setMsg("Wrong email/password");
                } 
                else 
                {
                    
                    if (obj.status === false) 
                    {
                        alert("Request has not been approved.");
                    } 
                    else 
                    {
                        reducAction(login());
                        localStorage.setItem("loggedUser",JSON.stringify(obj));
                        if (obj.role_id.id === 1) 
                        {
                            navigate("/adminhome");
                        } 
                        else if (obj.role_id.id === 2) 
                        {
                            navigate("/ownerhome");
                        } 
                        else if (obj.role_id.id === 3) 
                        {
                            navigate("/tenanthome");
                        }
                    }
                }
            })
            .catch((error) => alert("server error"));
    };

    return (
        <div>
            <h1> Login page</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Enter email :</label>
                    <input type="text" className="form-control" id="email" name="email" value={info.email}
                        onChange={(e) => { dispatch({ type: 'update', fld: 'email', val: e.target.value }) }} /> 
                    <div id="emailHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Enter Password :</label>
                    <input type="password" className="form-control" id="password" name="password" value={info.password}
                        onChange={(e) => { dispatch({ type: 'update', fld: 'password', val: e.target.value }) }} /> 
                    <div id="passwordHelp" className="form-text"></div>
                </div>
                <button type="submit" className="btn btn-primary mb-3" onClick={(e) => { sendData(e) }}>Submit</button> 
                <button type="reset" className="btn btn-primary mb-3" onClick={() => { dispatch({ type: 'reset' }) }}>Reset</button>
            </form>
            <p>{JSON.stringify(info)}</p>
            <p>{msg}</p>
        </div>
    )
}
