import React from 'react'
import '../assest/Css/nav.css';
import swal from 'sweetalert';
import { Link} from 'react-router-dom';


export default function Nav() {
    let rr = localStorage.getItem('user');


const logout = () => {
  rr =  localStorage.clear('user');
  swal({
    title: "Don't Leave us Please",
    text: "Wlaaaaaaaah",
    icon: "error",
    button: "ok ",
});
}

if(!rr){
    return (

        <div className="nav">
            <input type="checkbox" id="nav-check" />
            <div className="nav-header">
                <Link to="/">
                <div className="nav-title">
                    Cakelance
                </div>
                </Link>
            </div>
            <div className="nav-btn">
                <label htmlFor="nav-check">
                    <span />
                    <span />
                    <span />
                </label>
            </div>
            <div className="nav-links">
                <Link to="/products">
                Services
                </Link>
                
                <Link to="/register">
                Login
                </Link>
                <Link to="/register">
                Register
                </Link>
            </div>
        </div>
        );
}
else {
    return (

        <div className="nav">
            <input type="checkbox" id="nav-check" />
            <div className="nav-header">
                <Link to="/">
                <div className="nav-title">
                    Cakelance
                </div>
                </Link>
            </div>
            <div className="nav-btn">
                <label htmlFor="nav-check">
                    <span />
                    <span />
                    <span />
                </label>
            </div>
            <div className="nav-links">
                <Link to="/products">
                Services
                </Link>
                
                <Link to="/register" onClick={logout}>
                Logout
                </Link>
               
            </div>
        </div>
        );
}
    


    
}
