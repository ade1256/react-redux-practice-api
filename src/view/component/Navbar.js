import React, { Component } from 'react'
import './Navbar.scss'

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="main-menu">
                    <ul>
                    <li className="active">
                        <a href="/home">
                        <i className="fa fa-home fa-2x" />
                        <span className="nav-text">
                            Beranda
                        </span>
                        </a>
                    </li>
                    </ul>
                    <ul className="logout">
                    <li>
                        <a href="/logout">
                        <i className="fa fa-power-off fa-2x" />
                        <span className="nav-text">
                            Logout
                        </span>
                        </a>
                    </li>  
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navbar;