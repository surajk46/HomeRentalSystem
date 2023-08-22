import React, { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";

export default function TenantReg() {
        const [cities, setCities] = useState([]);
        const [areas, setAreas] = useState([]);
      
        const CITY_URL = "http://localhost:8080/getallcity";
        const AREA_URL = "http://localhost:8080/getallarea/";
      
        useEffect(() => {
          fetch(CITY_URL)
            .then((res) => res.json())
            .then((data) => {
              setCities(data);
            });
        }, []);
      
        useEffect(() => {
          fetch(AREA_URL)
            .then((res) => res.json())
            .then((data) => {
              setAreas(data);
            });
        }, []);

  const init = {
    email: { value: "", hasError: true, touched: false, error: "" },
    pwd: { value: "", hasError: true, touched: false, error: "" },
    fname: { value: "", hasError: true, touched: false, error: "" },
    lname: { value: "", hasError: true, touched: false, error: "" },
    contact_no: { value: "", hasError: true, touched: false, error: "" },
    city: { value: "", hasError: true, touched: false, error: "" },
    area: { value: "", hasError: true, touched: false, error: "" },
    pincode: { value: "", hasError: true, touched: false, error: "" },
    isFormValid: false,
  };

  const onChange = (name, value, dispatch) => {
    const { hasError, error } = validateData(name, value);
    const isFormValid = validateForm(name, value);
    dispatch({
      type: "update",
      data: { name, value, hasError, error, touched: true, isFormValid },
    });
  };

  const validateForm = (info) => {
    const fieldNames = Object.keys(info);
    let isFormValid = true;
  
    for (const name of fieldNames) {
      const { value } = info[name];
      const { hasError, error } = validateData(name, value);
  
      if (hasError) {
        isFormValid = false;
        break; 
      }
    }
  
    return isFormValid;
  };
  

  const validateData = (name, value) => 
  {
    let hasError = false, error = "";
    switch (name) 
    {
        case "email":
            let regex4 = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

            if (!regex4.test(value)) 
            {
                hasError = true;
                error = "Email should be valid"
            }
            break;
        case "pwd":
            let regex1 = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&])[A-Za-z0-9!@#$%^&*]{5,}$/;

            if (!regex1.test(value)) 
            {
                hasError = true;
                error = "Password Should be more than 5 characters and valid "
            }
            break;
            case "fname":
                let regex2 = /^[A-Za-z]{1,15}$/;

                if (!regex2.test(value)) 
                {
                    hasError = true;
                    error = "First Name Should be valid and not more than 15 characters"
                }
                break;
            case "lname":
                let regex3 = /^[A-Za-z]{1,15}$/;

                if (!regex3.test(value)) 
                {
                    hasError = true;
                    error = "Last Name Should be valid and not more than 15 characters"
                }
                break;
            case "contact":
                let regex5 = /^[0-9]{10}$/;

                if (!regex5.test(value)) 
                {
                    hasError = true;
                    error = "Contact Should be of 10 digits Only"
                }
                break;
           
            
                case "city":
                    let regex8 = /^[A-Za-z]{1,}$/;
    
                    if (!regex8.test(value)) 
                    {
                        hasError = true;
                        error = "Enter valid city"
                    }
                    break;
                case "pincode":
                    let regex9 = /^[0-9]{6}$/;
    
                    if (!regex9.test(value)) 
                    {
                        hasError = true;
                        error = "Enter valid postalcode"
                    }
                    break;
    }
        return { hasError, error };
    };

  const reducer = (state, action) => {
    switch (action.type) {
      case "update": {
        const { name, value, hasError, error, touched, isFormValid } =
          action.data;
        return {
          ...state,
          [name]: { ...state[name], value, hasError, error, touched },
          isFormValid,
        };
      }
      case "reset":
        return init;
      default:
        return state;
    }
  };
  const sendData = async (e) => 
  { // Added 'async'
    e.preventDefault();

    let isFormValid = true;
    const updatedInfo = { ...info };

    for (const fieldName in updatedInfo) {
      if (fieldName !== "isFormValid") {
        const field = updatedInfo[fieldName];
        const validation = validateData(fieldName, field.value);

        if (validation.hasError) {
          isFormValid = false;
          field.hasError = true;
          field.error = validation.error;
        } else {
          field.hasError = false;
          field.error = "";
        }
      }
    }

    updatedInfo.isFormValid = isFormValid;

    if (isFormValid) {
      try {
        const reqOptions = {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            email: updatedInfo.email.value,
            pwd: updatedInfo.pwd.value,
            fname: updatedInfo.fname.value,
            lname: updatedInfo.lname.value,
            city: updatedInfo.city.value,
            area: updatedInfo.area.value,
            contact: updatedInfo.contact.value,
            pincode: updatedInfo.pincode.value,
          }),
        };

        const response = await fetch("http://localhost:8080/regtenant", reqOptions);
        const data = await response.json();
        
        // Handle response data if needed
        
      } catch (error) {
        // Handle errors during submission
      }
    }

    dispatch({
      type: "update",
      data: updatedInfo,
    });
  };
  

  
  

  const [info, dispatch] = useReducer(reducer, init);

  return (
    <div>
      <h1>Tenant SignUp Form</h1>
      <form>
      <div className="mb-3">
                    <label htmlFor="email" className="form-label">Enter Email id: </label>
                    <input type="text" className="form-control" id="email" name="email" value={info.email.value}
                    onChange={(e) => { onChange("email", e.target.value, dispatch) }}
                     />
                    <div id="emailhelp" className="form-text">....</div>
                    <p style={{ display: info.email.touched && info.email.hasError ? "block" : "none", color: "red" }}> {info.email.error} </p>
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Enter Password: </label>
                    <input type="password" className="form-control" id="password" name="password" value={info.password.value}
                    onChange={(e) => { onChange("pwd", e.target.value, dispatch) }}
                   />
                    <div id="emailhelp" className="form-text">....</div>
                    <p style={{ display: info.pwd.touched && info.pwd.hasError ? "block" : "none", color: "red" }}> {info.password.error} </p>
                </div>
                <div className="mb-3">
                    <label htmlFor="fname" className="form-label">Enter First name: </label>
                    <input type="text" className="form-control" id="fname" name="fname" value={info.fname.value}
                    onChange={(e) => { onChange("fname", e.target.value, dispatch) }}
              />
                    <div id="fnamehelp" className="form-text">....</div>
                    <p style={{ display: info.fname.touched && info.fname.hasError ? "block" : "none", color: "red" }}> {info.fname.error} </p>
                </div>
                <div className="mb-3">
                    <label htmlFor="lname" className="form-label">Enter Last Name: </label>
                    <input type="text" className="form-control" id="lname" name="lname" value={info.lname.value}
                     onChange={(e) => { onChange("lname", e.target.value, dispatch) }}
                      />
                    <div id="lnamehelp" className="form-text">....</div>
                    <p style={{ display: info.lname.touched && info.lname.hasError ? "block" : "none", color: "red" }}> {info.lname.error} </p>
                </div>

               

                <div className="mb-3">
                    <label htmlFor="contact_no" className="form-label">Enter Contact No.: </label>
                    <input type="number" className="form-control" id="contact_no" name="contact_no" value={info.contact.value}
                  onChange={(e) => { onChange("contact_no", e.target.value, dispatch) }}
                  />
                    <div id="contacthelp" className="form-text">....</div>
                    <p style={{ display: info.contact.touched && info.contact.hasError ? "block" : "none", color: "red" }}> {info.contact.error} </p>
                </div>
                <div className="mb-3">
                <label htmlFor="city" className="form-label">Enter City Name: </label>
                <select name="city" placeholder="Select city" required onChange={(e)=>{dispatch({type:'update', fld:'city', value: e.target.value})}}>
                    {cities.map(v => <option value={v.id}>{v.city}</option>)}
                </select>
                    <div id="cityhelp" className="form-text">....</div>
                </div>


                <div className="mb-3">
                <label htmlFor="area" className="form-label">Enter area Name: </label>
                <select name="area" placeholder="Select area" required onChange={(e)=>{dispatch({type:'update', fld:'area', value: e.target.value})}}>
                    {areas.map(v => <option value={v.id}>{v.area}</option>)}
                </select>
                    <div id="areahelp" className="form-text">....</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="pincode" className="form-label">Enter Pincode.: </label>
                    <input type="number" className="form-control" id="pincode" name="pincode" value={info.pincode.value}
                    onChange={(e) => { onChange("pincode", e.target.value, dispatch) }}
                    />
                    <div id="pincodehelp" className="form-text">....</div>
                    <p style={{ display: info.pincode.touched && info.pincode.hasError ? "block" : "none", color: "red" }}> {info.pincode.error} </p>
                </div> 
        <button
          type="submit"
          className="btn btn-primary mb-3"
          onClick={(e) => {
            sendData(e);
          }}
        >
          Submit
        </button>
        <button
          type="reset"
          className="btn btn-primary mb-3"
          onClick={() => {
            dispatch({ type: "reset" });
          }}
        >
          Reset
        </button>

        <p>
          {JSON.stringify(info)}
        </p>
      </form>
    </div>
  );
}
