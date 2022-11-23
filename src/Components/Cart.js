import React from 'react';
import "./Home.css";
import "./Product.css";


export default function Cart({ cart, setCart }) {
  const getTotalSum = () => {
    return cart.reduce(
      (sum, { cost, quantity }) => sum + cost * quantity,
      0
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  // const setQuantity = (product, amount) => {
  //   const newCart = [...cart];
  //   newCart.find(
  //     (item) => item.name === product.product_name
  //   ).quantity = amount;
  //   setCart(newCart);
  // };

  const removeFromCart = (productToRemove) => {
    setCart(
      cart.filter((product) => product !== productToRemove)
    );
  };
  const paymentSuccess=()=>{
    window.alert("Order Placed")
  }
  const handleChange = (product, d) => {
    const ind = cart.indexOf(product);
    
    const arr = cart;
    arr[ind].quantity += d;

    if (arr[ind].quantity === 0) arr[ind].quantity = 1;
    setCart([...arr]);
  };

  return (
    <><div className='cart-img '>
      <h1>Cart</h1>
      {cart.length > 0 && (
        <button class="btn fill" onClick={clearCart}>Clear Cart</button>
      )}
      <div className="products cart_box ">
        {cart.map((product, idx) => (
          <div className="product cart_img" key={idx}>
            <img className='products-image card_img card' src={product.image} alt={product.product_name} />
            <h3 className='text-center'>{product.product_name}</h3>
            <h4 className='text-center'>{product.cost}<span>{product.currency}</span></h4>
            {/* <div className='text-center'>
            <input
              value={product.quantity}
              onChange={(e) =>
                setQuantity(
                  product,
                  parseInt(e.target.value)
                )
              }
            />
            </div> */}
            <div className='text-center'>
            <button class="btn btn-outline-primary" onClick={() => handleChange(product, 1)}>+</button>
            <button class="btn btn-outline-primary ">{product.quantity}</button>
            <button class=" btn btn-outline-primary" onClick={() => handleChange(product, -1)}>-</button>
          </div>
            <hr></hr>
            <div className='text-center'><button class="btn fill" onClick={() => removeFromCart(product)}>
              Remove
            </button></div>
           
            
          </div>
          
        ))}
        
      </div>
    
          
      <div><h3>Total Cost: ${getTotalSum()}</h3></div>
      <button onClick={() => paymentSuccess()} class="btn fill" >Proceed to Buy</button>
      </div> 
    </>
  );
}