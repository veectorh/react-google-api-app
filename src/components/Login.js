import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

export default function Login() {

    const [input, setInput] = useState("");
    const [redirect, setRedirect] = useState(false)

    const preventswitch = e => !input ? setRedirect(false): setRedirect(true);
    function handleSubmit(e) {
        e.preventDefault();
        preventswitch(e)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Email:
                <input type="email" className="form-control" value={input} onChange={e => setInput(e.target.value)} />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </label>
              </div>
              {redirect === false ? <Redirect  to= '/' /> : <Redirect  to= "/home" />}
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
