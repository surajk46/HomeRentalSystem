

export default function TenantReg1()
{

    // const gotoHome = () =>
    // {
    //    navigate("/");
    // }

    return(
        <div>
            <h1>Tenant SignUp Form</h1>
            <form >
                                    <div className="form-group">
                                        <table className="table table-md c-table" >
                                            <tr >
                                                <td colSpan={2}>
                                                    <input type="text" placeholder="user id/email" name="uid" id="uid" className="form-control form-control-sm" />
                                                </td>
                                            </tr>
                                        
                                            <tr>
                                                <td colSpan={2}>
                                                    <input type="password" placeholder="Password" name="pwd" id="pwd" className="form-control form-control-sm"/>
                                                </td>
                                            </tr>
                                            
                                            <tr>
                                                <td colSpan={2}>
                                                    <input type="text" placeholder="First Name" name="fname" id="fname" className="form-control form-control-sm"/>
                                                </td>
                                            </tr>
                                           

                                            <tr>
                                                <td colSpan={2}>
                                                    <input type="text" placeholder="Last Name" name="lname" id="lname"className="form-control form-control-sm" />
                                                </td>
                                            </tr>
                                            

                                            {/* <tr>

                                                <td colSpan={2}>
                                                    <input type="text" placeholder="Birth date" name="bdate" id="bdate"className="form-control form-control-sm" />
                                                </td>
                                            </tr>
                                           
                                            <tr>

                                                <td colSpan={2}>
                                                    <input type="text" placeholder="Email" name="email" id="email" className="form-control form-control-sm" />
                                                </td>
                                            </tr> */}
                                           
                                            <tr>

                                                <td colSpan={2}>
                                                    <input type="text" placeholder="Contact" name="contact" id="contact" className="form-control form-control-sm" />
                                                </td>
                                            </tr>
                                           
                                            <tr>

                                                <td colSpan={2}>
                                                    <input type="text" placeholder="Area name" name="areaname" id="areaname" className="form-control form-control-sm" />
                                                </td>
                                            </tr>
                                           
                                            
                                         
                                            <tr>
                                                <td colSpan={2}>
                                                    <input type="text" placeholder="City" name="city" id="city"className="form-control form-control-sm" />
                                                </td>
                                            </tr>
                                           
                                            <tr>

                                                <td colSpan={2}>
                                                    <input type="text" placeholder="Pin Code" name="pincode" id="pincode" className="form-control form-control-sm" />
                                                </td>
                                            </tr>
                                            
                                            <tr>

                                                <td colSpan={2}>
                                                    <input type="text" placeholder="State" name="state" id="state" className="form-control form-control-sm" />
                                                </td>
                                            </tr>
                                           
                                            <tr>

                                                <td colSpan={2}>
                                                    <input type="text" placeholder="Country" name="country" id="country" className="form-control form-control-sm" />
                                                </td>
                                            </tr>
                                           
                                            <tr>
                                                <td >
                                                    <button type="submit" id="c-allbtn1"  className="btn  btn-primary">Register</button>
                                                </td>
                                                <td>
                                                    <button type="reset"  className="btn  btn-primary" id="c-allbtn1"  >Reset</button>
                                                </td>
                                            </tr>
                                            <tr>
                                            <td colSpan={2}>
                                                <button type='button'  className="btn  btn-primary" id="c-allbtn1"  >Back to Home</button>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </form>            
        </div>
    )
}