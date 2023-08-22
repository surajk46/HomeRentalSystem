import './shubham.css';
import { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function VendorRegister(){
    const [cities, setCity] = useState([]);
    const [areas, setArea] = useState([]);
    const initialState={
    email: { value: "", hasError: true, touched: false, error: "" },
    password: { value: "", hasError: true, touched: false, error: "" },
    fname: { value: "", hasError: true, touched: false, error: "" },
    lname: { value: "", hasError: true, touched: false, error: "" },
    contact_no: { value: "", hasError: true, touched: false, error: "" },
    city: { value: "", hasError: true, touched: false, error: "" },
    area: { value: "", hasError: true, touched: false, error: "" },
    pincode: { value: "", hasError: true, touched: false, error: "" },
    isFormValid: false,
    }

    const reducer=(state,action)=>{
        switch(action.type)
        {
            case 'update' :
                 const {name,value,hasError,touched, error, isFormValid} = action.data;
                 return { ...state, [name]: {value, hasError, touched, error}, isFormValid }


             case 'reset' : return initialState;
        }
  }


  useEffect(()=>{
    fetch("http://localhost:8080/getcities")
    .then(resp=>resp.json())
    .then(data=>setCity(data))
  },[])

  const editCity=(e)=>{

    handleChange("city",e.target.value);
    var cid=e.target.value;

    fetch("http://localhost:8080/getareas?cityid="+cid)
    .then(resp=>resp.json)
    .then(data=>setArea(data))
  }

  const handleChange=(name,value) => {
    //a. call validation logic
    const {hasError, error} = validateData(name, value)

    //b. check form validity status
    let isFormValid = true;
    for(const key in info)
    {
        // console.log(key+" : "+emp[key].hasError )
        if(info[key].hasError === true)
        {
            isFormValid = false;
            break;
        }
    }         

    //c. call dispatch method
    dispatch({type: 'update', data: {name,value,hasError, error,touched: true,isFormValid} })
}




const validateData = (name,value) => {
    let hasError = false;
    let error = "";
    switch(name){
        case 'email':
            emails.forEach(element => {
                if(element===value)
                {
                    hasError=true;
                    error="email already used";
                }   
            });
            break;

        case 'uname':
             unames.forEach(element => {
                if(element===value)
                {
                    hasError=true;
                    error="username already used";
                }   
            });
            break;
         case 'pwd':
                var exp1 = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!,@,#,$,%,^,&,*])[\w\W]{8,}/;
                if(! exp1.test(value))
                {
                    hasError = true;
                    error = "password should contain atleast one Capital,small letter,special char,number";
                }
         break;

         case 'cno':
            var exp1 = /[\d]{10}/;
            if(! exp1.test(value))
            {
                hasError = true;
                error = "invalid contact number";
            }
         break;



        case 'cpwd':
            if(info.pwd!=value)
            {
                hasError = true;
                error = "confirm password mismatched";
            }
        break;

    }
    return {hasError,error}

}

 

  

  

  const[info,dispatch]= useReducer(reducer,initialState);
  const[msg,setMsg]= useState("");
  const navigate = useNavigate();
  

  const submitData=(e)=>{
    e.preventDefault();

    var reqOptions= {
     method : "POST",
     headers : {'content-type':'application/json'},
     body : JSON.stringify(info)
    }

    fetch("http://localhost:8080/regtenant",reqOptions)
    .then(resp=>{
        if(resp.ok)
            return resp.text();
        else
           throw new Error("server error");
    })
    .then(text=> text.length?JSON.parse(text):{})
    .then(obj=>{
        if(Object.keys(obj).length===0)
        {
            setMsg("Invalid username/password");
        }
        else{
            navigate('/successregister');
        }
    })
}


    return(
        <div className="container">
            <form>
                <div>
                    <label htmlFor="cname">Enter First name</label>
                    <input type="text" id="cname" name="cname" value={info.cname.value} onChange={(e)=>{handleChange("cname",e.target.value)}}/>
                </div>
               
                <div>
                    <label htmlFor="email">Enter Email id</label>
                    <input type="text" id="email" name="email" value={info.email.value} onChange={(e)=>{handleChange("email",e.target.value)}}/>
                    <div style={{ display: info.email.touched && info.email.hasError?"block":"none" }}>
                           {info.email.error}
                    </div>
                </div>
                <div>
                    <label htmlFor="cno">Enter Contact number</label>
                    <input type="text" id="cno" name="cno" value={info.cno.value} onChange={(e)=>{handleChange("cno",e.target.value)}}/>
                    <div style={{ display: info.cno.touched && info.cno.hasError?"block":"none" }}>
                           {info.cno.error}
                    </div>
                </div>

                <div>
                    <label htmlFor="city">Select City</label>
                    <select id="city" name="city" onChange={(e)=>editCity(e)}>
                           {
                            cities.map(v=>{return <option key={v.id} value={v.id}>{v.city}</option>})
                           }
                    </select>
                </div>


                <div>
                    <label htmlFor="area">Select Area</label>
                    <select id="area" name="area"  onChange={(e)=>{handleChange("area",e.target.value)}}>
                           {
                            areas.map(v=>{return <option key={v.id} value={v.id}>{v.area}</option>})
                           }
                    </select>
                </div>
                <div>
                    <label htmlFor="addline">Enter Address line</label>
                    <input type="text" id="addline" name="addline" value={info.addline.value} onChange={(e)=>{handleChange("addline",e.target.value)}}/>
                </div>
                <div>
                    <h3>Plans Details</h3>
                    
                    <table>
                         <thead><tr><th>Duration in months</th><th>price</th></tr></thead>
                         <tbody>
                            {plans.map(v=>{return <tr><td>{v.duration.value}</td><td>{v.price}</td></tr>})}
                         </tbody>
                    </table>
                </div>

                <div>
                    <label htmlFor="plan">Select plan</label>
                      <select  id="plan" name="plan" onChange={(e)=>{handleChange("plan",e.target.value)}}>
                        <option value={1}>1 month</option>
                        <option value={2}>3 months</option>
                        <option value={3}>6 months</option>
                        <option value={4}>1 year</option>
                      </select>
                </div>

                <div>
                    <label htmlFor="amount">Enter Amount</label>
                    <input type="number" id="amount" name="amount" value={info.amount.value} onChange={(e)=>{handleChange("amount",e.target.value)}}/>
                </div>
                     
                <div>
                      <label htmlFor="transid">Enter Transaction id</label>
                      <input type="text" id="transid" name="transid" value={info.transid.value} onChange={(e)=>{handleChange("transid",e.target.value)}}/>
                </div>
                

                <div>
                    <label htmlFor="uname">Enter username</label>
                    <input type="text" id="uname" name="uname" value={info.uname.value} onChange={(e)=>{handleChange("uname",e.target.value)}}/>
                    <div style={{ display: info.uname.touched && info.uname.hasError?"block":"none" }}>
                           {info.uname.error}
                    </div>
                </div>
                <div>
                    <label htmlFor="pwd">Enter password</label>
                    <input type="text" id="pwd" name="pwd" value={info.pwd.value} onChange={(e)=>{handleChange("pwd",e.target.value)}}/>
                    <div style={{ display: info.pwd.touched && info.pwd.hasError?"block":"none" }}>
                           {info.pwd.error}
                    </div>
                </div>
                <div>
                    <label htmlFor="cpwd">Confirm password</label>
                    <input type="text" id="cpwd" name="cpwd" value={info.cpwd.value} onChange={(e)=>{handleChange("cpwd",e.target.value)}}/>
                    <div style={{ display: info.cpwd.touched && info.cpwd.hasError?"block":"none" }}>
                           {info.cpwd.error}
                    </div>
                </div>
                <div>
                    <label htmlFor="qid">Select Question for forget password</label>
                    <select id="qid" name="qid" onChange={(e)=>{handleChange("qid",e.target.value)}}>
                           {
                            questions.map(v=>{return <option key={v.id} value={v.id}>{v.question}</option>})
                           }
                    </select>
                </div>

                <div>
                    <label htmlFor="ans">Enter Answer</label>
                    <input type="text" id="ans" name="ans" value={info.ans.value} onChange={(e)=>{handleChange("ans",e.target.value)}}/>
                </div>


                <input type="submit" className="btn btn-primary" disabled={!(info.isFormValid)} value='Register' onClick={(e)=>{submitData(e)}}/>
                <input type="reset" className="btn btn-secondary mx-2" value='Reset' onClick={(e)=>{dispatch({type:'reset'})}}/>
            </form>
            <div>{msg}</div>
        </div>
    )
}