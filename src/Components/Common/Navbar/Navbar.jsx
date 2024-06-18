import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <span className="navbar-brand click-play" >ClickPlayZone</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto  mb-lg-0">
                        <li className="nav-item" onClick={() => navigate('/home')}>
                            Home
                        </li>
                        <li className="nav-item" onClick={() => navigate('/newcourt')}>
                            Create New Court
                        </li>
                        <li className="nav-item" onClick={() => navigate('/courts/courtlist')}>
                            Available Turf Locations
                        </li>
                        <li className="nav-item" onClick={() => navigate('/about')}>
                            About
                        </li>
                    </ul>
                    <span className="navbar-text">
                        <li className="nav-item dropdown">
                            <span className="nav-link dropdown-toggle user" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                                {/* {user.firstName+" " +user.lastName} */}
                            </span>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                                <li><span className="dropdown-item">Profile</span></li>
                                {/* <li><span className="dropdown-item">Another action</span></li> */}
                                <li><span className="dropdown-item">Logout</span></li>
                            </ul>
                        </li>
                    </span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar