// import React from 'react';
import '../assest/Css/tes.css';


import React, { Component } from 'react'

export default class Testimonial extends Component {

  state = {
    Testimonials : [
      { review : 'You guys are the best! Keep up the great work!' , name : 'Lojain Nahas'},
      { review : 'Loved the recipes , I tried two of them and it was perfect as description' , name : 'Sadi Ashlaq'},
      { review : 'whenever i need to make a cake i just come here and find many suggestions' , name : 'Kawthar Al-jabali'},

    ]
  }
  render() {
    return (
      <div className="container" style={{marginTop:"5%"}}>
        <div className="row">
          <div className="col-md-8 col-center">
            <h2>Testimonials</h2>
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
             
              <ol className="carousel-indicators">
                
              </ol>
              
              <div className="carousel-inner">
              <div className="item active">
                <div className="img-box">
                  <img src="https://media.istockphoto.com/vectors/imagine-an-apron-woman-vector-id628984502?k=6&m=628984502&s=612x612&w=0&h=N9tTWIP3QUe-p3evOz5u05DQM-w0IByXGMWo78uuaEc=" alt="User Image" />
                </div>
                <h3 className="testimonial">
                  {this.state.Testimonials[0].review}
                </h3>
                <p className="overview"><b>{this.state.Testimonials[0].name}</b></p>
                </div>
                {this.state.Testimonials.map(( person , index) => {
                  if(index > 0){
              return(
                <div className="item" key={index}>
                  <div className="img-box">
                    <img src="https://media.istockphoto.com/vectors/upsetting-apron-women-vector-id628986038?k=6&m=628986038&s=612x612&w=0&h=f617tN6Xq9qo6UXx-tzMQOdYyhwxosCu5a20QO0X2rg=" alt="User image" />
                  </div>
                  <h3 className="testimonial">
                    {person.review}
                  </h3>
                  <p className="overview"><b>{person.name}</b></p>
                </div>
              );
              }
                })}
               
                {/* <div className="item">
                  <div className="img-box">
                    <img src="https://media.istockphoto.com/vectors/upsetting-apron-women-vector-id628986038?k=6&m=628986038&s=612x612&w=0&h=f617tN6Xq9qo6UXx-tzMQOdYyhwxosCu5a20QO0X2rg=" alt="" />
                  </div>
                  <p className="testimonial">
                    Vestibulum quis quam ut magna consequat faucibus. Pellentesque
                    eget nisi a mi suscipit tincidunt. Utmtc tempus dictum risus.
                    Pellentesque viverra sagittis quam at mattis. Suspendisse potenti.
                    Aliquam sit amet gravida nibh, facilisis gravida odio.
                  </p>
                  <p className="overview"><b>Antonio Moreno</b>, Web Developer</p>
                </div>
                <div className="item">
                  <div className="img-box">
                    <img src="https://coffeekatblog.files.wordpress.com/2019/08/happy-girl.jpeg" alt="" />
                  </div>
                  <p className="testimonial">
                    Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id
                    lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus
                    turpis at accumsan tincidunt. Phasellus risus risus, volutpat vel
                    tellus ac, tincidunt fringilla massa. Etiam hendrerit dolor eget
                    rutrum.
                  </p>
                  <p className="overview"><b>Michael Holz</b>, Seo Analyst</p>
                </div> */}
              </div>
              {/* Carousel controls */}
              <a
                className="carousel-control left"
                href="#myCarousel"
                data-slide="prev"
              >
                <i className="fa fa-angle-left" />
              </a>
              <a
                className="carousel-control right"
                href="#myCarousel"
                data-slide="next"
              >
                <i className="fa fa-angle-right" />
              </a>
            </div>
          </div>
        </div>
      </div>

    )
  }
}










// const Testimonial = () => {
//     return (

//         <div className="container" style={{marginTop:"5%"}}>
//         <div className="row">
//           <div className="col-md-8 col-center">
//             <h2>Testimonials</h2>
//             <div id="myCarousel" className="carousel slide" data-ride="carousel">
             
//               <ol className="carousel-indicators">
                
//               </ol>
              
//               <div className="carousel-inner">

//                 <div className="item active">
//                   <div className="img-box">
//                     <img src="https://media.istockphoto.com/vectors/imagine-an-apron-woman-vector-id628984502?k=6&m=628984502&s=612x612&w=0&h=N9tTWIP3QUe-p3evOz5u05DQM-w0IByXGMWo78uuaEc=" alt="" />
//                   </div>
//                   <p className="testimonial">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu
//                     sem tempor, varius quam at, luctus dui. Mauris magna metus,
//                     dapibus nec turpis vel, semper malesuada ante. Idac bibendum
//                     scelerisque non non purus. Suspendisse varius nibh non aliquet.
//                   </p>
//                   <p className="overview"><b>Paula Wilson</b>, Media Analyst</p>
//                 </div>
                {/* <div className="item">
                  <div className="img-box">
                    <img src="https://media.istockphoto.com/vectors/upsetting-apron-women-vector-id628986038?k=6&m=628986038&s=612x612&w=0&h=f617tN6Xq9qo6UXx-tzMQOdYyhwxosCu5a20QO0X2rg=" alt="" />
                  </div>
                  <p className="testimonial">
                    Vestibulum quis quam ut magna consequat faucibus. Pellentesque
                    eget nisi a mi suscipit tincidunt. Utmtc tempus dictum risus.
                    Pellentesque viverra sagittis quam at mattis. Suspendisse potenti.
                    Aliquam sit amet gravida nibh, facilisis gravida odio.
                  </p>
                  <p className="overview"><b>Antonio Moreno</b>, Web Developer</p>
                </div>
                <div className="item">
                  <div className="img-box">
                    <img src="https://coffeekatblog.files.wordpress.com/2019/08/happy-girl.jpeg" alt="" />
                  </div>
                  <p className="testimonial">
                    Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id
                    lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus
                    turpis at accumsan tincidunt. Phasellus risus risus, volutpat vel
                    tellus ac, tincidunt fringilla massa. Etiam hendrerit dolor eget
                    rutrum.
                  </p>
                  <p className="overview"><b>Michael Holz</b>, Seo Analyst</p>
                </div> */}
              // </div>
              {/* Carousel controls */}
//               <a
//                 className="carousel-control left"
//                 href="#myCarousel"
//                 data-slide="prev"
//               >
//                 <i className="fa fa-angle-left" />
//               </a>
//               <a
//                 className="carousel-control right"
//                 href="#myCarousel"
//                 data-slide="next"
//               >
//                 <i className="fa fa-angle-right" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

       
//     );
// }

