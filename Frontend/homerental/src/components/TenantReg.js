import { useReducer } from "react"

export default function TenantReg() {

    const init = {
        email: "",
        password: "",
        fname: "",
        lname: "",
        city: "",
        area:"",
        pincode:""
    }

    const reducer = (state, action) => {
        switch(action.type)
        {
            case 'update':
                return {...state , [action.fid]:action.val}
            case 'reset':
                return init;
        }
    }

    const [info, dispatch] = useReducer(reducer,init);

    const sendData= (e) => {
            //json
        e.preventDefault();
        const reqOptions = {
            method: 'POST',
            headers: {'content-type':'application/json' },
            body: JSON.stringify(info)
            
        }
        fetch("http://localhost:8080/tenantreg", reqOptions)
        .then(resp => resp.json())
        
    }

    return (
        <div>
            <h1>Tenant SignUp Form</h1>
            <form >
            <div className="mb-3">
                    <label htmlFor="email" className="form-label">Enter Email id: </label>
                    <input type="text" className="form-control" id="email" name="email" value={info.email}
                    onChange={(e)=>{dispatch({type:'update', fid:'email', val: e.target.value})}} />
                    <div id="emailhelp" className="form-text">....</div>
                </div>

                <div className="mb-3">
                    <label htmlFor="pwd" className="form-label">Enter Password: </label>
                    <input type="password" className="form-control" id="pwd" name="pwd" value={info.pwd}
                    onChange={(e)=>{dispatch({type:'update', fid:'pwd', val: e.target.value})}} />
                    <div id="emailhelp" className="form-text">....</div>
                </div>

                <div className="mb-3">
                    <label htmlFor="fname" className="form-label">Enter First name: </label>
                    <input type="text" className="form-control" id="fname" name="fname" value={info.fname}
                    onChange={(e)=>{dispatch({type:'update', fid:'fname', val: e.target.value})}} />
                    <div id="fnamehelp" className="form-text">....</div>
                </div>


                <div className="mb-3">
                    <label htmlFor="lname" className="form-label">Enter Last Name: </label>
                    <input type="text" className="form-control" id="lname" name="lname" value={info.lname}
                    onChange={(e)=>{dispatch({type:'update', fid:'lname', val: e.target.value})}} />
                    <div id="lnamehelp" className="form-text">....</div>
                </div>

               

                <div className="mb-3">
                    <label htmlFor="contact" className="form-label">Enter Contact No.: </label>
                    <input type="number" className="form-control" id="email" name="contact" value={info.contact}
                    onChange={(e)=>{dispatch({type:'update', fid:'email', val: e.target.value})}} />
                    <div id="contacthelp" className="form-text">....</div>
                </div>


                

                <div className="mb-3">
                    <label htmlFor="city" className="form-label">Enter City Name: </label>
                    <input type="text" className="form-control" id="city" name="city" value={info.city}
                    onChange={(e)=>{dispatch({type:'update', fid:'city', val: e.target.value})}} />
                    <div id="cityhelp" className="form-text">....</div>
                </div>

                <div className="mb-3">
                    <label htmlFor="area" className="form-label">Enter Area Name: </label>
                    <input type="text" className="form-control" id="area" name="area" value={info.area}
                    onChange={(e)=>{dispatch({type:'update', fid:'area', val: e.target.value})}} />
                    <div id="areahelp" className="form-text">....</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="pincode" className="form-label">Enter Pincode.: </label>
                    <input type="number" className="form-control" id="pincode" name="pincode" value={info.contact}
                    onChange={(e)=>{dispatch({type:'update', fid:'pincode', val: e.target.value})}} />
                    <div id="pincodehelp" className="form-text">....</div>
                </div>

            <button type="submit" className="btn bttn-primary mb-3" onClick={(e) => {sendData(e)}}>Submit</button>
            <button type="reset" className="btn bttn-primary mb-3" onClick={() => {dispatch({type:'reset'})}}>Reset</button>
                                            
            <p>{JSON.stringify(info)}</p>
              </form>
        </div>
    )
}