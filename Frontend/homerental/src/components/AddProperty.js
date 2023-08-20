import { useReducer } from "react"

export default function AddProperty() {

    const init = {
        city: "",
        area:"",
        pincode:"",
        propertytype:"",
        propertyname:"",
        pdesc:"",
        price:"",
        deposit:""
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
        fetch("http://localhost:8080/addproperty", reqOptions)
        .then(resp => resp.json())
        
    }

    return (
        <div>
            <h1>Tenant SignUp Form</h1>
           <form >
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


                {/* we are using a table data here */}
                <div className="mb-3">
                    <label for="propertytype">Choose type of Property:</label>
                    <select id="propertytype" name="propertytype" value={info.propertytype}  onChange={(e)=>{dispatch({type:'update', fid:'propertytype', val: e.target.value})}} >
                        {/* <option >Choose option</option> */}
                        <option value="flat">Flat</option>
                        <option value="bunglow">Bunglow</option>
                        <option value="house">House</option>
                        <option value="apartment">Apartment</option>
                    </select>
                    <div id="propertytypehelp" className="form-text">....</div>
                </div>



                <div className="mb-3">
                    <label htmlFor="propertyname" className="form-label">Enter Property Name: </label>
                    <input type="text" className="form-control" id="propertyname" name="propertyname" value={info.propertyname}
                    onChange={(e)=>{dispatch({type:'update', fid:'propertyname', val: e.target.value})}} />
                    <div id="propertynamehelp" className="form-text">....</div>
                </div>

                <div className="mb-3">
                    <label htmlFor="pdesc" className="form-label">Enter Property description : </label>
                    <input type="text" className="form-control" id="pdesc" name="pdesc" value={info.pdesc}
                    onChange={(e)=>{dispatch({type:'update', fid:'pdesc', val: e.target.value})}} />
                    <div id="pdeschelp" className="form-text">....</div>
                </div>



                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Enter Price : </label>
                    <input type="number" className="form-control" id="price" name="price" value={info.price}
                    onChange={(e)=>{dispatch({type:'update', fid:'price', val: e.target.value})}} />
                    <div id="pricehelp" className="form-text">....</div>
                </div>

                <div className="mb-3">
                    <label htmlFor="deposit" className="form-label">Enter deposit Amount : </label>
                    <input type="number" className="form-control" id="deposit" name="deposit" value={info.deposit}
                    onChange={(e)=>{dispatch({type:'update', fid:'deposit', val: e.target.value})}} />
                    <div id="deposithelp" className="form-text">....</div>
                </div>

                <button type="submit" className="btn btn-primary mb-3" onClick={(e) => {sendData(e)}}>Submit</button>
                <button type="reset" className="btn btn-primary mb-3" onClick={() => {dispatch({type:'reset'})}}>Reset</button>
                                                
                <p>{JSON.stringify(info)}</p>
            </form>
        </div>
    )
}