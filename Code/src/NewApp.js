import React, { useState } from 'react';
import Cart from './Components/cart';
import Products from './Components/product';
import './assest/Css/NewApp.css';
import swal from 'sweetalert';
import { Link} from 'react-router-dom';

const PAGE_PRODUCT="products";
const PAGE_CART="cart";
 function NewApp() {
  const [cart, setCart]= useState([]);
  const [page, setPage]= useState(PAGE_PRODUCT);
  const myprod=JSON.parse(sessionStorage.getItem('myproducts'))
  const [myproducts]=useState([
    {
        name:'Chunky Monkey Cupcakes',
        time:"20 min",
        ingredient:" 7 ingredients ",
        persons:"2-4",
        cost:'Pour hot cream over chocolate chips in a bowl. Let sit for a few minutes, then whisk, increasing speed gradually, until color is uniform. Spread ganache over the cooled cupcakes and garnish with banana chips. Refrigerate to firm up the frosting, if desired.',
        img:"https://besthqwallpapers.com/Uploads/19-4-2018/48982/thumb-cupcake-pink-blue-cream-pastry-dessert-sweet.jpg"
            }  
 ])
 const addToCart= (product)=>{
  swal({
    // title:  'yolaaaa' ,
    title: "You are added recipe to favourite successfully ",
    text: "Go Cock!",
    icon: "success",
    button: "ok ",
});
  // setCart([...cart,product]);
  setCart([myproducts]);
  myproducts.push({name:product.name,
  time:product.time,
  ingredient:product.ingredient,
  persons:product.persons,
  cost:product.cost,
  img:product.img
})
  sessionStorage.setItem('myproducts',JSON.stringify(myproducts));
}


const navTO=(nextpage)=>{
    setPage(nextpage);

    }

const RemoveCart=(index)=>{
      // setCart(myproducts.filter((product)=> product !==productTOremove))
      const myproducts1=JSON.parse(sessionStorage.getItem('myproducts')) 
      myproducts1.splice(index,1);
      setCart([myproducts1]);
      sessionStorage.setItem('myproducts',JSON.stringify(myproducts1));
    }
    
  return (
    <div>
 <div className="containButton">
   
  <button id="goToCart" className="btn btn-secondary" onClick={()=> navTO(PAGE_CART)}>Go to profile</button>
 
  <button id="viewProduct" className="btn btn-secondary" onClick={()=> navTO(PAGE_PRODUCT)}>View products</button>
  </div>
    {page === PAGE_PRODUCT &&(<Products  addToCart={addToCart}/>)}
    {page === PAGE_CART && <Cart cart={cart} RemoveCart={RemoveCart} />}
</div>
    ); 
}
export default NewApp;