import React from 'react';
import '../assest/Css/cake.css';

const Cake =(props) =>{
return (
  
    <div className="container-fluid.d-flex.justify-content-center">
      <h1 style={{"text-align":"center","margin-top":"2%"}}>CATEGORICAL RECIPE INDEX</h1>
    <div className="row" style={{"margin-top":"7%", marginLeft:"10%"}}>
    
    <div className="col-md-4">   <div className="card" style={{"width":"360px",color:"black"}}>
        <div className="overflow">
        <img src="https://cdn.cupcakeproject.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2013/06/Chocolate-Cupcakes-19.jpg.webp" className="card-img-top" alt="..." style={{width:"360px",height:"440px"}} />
        </div>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div> </div>
      <div className="col-md-4">   <div className="card" style={{"width":"360px",color:"black"}}>
        <div className="overflow">
        <img src="https://cdn.cupcakeproject.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2013/06/Chocolate-Cupcakes-19.jpg.webp" className="card-img-top" alt="..." style={{width:"360px",height:"440px"}} />
        </div>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div> </div>
      <div className="col-md-4">   <div className="card" style={{"width":"360px",color:"black"}}>
        <div className="overflow">
        <img src="https://cdn.cupcakeproject.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2013/06/Chocolate-Cupcakes-19.jpg.webp" className="card-img-top" alt="..." style={{width:"360px",height:"440px"}} />
        </div>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div> </div>
      
    
   
      
    </div>
    </div>
);



}
export default Cake;