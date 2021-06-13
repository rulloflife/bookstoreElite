import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function login() {
        let item = (email, password);
        let result = await fetch("http://localhost:8000/api/login", {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        localStorage.setItem("user-info",JSON.stringify(result))
        history.push("/")
    }

    return (
        <div>   
            <div className="col-sm-6 offset-sm-3">
            <h1>Login</h1>
                <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="form-control" />
                <br />
                <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} className="form-control" />
                <br />
                <button onClick={login} className="btn btn-primary">Login</button>
            </div>
        </div>
    )
}

export default Login;