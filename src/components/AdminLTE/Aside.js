import React from "react";

export default function Aside({token}) {
    return (
        <aside idName="leftSideBar" className="main-sidebar sidebar-dark-primary elevation-4">
            <a href={() => false} className="brand-link">
                <img src="adminlte-dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" />
                <span className="brand-text font-weight-light">REACT STUDY</span>
            </a>
            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image"><img src="adminlte-dist/img/avatar5.png" className="img-circle elevation-2" alt="profile" /></div>
                    <div className="info"><a href={() => false} className="d-block">{token.user.name}</a></div>
                </div>
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li className="nav-item"><a href="/dashboard" className="nav-link">DASHBOARD</a></li>
                        <li className="nav-item"><a href="/preferences" className="nav-link">Preferences</a></li>
                    </ul>
                </nav>
            </div>
        </aside>
    )
}