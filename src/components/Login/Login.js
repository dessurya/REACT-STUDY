import React, { useState } from 'react';
import PropTypes from 'prop-types';

async function loginUser(credentials) {
    return fetch('http://localhost:7070/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
    }).then(data => data.json())
}

export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });
        setToken(token);
    }

  return(
    <div className='d-flex justify-content-center align-items-center vw-100 vh-100'>
      <div className="card">
        <div className="card-header">
          LOGIN
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row row-cols-1">
                <div className="col">
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" onChange={e => setUserName(e.target.value)} />
                    </div>
                </div>
                <div className="col">
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" onChange={e => setPassword(e.target.value)} />
                    </div>
                </div>
                <div className="col mt-5">
                    <button className="btn btn-success btn-sm">Submit</button>
                </div>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}