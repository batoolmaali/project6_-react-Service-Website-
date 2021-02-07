import React from 'react'
import '../assest/Css/Navbar.css';
import { Link} from 'react-router-dom';


export default function Navbar() {
    const NavStyle = {
        color : '#8c6565',
        listStyle: 'none',
        textDecoration : 'none',
        fontSize : '1.5rem'
    }
    return (
  
    <div>
        <nav>
       <Link style={NavStyle} to="/">
       
       </Link>
       <ul className="nav-links">
           <Link style={NavStyle} to="/products">
           <li>Services</li>
           </Link>
           <Link style={NavStyle} to="/profile">
           <li>Profile</li>
           </Link>
           <Link style={NavStyle} to="/login">
           <li>Login</li>
           </Link>
           <Link style={NavStyle} to="/register">
           <li>Register</li>
           </Link>
 
       </ul>
  
</nav>
{/* <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <a className="navbar-brand" href="#">Mouri</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Portfolio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav> */}


</div>
        
    )
}
