import React from "react";

export default function Nav() {
    const handleLogOut = () => {
        localStorage.removeItem('token')
        window.location.reload()
    }

    return(
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" data-widget="pushmenu" href={() => false} role="button"><i className="fas fa-bars"></i></a>
                </li>
            </ul>

            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" onClick={handleLogOut} href={() => false} role="button" alt="sign-out" title="sign out">
                        <i className="fas fa-sign-out-alt"></i>
                    </a>
                </li>
            </ul>
        </nav>
    )
}