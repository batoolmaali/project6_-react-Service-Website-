import React  from 'react';
import '../assest/Css/cart.css'
import {BsClock} from "react-icons/bs";
import {BsBook} from "react-icons/bs";
import {FiUser} from "react-icons/fi";
import {FaHeart} from "react-icons/fa";
import {BsTrash} from "react-icons/bs";


export default function Cart({cart ,RemoveCart}) {
 
    return (
      
        <>
        {/* <div>
        <h1>cart</h1>
        {cart.map((product , index)=>(
         <div key={index}>
         <h3>{product.name}</h3>
         <h3>{product.cost}</h3>
         <img src={product.img} alt={product.name}/>
         <button onClick={()=>RemoveCart(product)}> remove</button> 
       </div>
       ))}
       </div> */}

       <div className="row">
  
  </div>
  {/* End */}
  <div className="row py-5 px-4">
    <div className="col-xl-4 col-md-6 col-sm-10 mx-auto"  style={{width:"70%"}}>
      {/* Profile widget */}
      <div className="bg-white shadow rounded overflow-hidden" >
        <div className="px-4 pt-0 pb-4 bg-dark">
          <div className="media align-items-end profile-header"  style={{marginLeft:"5%"}}>
            <div className="profile mr-3"  >
              <img  
                src="https://media.istockphoto.com/vectors/imagine-an-apron-woman-vector-id628984502?k=6&m=628984502&s=612x612&w=0&h=N9tTWIP3QUe-p3evOz5u05DQM-w0IByXGMWo78uuaEc="
                alt="..."
                style={{width:"230px",height:"240px"}}
                className="rounded mb-2 img-thumbnail"
              />
            </div>
           
            <div className="media-body mb-5 text-white">
              {/* <h4 className="mt-0 mb-0">Manuella Tarly</h4> */}
              <p className="small mb-4">
                <i className="fa fa-map-marker mr-2"   style={{height:"30px"}}/>batool maali
              </p>
            </div>
          </div>
        </div>
       
        <div className="py-4 px-4">
          <div
            className="d-flex align-items-center justify-content-between mb-3"
          >
            <h5 className="mb-0"> <FaHeart  />  <span> favorites RECIPE </span> </h5>
            <a href="#" className="btn btn-link text-muted"> </a>
          </div>
          
           
            
            
          <div className="row"> 
        {cart.map((product , index)=>(
     <div className="col-md-4">
      <div className="card" key={index} style={{"width":"22rem",height:"170", textAlign:"center", backgroundColor:" #ffffff","margin-bottom":"7%"}}>
      <div className="overflow">
      <img src={product.img} alt={product.name} style={{"width":"20rem",height:"250px"}} className="card1-img-top"/>
      </div>
      <ul className="list-group list-group-flush">
      <li className="list-group-item" style={{fontSize: "21px",fontWeight: "300px", }}>{product.name}</li>
      </ul>
      
      <div className="card-body">
      <div>
      <span className="input-group=text" ><BsClock size={25}  />  <span style={{color:" #ff80aa" }} >20 min </span></span> <span> <BsBook size={25} /> <span style={{color:" #ff80aa" }} >
      5 Ingred </span></span>  <span><FiUser size={25} />  <span style={{color:" #ff80aa" }} >4-6persons</span></span></div>
      <p className="card-text">{product.cost}</p>
     
      </div>
      <div className="card-body" style={{textAlign:"center"}}  >
     
      <button class="btn btn-primary"style={{backgroundColor:" #ff80aa", color:"black"}}  onClick={()=>RemoveCart(product)}><BsTrash /> remove</button>
      </div>
      </div>
      </div>
    
       ))}
       </div>

   
  







           
      
          <div className="py-4">
            <h5 className="mb-3">Recent posts</h5>
            <div className="p-4 bg-light rounded shadow-sm">
              <p className="font-italic mb-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
              <ul className="list-inline small text-muted mt-3 mb-0">
                <li className="list-inline-item">
                  <i className="fa fa-comment-o mr-2" />12 Comments
                </li>
                <li className="list-inline-item">
                  <i className="fa fa-heart-o mr-2" />200 Likes
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End profile widget */}
    </div>
  </div>

       </>

    )
}