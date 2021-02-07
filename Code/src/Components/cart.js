import React  from 'react';
import '../assest/Css/profile.css';
import {BsClock} from "react-icons/bs";
import {FaBirthdayCake, FaCookie} from "react-icons/fa";
import {BsBook} from "react-icons/bs";
import {FiUser} from "react-icons/fi";
import {FaHeart} from "react-icons/fa";
import {BsTrash} from "react-icons/bs";
import Weather from './WeatherAPI';
export default function Cart({cart ,RemoveCart}) {
  const myproducts=JSON.parse(sessionStorage.getItem('myproducts'))
  
  let rr = localStorage.getItem('user');
  let Data = JSON.parse(rr);
  // console.log(Data.email);


  if(rr){
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

<Weather />
{/* End */}
<div className="divbac">
<div className="row py-5 px-4" >
  <div className="container"  style={{width:"80%"}}>
    {/* Profile widget */}
    <div className="bg-white shadow rounded overflow-hidden" >
      <div className="px-4 pt-0 pb-4 bg-dark">
        <div className="media align-items-end profile-header"  style={{marginLeft:"5%"}}>
          <div className="profile mr-3" >
            <img  
              src="https://media.istockphoto.com/vectors/imagine-an-apron-woman-vector-id628984502?k=6&m=628984502&s=612x612&w=0&h=N9tTWIP3QUe-p3evOz5u05DQM-w0IByXGMWo78uuaEc="
              alt="User Image"
              style={{width:"230px",height:"240px" ,  marginBottom: '3%'}}
              className="rounded mb-2 img-thumbnail"
            />
            <h1 style={{marginBottom : '3%'}}>{Data.name}</h1>
            <h1 style={{marginBottom : '3%'}}>{Data.email}</h1>
          </div>
         
          <div className="media-body mb-5 text-white">
            {/* <h4 className="mt-0 mb-0">Manuella Tarly</h4> */}
            <p className="small mb-4">
              <i className="fa fa-map-marker mr-2"/>
            </p>
          </div>
        </div>
      </div>
     
      <div className="py-4 px-4" style={{marginTop:"5%"}}>
        <div
          className="d-flex align-items-center justify-content-between mb-3"
        >
          <h3 className="mb-0"> <FaHeart  />  <span> Favourite Recipe </span> </h3>
          <a href="#" className="btn btn-link text-muted"> </a>
        </div>
      
        <div className="row"> 
      
      {myproducts.map((product , index)=>(  
   <div className="col-md-4">
    <div className="card1" key={index} style={{"width":"40rem",height:"170", textAlign:"center", backgroundColor:" #ffffff","margin-bottom":"7%" , fontSize: '2rem'}}>
    <div className="overflow">
    <img src={product.img} alt={product.name} style={{"width":"40rem",height:"250px"}} className="card1-img-top"/>
    </div>
    <ul className="list-group list-group-flush">
    <li className="list-group-item" style={{fontSize: "21px",fontWeight: "300px", }}>{product.name}</li>
    </ul>
    <hr />
    <div className="card1-body">
    <div>
    <span className="input-group=text" ><BsClock size={25}  />  <span style={{color:" #ff80aa" }} >{product.time} </span></span> <span> <BsBook size={25} /> <span style={{color:" #ff80aa" }} >
    {product.ingredient} </span></span>  <span><FiUser size={25} />  <span style={{color:" #ff80aa" }} >{product.persons}</span></span></div>
    <hr />
    <p className="card1-text" style={{fontSize:'1.5rem'}}>{product.cost}</p>
   
    </div>
    <div className="card1-body" style={{textAlign:"center"}}  >
   
    <button class="btn btn-primary"style={{backgroundColor:" #ff80aa", color:"black" , marginBottom:"2%" , fontSize:'2rem' , textAlign:'center'}}  onClick={()=>RemoveCart(product)}><BsTrash /> remove</button>
    </div>
    </div>
    </div>

     ))}

     </div>
        <div className="py-4">
          
        </div>
      </div>
    </div>
    {/* End profile widget */}
  </div>
</div>
</div>
     </>

  );
  }
  else {
    return (
    <h1 style={{textAlign:'center' , marginTop : '50px'}}>E3ml Login ya j7sh</h1>
    );
  }

    
}