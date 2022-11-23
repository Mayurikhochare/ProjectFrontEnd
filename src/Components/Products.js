import React, { useState } from 'react';
import './Product.css';
import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


export default function Products({ setCart, cart }) {
  const [users,setUsers]=useState([]);

    const {id}=useParams();

    useEffect(()=>{
        loadUsers();

    },[]);

    const loadUsers=async ()=>{
        const result=await axios.get("http://localhost:8080/api/product");
        setUsers(result.data);
    }
  

  const addToCart = (product) => {
    // console.log(product)
    
    let newCart = [...cart];
    console.log(newCart)
    let itemInCart = newCart.find(
      (item) => product.productName === item.productName
      
    );
    // console.log(itemInCart)
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
    // console.log(newCart)
  };

//   const [category, setCategory] = useState(HOME_GARDEN);

//   const getProductsInCategory = () => {
//     return products.filter(
//       (product) => product.category === category
//     );
//   };

  return (
    <>
      {/* <h1>Products</h1>
      Select a category
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value={HOME_GARDEN}>{HOME_GARDEN}</option>
        <option value={UTILITY}>{UTILITY}</option>
      </select> */}
      <div className="products product-back">
        {users.map((product, idx) => (
          <div className="card border border-5 shadow-lg p-3 mb-5 bg-body rounded container  " key={product.id} >
          <div className="card_img">
              <img height="100px" width="100px" className='products-image ' src={product.image}></img>
  
          </div>
          <div className="card_header">
              <h3 className='card-title products-name text-center'>{product.productName}</h3>
              {/* <p className="card-text">{item.description}</p> */}
              <p className="price products-price text-center">{product.cost}<b><span>$</span></b></p>
              <div className='text-center'><button className=" text-center btn btn btn-primary product-add-button btn1 " onClick={() => addToCart(product)}>
              Add to Cart
            </button></div>
          </div>
          </div>
         

   
        ))}
      </div>
    </>
  );
}