import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import React, {Component} from "react";
import '../assest/Css/slider.css';
// import image1 from'../../puublic/Images/test1.jpg';
// import image2 from'../../puublic/Images/test2.jpg';
// import image3 from'../../puublic/Images/test3.jpg';
// import image4 from'./images/test4.jpg';

class Slider extends Component {
    render() {
        return (
                <AliceCarousel autoPlay autoPlayInterval="3000">
                    <img src="../Images/Cake1.jpg" className="sliderimg" alt="Cake Photo" />
                    <img src="../Images/Cake2.jpg"  className="sliderimg" alt="Cake Photo" />
                    <img src="../Images/Cake9.jpg" className="sliderimg" alt="Cake Photo" />
                    
                </AliceCarousel>
        );
    }
}
 export default Slider;