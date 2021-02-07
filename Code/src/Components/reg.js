import React from 'react';
import '../assest/Css/reg.css';
import swal from 'sweetalert';

export default class Login extends React.Component {

    state = {
        name:"",
        email: "",
        password: "" ,
     
      
     }
nameHandler = (event) => {
this.setState({name: event.target.value })
        }
 emailHandler = (event) => {
 this.setState({ email: event.target.value })
 }
 passwordHandler = (event) => {
  this.setState({ password: event.target.value })
 }

 Register = (event) => {
    event.preventDefault();
    
    if(this.state.password.length < 6 && this.state.name.length > 3 && this.state.email !== null && this.state.password !== null && this.state.name !== null ){
        swal({
            title: "You are Registeried Successfully ",
            text: "Welcome!",
            icon: "success",
            button: "ok ",
        });
    let obj = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
    }
    localStorage.setItem('user', JSON.stringify(obj))
     }else{
        swal({
            title: "Your data is incorect",
            text: "Try again!",
            icon: "error",
            button: "ok ",
        });
    }

        let Data = localStorage.getItem('user');
        Data = JSON.parse(Data);
        // console.log(Data.email);

}
Login =(event)=>{
    event.preventDefault();
    let Data = localStorage.getItem('user');
    Data = JSON.parse(Data);
   if(Data.email == this.state.email
      &&  Data.password == this.state.password &&
       Data.name == this.state.name){
     return window.location.assign("http://localhost:3003/")
  
   }else{
    alert('wrong in login');
   }
  }
 render(){
    return(
        <div className="wrapper" style={{backgroundImage: 'url("https://images.pexels.com/photos/4099126/pexels-photo-4099126.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")'}}>
            <div className="inner">
                <div className="image-holder">
                    <img src="https://images.pexels.com/photos/4099126/pexels-photo-4099126.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Register" />
                </div>
                <form action>
                    <h3>Registration Form</h3>
                    <div className="form-wrapper">
                        <input type="text" placeholder="username" name="name" className="form-control"   onChange={this.nameHandler} required />
                    </div>
                    <div className="form-wrapper">
                        <input type="text" placeholder="Email Address" name="email" className="form-control"   onChange={this.emailHandler} required />
                        <i className="zmdi zmdi-email" />
                    </div>
                    <div className="form-wrapper">
                        <input type="password" placeholder="Password" name="password" className="form-control"   onChange={this.passwordHandler} required/>
                        <i className="zmdi zmdi-lock" />
                    </div>
                   <div>
                    <button onClick={this.Register}>Register
                        <i className="zmdi zmdi-arrow-right" />
                    </button>
                    
                    <button onClick={this.Login}>Login
                        <i className="zmdi zmdi-arrow-right" />
                    </button>
                    {this.state.errormessage}
                    </div>
                   
                </form>
            </div>
        </div>

    )
}

}
