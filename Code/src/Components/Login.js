import React from 'react';
import '../assest/Css/register.css';
function Register() {
    return(
        <div className="wrapper" style={{backgroundImage: 'url("images/bg-registration-form-1.jpg")'}}>
            <div className="inner">
                <div className="image-holder">
                    <img src="https://images.pexels.com/photos/4099126/pexels-photo-4099126.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Cake Photo" />
                </div>
                <form action>
                    <h3>Login Form</h3>

                    <div className="form-wrapper">
                        <input type="text" placeholder="Email Address" className="form-control" />
                        <i className="zmdi zmdi-email" />
                    </div>
                    <div className="form-wrapper">
                        <input type="password" placeholder="Password" className="form-control" />
                        <i className="zmdi zmdi-lock" />
                    </div>

                    <button>Login
                        <i className="zmdi zmdi-arrow-right" />
                    </button>
                   
                </form>
            </div>
        </div>

    )
}
export default Register;