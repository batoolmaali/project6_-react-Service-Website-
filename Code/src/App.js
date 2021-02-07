import React, { Component } from 'react'
import VideoBg from './Components/VideoBackground';
import LandingServices from './Components/Services';
import Testimonial from './Components/testimonial';
import Youtube from './Components/youtube';
import Team from './Components/team';
import Cart from './Components/cart';
import Register from './Components/Register';
import Login from './Components/Login';
import Products from './Components/product';
// import Products from './Components/product';
import YoutubeV from './Components/YoutubeAPI';
import Footer from './Components/footer';
// import Nav from './Components/Navigation';
import Slider from './Components/Slider';
import NewApp from './NewApp';
import { BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import Services from './Components/Services';
import Navbar from './Components/nav';
import Reg from './Components/reg';

export default class App extends Component {
  render() {
    return (
      <Router>
      <div>
        {/* <Navbar />
        <VideoBg />
        <LandingServices />
        <Testimonial />
        <Youtube />
        <Team />
        <Profile /> */}
        
         <Navbar /> 
         
        {/* <VideoBg />
        <LandingServices />
        <Testimonial />
        <Youtube />
        <Team /> */}
        <Route path="/" exact component={Home} />
        <Route path="/products" component={Services1} />
        {/* <Route path="/login" component={Login} /> */}
        <Route path="/register" component={Reg} />
        <Route path="/profile" component={Cart} /> 
         {/* <Product /> 
         <Register />
        <Login /> */}
        {/* <Navbar /> 
        <Cart /> */}
        
        <Footer />
       </div>
       </Router>
    )
  }
}  

const Home = () => {
  return(
  <div>
        <VideoBg />
        <LandingServices />
        <Testimonial />
        <YoutubeV />
        <Team />
        </div>
  );
}

const Services1 = () => {
  return (
      <div>
        <Slider />
        <NewApp />
        
      </div>

  );
}
