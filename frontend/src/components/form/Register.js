import React , {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom'

function Register()
{

    const [name,setname] = useState("");
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
    const history = useHistory();


    async function signUp()
    {
            
        let item= {name,email,password};
        console.warn(item);

        let result = await fetch("http://localhost:8000/api/register",{
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        })
        result = await result.json();
        localStorage.setItem("user-info",JSON.stringify(result));
        history.push("/");
    }
    return(
        <>
        <div className="col-sm-6 offset-sm-3">
            <h1>Register</h1>
            <input type="text" value={name} onChange={(e)=>setname(e.target.value)} className="form-control" placeholder="name" />
            <br />
            <input type="text" value={email} onChange={(e)=>setemail(e.target.value)} className="form-control" placeholder="email" />
            <br />
            <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} className="form-control" placeholder="password" />
            <br />
            <button onClick={signUp} className="btn btn-primary">Sign Up</button>
            <br /><br />
            <Link to="/login"><a href="/login">Login</a> </Link>
        </div>d
        </>
    )
}

export default Register;