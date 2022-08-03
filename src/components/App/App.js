import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../Login/Login';
import Nav from '../AdminLTE/Nav';
import Aside from '../AdminLTE/Aside';
import Dashboard from '../Dashboard/Dashboard';
import Preferences from '../Preferences/Preferences';
import useToken from './useToken'

function App () {
    const { token, setToken } = useToken()

    if(!token) { return <Login setToken={setToken} /> }

    return (
        <div className="wrapper">
          <Nav />
          <Aside token={token} />
          <div className="content-wrapper">
            <BrowserRouter>
              <Routes >
                <Route path='/dashboard' element={<Dashboard/>} />
                <Route path='/preferences' element={<Preferences/>} />
              </Routes >
            </BrowserRouter>
          </div>
          <footer className="main-footer"><div className="float-right d-none d-sm-block"><b>Version</b> 3.1.0-pre</div><strong>Copyright &copy; 2014-2020 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.</footer>
          <aside className="control-sidebar control-sidebar-dark"></aside>
        </div>
      );
}

export default App;