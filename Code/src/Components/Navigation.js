import React, {Component} from 'react'
import {Link} from "react-router-dom";
import '../assest/Css/nav-style.css';

export default class Navigation extends Component {
    handleLogout = () => {
        localStorage.clear();
        this.props.setUser(null);
    }
    render() {
        let buttons;

        if(this.props.user){
            buttons = (
                <ul className="nav-ul">
                    <li className="nav-li">
                        <Link to={'/'} onClick={this.handleLogout} className="nav-links">Logout</Link>
                    </li>
                </ul>
            )
        } else {
            buttons = (<ul className="nav-ul">
                <li className="nav-li">
                    <Link to={'/login'} className="nav-links">Login</Link>
                </li>
                <li className="nav-li">
                    <Link to={'/register'} className="nav-links">Sign up</Link>
                </li>
            </ul>
            )
        }
        return (
            <div className={'nav-container'}>
                <nav className="sub-nav-container">
                    <div className={'main-nav'}>
                        <div className={'nav-logo'}>
                            <Link to={'/'} className="">Home</Link>
                        </div>
                        <div className={'nav-pages'}>
                            <Link to={'/services'} className="">Services</Link>
                            <Link to={'/about'} className="">About</Link>
                            <Link to={'/about'} className="">About</Link>
                        </div>
                    </div>
                        <div className="nav-buttons">
                            {buttons}
                        </div>
                </nav>
            </div>
        );
    }
}
