import React from 'react';
import '../assest/Css/register.css';
function Login() {
    return(
        <div className="wrapper" style={{backgroundImage: 'url("images/bg-registration-form-1.jpg")'}}>
            <div className="inner">
                <div className="image-holder">
                    <img src="https://images.pexels.com/photos/4099126/pexels-photo-4099126.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                </div>
                <form action>
                    <h3>Registration Form</h3>
                    <div className="form-group">
                        <input type="text" placeholder="First Name" className="form-control" />
                        <input type="text" placeholder="Last Name" className="form-control" />
                    </div>
                    <div className="form-wrapper">
                        <input type="text" placeholder="Email Address" className="form-control" />
                        <i className="zmdi zmdi-email" />
                    </div>
                    <div className="form-wrapper">
                        <input type="password" placeholder="Password" className="form-control" />
                        <i className="zmdi zmdi-lock" />
                    </div>
                    <div className="form-wrapper">
                        <input type="password" placeholder="Confirm Password" className="form-control" />
                        <i className="zmdi zmdi-lock" />
                    </div>
                    <button>Register
                        <i className="zmdi zmdi-arrow-right" />
                    </button>
                  
                </form>
            </div>
        </div>

    )
}
export default Login;