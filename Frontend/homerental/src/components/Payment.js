import { useEffect, useReducer, useState } from "react"
import { useNavigate } from "react-router-dom"; 

export default function Payment() {

    const[amount,setAmount]=useState(100);
    const[subId,setSubId]=useState(1);

    const[sub,setSub]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:8080/getallsubscriptions")
        .then(res => res.json())
        .then(data => {setSub(data)})
        //return()=>{cont.abort()};
    },[]);
    const navigate = useNavigate(); 

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
        return { hasError, error }
    }

    const sendData= (e) => {
            //json
        e.preventDefault();
        const reqOptions = {
            method: 'POST',
            headers: {'content-type':'application/json' },
            body: JSON.stringify({
               
            })
        }
        fetch("http://localhost:8080/regpayment/"+JSON.parse(localStorage.getItem("newReg")), reqOptions)

        //.then(resp => resp.json())
        .then(resp => {
            if (resp.ok) {
                navigate("/login");
            } else {
                alert("errr");
            }
        })
    }
    return (
        <div>

            <h1>{JSON.parse(localStorage.getItem("newReg"))}</h1>
            <h1>Payment</h1>
            <h1>Welcome </h1>
            <form >
            <div className="mb-3">
                    <label htmlFor="email" className="form-label">Enter Email id: </label>
                    <input type="text" className="form-control" id="email" name="email" value={JSON.parse(localStorage.getItem("newReg"))} readOnly />
                </div>

               {/* <div className="mb-3">
                    <label htmlFor="fname" className="form-label">Enter First name: </label>
                    <input type="text" className="form-control" id="fname" name="fname"  />
                </div>


                <div className="mb-3">
                    <label htmlFor="lname" className="form-label">Enter Last Name: </label>
                    <input type="text" className="form-control" id="lname" name="lname"  />
                    <div id="lnamehelp" className="form-text">....</div>
                </div>  */}

                <div className="mb-3">
                <label htmlFor="noOfReq" className="form-label">Enter No of Request: </label>
                    <select id="noOfReq" name="noOfReq"
                    onChange={(e) => { setAmount(e.target.value)}} >
                       
                        {sub.map((c)=>(
                             <option key={c.id} value={c.amount} onChange={setSubId(c.id)}>{c.no_of_req}</option>
                        ))}             
                    </select>            
                </div>
         
               <h3>{amount}</h3>
               <h3>{subId}</h3>

            <button type="submit" className="btn bttn-primary mb-3" onClick={(e) => {sendData(e)}}>Submit</button>
            <button type="reset" className="btn bttn-primary mb-3" >Reset</button>
                                            
            
              </form>
        </div>
    )
}
}