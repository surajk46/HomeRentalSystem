import { useEffect, useReducer, useState } from "react"

export default function TenantReg() {
    const[cities,setCities]=useState([]);
    const CITYURL="http://localhost:8080/getallcity";

    const[areas,setAreas]=useState([]);
    const AREAURL="http://localhost:8080/getallarea/";//need to add areaid

useEffect(()=>{
    fetch(CITYURL)
    .then(res => res.json())
    .then(data => {setCities(data)})
});
useEffect(()=>{
    fetch(AREAURL)
    .then(res => res.json())
    .then(data => {setAreas(data)})
});

    const init = 
    {
        email: { value: "", hasError: true, touched: false, error: "" },
        pwd : { value: "", hasError: true, touched: false, error: "" },
        fname: { value: "", hasError: true, touched: false, error: "" },
        lname: { value: "", hasError: true, touched: false, error: "" },
        contact: { value: "", hasError: true, touched: false, error: "" },
        city: { value: "", hasError: true, touched: false, error: "" },
        area: { value: "", hasError: true, touched: false, error: "" },
        pincode: { value: "", hasError: true, touched: false, error: "" },
        isFormValid:false
    }
   


    const validateData = (name, value) => {
        let hasError = false, error = "";
        switch (name) {
            case "email":
                let regex4 = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

                if (!regex4.test(value)) {
                    hasError = true;
                    error = "Email should be valid"
                }
                break;
            case "pwd":
                let regex1 = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&])[A-Za-z0-9!@#$%^&*]{5,}$/;

                if (!regex1.test(value)) {
                    hasError = true;
                    error = "Password Should be more than 5 characters and valid "
                }
                break;
            case "fname":
                let regex2 = /^[A-Za-z]{1,15}$/;

                if (!regex2.test(value)) {
                    hasError = true;
                    error = "First Name Should be valid and not more than 15 characters"
                }
                break;
            case "lname":
                let regex3 = /^[A-Za-z]{1,15}$/;

                if (!regex3.test(value)) {
                    hasError = true;
                    error = "Last Name Should be valid and not more than 15 characters"
                }
                break;
            case "contact":
                let regex5 = /^[0-9]{10}$/;

                if (!regex5.test(value)) {
                    hasError = true;
                    error = "Contact Should be of 10 digits Only"
                }
                break;
           
            
            case "city":
                let regex8 = /^[A-Za-z]{1,}$/;

                if (!regex8.test(value)) {
                    hasError = true;
                    error = "Enter valid city"
                }
                break;
            case "pincode":
                let regex9 = /^[0-9]{6}$/;

                if (!regex9.test(value)) {
                    hasError = true;
                    error = "Enter valid postalcode"
                }
                break;
                
          
               



        }
        return { hasError, error }

    }



    const reducer = (state, action) => {
        switch(action.type)
        {
            case 'update': {
                const { name, value, hasError, error, touched, isFormValid } = action.data;
                return {
                    ...state,
                    [name]: { ...state[name], value, hasError, error, touched },
                    isFormValid
                }   //modifying and returning new object as state
            }
            case 'reset':
                return init;
        }
    }

  
    const [info, dispatch] = useReducer(reducer,init);


    const onInputChange = (name, value, dispatch) => {
        //validation logic
        const { hasError, error } = validateData(name, value); //form field, latest value
        //which key to be modified - value, hasError, error, touched 
        let isFormValid = true;
        for (const key in info) {
            let item = info[key];
           
            if (item.hasError) {
                isFormValid = false;
                break;
            }
        }
        dispatch({ type: 'update', data: { name, value, hasError, error, touched: true, isFormValid } })
    }

    const onFocusOut = (name, value, dispatch) => {
        const { hasError, error } = validateData(name, value)
        let isFormValid = true
        for (const key in info) {
            const item = info[key]
            if (key === name && hasError) {
                isFormValid = false
                break
            } else if (key !== name && item.hasError) {
                isFormValid = false
                break
            }
        }
        dispatch({
            type: "update",
            data: { name, value, hasError, error, touched: true, isFormValid },
        })
    }


    const sendData= (e) => {
            //json
        e.preventDefault();
        const reqOptions = {
            method: 'POST',
            headers: {'content-type':'application/json' },
            body: JSON.stringify({
                email: info.email.value,
                pwd: info.pwd.value,
                fname: info.fname.value,
                lname: info.lname.value,
                city: info.city.value,
                area: info.area.value,
                contact: info.contact.value,
                pincode: info.pincode.value
            })
            
        }
        fetch("http://localhost:8080/regtenant", reqOptions)
        .then(resp => resp.json())
        
    }

    return (
        <div>
            <h1>Tenant SignUp Form</h1>
            <form >
            <div className="mb-3">
                    <label htmlFor="email" className="form-label">Enter Email id: </label>
                    <input type="text" className="form-control" id="email" name="email" value={info.email.value}
                    onChange={(e) => { onInputChange("email", e.target.value, dispatch) }}
                    onBlur={(e) => { onFocusOut("email", e.target.value, dispatch) }} />
                    <div id="emailhelp" className="form-text">....</div>
                    <p style={{ display: info.email.touched && info.email.hasError ? "block" : "none", color: "red" }}> {info.email.error} </p>
                </div>

                <div className="mb-3">
                    <label htmlFor="pwd" className="form-label">Enter Password: </label>
                    <input type="password" className="form-control" id="pwd" name="pwd" value={info.pwd.value}
                    onChange={(e) => { onInputChange("pwd", e.target.value, dispatch) }}
                    onBlur={(e) => { onFocusOut("pwd", e.target.value, dispatch) }} />
                    <div id="emailhelp" className="form-text">....</div>
                    <p style={{ display: info.pwd.touched && info.pwd.hasError ? "block" : "none", color: "red" }}> {info.pwd.error} </p>
                </div>

               <div className="mb-3">
                    <label htmlFor="fname" className="form-label">Enter First name: </label>
                    <input type="text" className="form-control" id="fname" name="fname" value={info.fname.value}
                    onChange={(e) => { onInputChange("fname", e.target.value, dispatch) }}
                    onBlur={(e) => { onFocusOut("fname", e.target.value, dispatch) }} />
                    <div id="fnamehelp" className="form-text">....</div>
                    <p style={{ display: info.fname.touched && info.fname.hasError ? "block" : "none", color: "red" }}> {info.fname.error} </p>
                </div>


                <div className="mb-3">
                    <label htmlFor="lname" className="form-label">Enter Last Name: </label>
                    <input type="text" className="form-control" id="lname" name="lname" value={info.lname.value}
                     onChange={(e) => { onInputChange("lname", e.target.value, dispatch) }}
                     onBlur={(e) => { onFocusOut("lname", e.target.value, dispatch) }} />
                    <div id="lnamehelp" className="form-text">....</div>
                    <p style={{ display: info.lname.touched && info.lname.hasError ? "block" : "none", color: "red" }}> {info.lname.error} </p>
                </div>

               

                <div className="mb-3">
                    <label htmlFor="contact" className="form-label">Enter Contact No.: </label>
                    <input type="number" className="form-control" id="contact" name="contact" value={info.contact.value}
                  onChange={(e) => { onInputChange("contact", e.target.value, dispatch) }}
                  onBlur={(e) => { onFocusOut("contact", e.target.value, dispatch) }} />
                    <div id="contacthelp" className="form-text">....</div>
                    <p style={{ display: info.contact.touched && info.contact.hasError ? "block" : "none", color: "red" }}> {info.contact.error} </p>
                </div>


                
  
                



                <div className="mb-3">
                <label htmlFor="city" className="form-label">Enter City Name: </label>
                    <select id="city" name="city" value={info.city.value}  
                    onChange={(e) => { onInputChange("city", e.target.value, dispatch) }}
                    onBlur={(e) => { onFocusOut("city", e.target.value, dispatch) }} >
                        {/* <option >Choose option</option> */}
                        {cities.map((c)=>(
                             <option key={c.id} value={c.name}>{c.name}</option>
                        ))}             
                    </select>
                    <div id="cityhelp" className="form-text">....</div>
                </div>


                <div className="mb-3">
                <label htmlFor="area" className="form-label">Enter area Name: </label>
                    <select id="area" name="area" value={info.area.value}  
                    onChange={(e) => { onInputChange("area", e.target.value, dispatch) }}
                    onBlur={(e) => { onFocusOut("area", e.target.value, dispatch) }} >
                        {/* <option >Choose option</option> */}
                        {areas.map((c)=>(
                             <option key={c.id} value={c.name}>{c.name}</option>
                        ))}             
                    </select>
                    <div id="areahelp" className="form-text">....</div>
                </div>



                <div className="mb-3">
                    <label htmlFor="pincode" className="form-label">Enter Pincode.: </label>
                    <input type="number" className="form-control" id="pincode" name="pincode" value={info.pincode.value}
                    onChange={(e) => { onInputChange("pincode", e.target.value, dispatch) }}
                    onBlur={(e) => { onFocusOut("pincode", e.target.value, dispatch) }} />
                    <div id="pincodehelp" className="form-text">....</div>
                    <p style={{ display: info.pincode.touched && info.pincode.hasError ? "block" : "none", color: "red" }}> {info.pincode.error} </p>
                </div> 

            <button type="submit" className="btn bttn-primary mb-3" onClick={(e) => {sendData(e)}}>Submit</button>
            <button type="reset" className="btn bttn-primary mb-3" onClick={() => {dispatch({type:'reset'})}}>Reset</button>
                                            
            <p>{JSON.stringify({
                    email: info.email.value,
                    pwd: info.pwd.value,
                    fname: info.fname.value,
                    lname: info.lname.value,
                    city: info.city.value,
                    area: info.area.value,
                    contact: info.contact.value,
                    pincode: info.pincode.value
                 })}</p>
              </form>
        </div>
    )
}
