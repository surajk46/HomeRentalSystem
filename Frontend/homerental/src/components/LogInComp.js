export default function LogInComp()
{
    return(
        <div className="">
            <h1>Login Form</h1>
            <form method="post">
                Email:
                <input type="text" id="email" name="email" className="form-control form-control-sm"/><br/>
                Password:
                <input type="password" id="pass" name="pass" className="form-control form-control-sm"/><br/>
                <input type="submit" value="Submit" className="btn  btn-primary"/>
                <input type="reset" value="Reset" className="btn "/>
            </form>
        </div>
    )
}