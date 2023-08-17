export default function LogInComp()
{
    return(
        <div>
            <h1>Login Form</h1>
            <form method="post">
                Email:
                <input type="text" id="email" name="email"/><br/>
                Password:
                <input type="password" id="pass" name="pass"/><br/>
                <input type="submit" value="Submit"/>
                <input type="reset" value="Reset"/>
            </form>
        </div>
    )
}