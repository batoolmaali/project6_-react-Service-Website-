import React ,{useState} from 'react';
import {BsClock} from "react-icons/bs";
import {FaBirthdayCake, FaCookie} from "react-icons/fa";
import {BsBook} from "react-icons/bs";
import {FiUser} from "react-icons/fi";
import {FaHeart} from "react-icons/fa";
import '../assest/Css/cake.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel,Item } from 'react-bootstrap';
export default function Products({addToCart}) {
 
    const [products]= useState([
        {
    
    name:'Chunky Monkey Cupcakes',
    time:"20 min",
    ingredient:" 7 ingredients ",
    persons:"2-4",
    cost:'Pour hot cream over chocolate chips in a bowl. Let sit for a few minutes, then whisk, increasing speed gradually, until color is uniform. Spread ganache over the cooled cupcakes and garnish with banana chips. Refrigerate to firm up the frosting, if desired.',
    img:"https://besthqwallpapers.com/Uploads/19-4-2018/48982/thumb-cupcake-pink-blue-cream-pastry-dessert-sweet.jpg"
        },
        {
          name:'Tiramisu Layer Cake',
          time:"30 min",
          persons:"5-6",
          ingredient:" 10 ingredients ",
          cost:'Pour hot cream over chocolate chips in a bowl. Let sit for a few minutes, then whisk, increasing speed gradually, until color is uniform. Spread ganache over the cooled cupcakes and garnish with banana chips. Refrigerate to firm up the frosting, if desired.',
       img:'https://th.bing.com/th/id/R2c8f2023e9c27b336853b7f9e017b3ad?rik=R%2bpAAKa4hmk78w&riu=http%3a%2f%2fcarlascakesonline.com%2fwp-content%2fuploads%2f2014%2f08%2fcarlascakes-cupcakes-pink-and-blue-tiffany-blue-rose-elegant-ottawa-custom-cupcakes-deliver-in-ottawa-birthday-cupcakes-400x250.jpg&ehk=iH8LDcdEhpgwyC6P2yeR66UO4Kj%2fBztMhhOJK2hGuBg%3d&risl=&pid=ImgRaw'
      
        },
        {
            name:'Tandy Cake',
            time:"15 min",
            persons:"3-4",
            ingredient:" 5 ingredients ",
            cost:'Pour hot cream over chocolate chips in a bowl. Let sit for a few minutes, then whisk, increasing speed gradually, until color is uniform. Spread ganache over the cooled cupcakes and garnish with banana chips. Refrigerate to firm up the frosting, if desired.',
            img:'https://th.bing.com/th/id/Rfbb98c91554df7187edda2cb0ecf35eb?rik=D1i50qABHVKreg&riu=http%3a%2f%2fcarlascakesonline.com%2fwp-content%2fuploads%2f2014%2f08%2fcupcakes-400x250.jpg&ehk=oSbHihcK4gGEkhYL6SxxeQvb%2bvI08PT293QCCh3%2fIPk%3d&risl=&pid=ImgRaw'
        
          },
          {
            name:'Baked Apple Cider Donuts',
            time:"40 min",
            persons:"2-4",
            ingredient:" 4 ingredients ",
            cost:'Pour hot cream over chocolate chips in a bowl. Let sit for a few minutes, then whisk, increasing speed gradually, until color is uniform. Spread ganache over the cooled cupcakes and garnish with banana chips. Refrigerate to firm up the frosting, if desired.',
            img:'https://cakefactory.com.au/wp-content/uploads/Choc-Cupcake-copy-400x250.jpg'
        
          },
          {
            name:'Baked Buttermilk Donuts',
            time:"45 min",
            persons:"6-8",
            ingredient:" 2 ingredients ",
            cost:'Pour hot cream over chocolate chips in a bowl. Let sit for a few minutes, then whisk, increasing speed gradually, until color is uniform. Spread ganache over the cooled cupcakes and garnish with banana chips. Refrigerate to firm up the frosting, if desired.',
            img:'https://activator-production.s3.amazonaws.com/asset/images/images/2626/original/2626.jpg'
        
          },
          {
            name:'Funfetti® Donut Holes',
            time:"1 hour",
            ingredient:" 6 ingredients ",
            persons:"6-8",
            cost:'Pour hot cream over chocolate chips in a bowl. Let sit for a few minutes, then whisk, increasing speed gradually, until color is uniform. Spread ganache over the cooled cupcakes and garnish with banana chips. Refrigerate to firm up the frosting, if desired.',
            img:'https://img.pngio.com/-mini-donut-png-450_300.png'
        
          }
      
      ]);
 
    return (
        <>
<h1 style={{"text-align":"center","margin-top":"2%",marginBottom:"7%",color:"#f05f7b"}}>CATEGORICAL RECIPE INDEX</h1>
      <div className="container">
        <div className="row"  >
        
        {products.map((product , index)=>(
          //  margin: auto;
          //  display: flex;
          //  justify-content: space-between;
          // style={{ margin: 'auto', display: 'flex' , justifyContent: 'space-between' }}
          // style={{"width":"25rem",height:"170", textAlign:"center", backgroundColor:" #ffffff","margin-bottom":"7%"}}
          
     <div className="col-md-4" >
      <div className="card1" key={index}>
      <div className="overflow">
      <img src={product.img} alt={products.name} className="card1-img-top" style={{"width":"40rem",height:"250px"}} />
      </div>
      <ul className="list-group list-group-flush">
      <li className="list-group-item" style={{fontSize: "21px",fontWeight: "300px", }}>{product.name}</li>
      </ul>
  <hr/>
      <div className="card1-body">
      <div style={{marginBottom:"5%"}}>
      <span className="input-group=text" ><BsClock size={25} style={{marginLeft:"1%" }} />  <span style={{color:" #f05f7b",marginLeft:"1%" }} >{product.time}</span></span> <span> <BsBook size={25}  /> <span style={{color:"#f05f7b",marginLeft:"1%"  }} >
      {product.ingredient} </span></span>  <span><FiUser size={25} />  <span style={{color:" #f05f7b",marginLeft:"1%"  }} >{product.persons}</span></span></div>
      <p className="card1-text" style={{fontSize : '1.5rem'}}>{product.cost}</p>
     
      </div>
      <div className="card1-body" style={{textAlign:"center"}}  >
      <button  class="btn btn-primary"style={{backgroundColor:"#f05f7b",border:"1px solid #f05f7b", marginBottom:"2%" , fontSize: '1.5rem' , textAlign: 'center'}}  onClick={()=>addToCart(product)}> <FaHeart /> add to favorites</button> 
      </div>
      </div>
      </div>
       ))}
     
       </div>
       </div>
       
       </>
     


    )
}
