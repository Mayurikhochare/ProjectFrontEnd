import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AboutUs from "./Components/AboutUs";
import AuthService from "./Services/auth-service";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import Cart from "./Components/Cart";
import Products from "./Components/Products";
import AddProduct from "./Components/AddProduct";
import ViewProduct from "./Components/ViewProduct";
import EditProduct from "./Components/EditProduct";
import Protected from "./Components/Protected";
import Signup from "./Components/Signup";

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';
const App = () => {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const getCartTotal = () => {
    return cart.reduce(
      (sum, { quantity }) => sum + quantity,
      0
    );
  };
  
  

  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);

  

 
  return (
    <div className="all">
      <nav class="navbar navbar-expand-lg bg-light shadow-lg p-3 mb-5 bg-body rounded ">
      <div className="container-fluid">
        <a class="navbar-brand img1" href="#"><img  height="50px" width="50px" src="https://www.funcorp.in/pub/media/logo/stores/1/logo_new.png"></img></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
        <div className="navbar-nav mr-auto">
          {showAdminBoard && (
            <><li class="nav-item">
                <Link class="nav-link navbar-nav me-auto mb-2 mb-lg-0 navbar-brand" to={"/AddProduct"}>AddProduct</Link>
              </li><li class="nav-item">
                  <Link class="nav-link navbar-nav me-auto mb-2 mb-lg-0 navbar-brand" to={"/ViewProduct"}>ViewProducts</Link>
                </li></>
          )} 
          </div>
          
          
        {currentUser ? (
          <div className="container-fluid">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                
        <li class="nav-item ">
        <Link  class="nav-link navbar-nav me-auto mb-2 mb-lg-0 navbar-brand" to="/">Home</Link>
        </li>
       
        <li class="nav-item">
        <Link  class="nav-link navbar-nav me-auto mb-2 mb-lg-0 navbar-brand" to="/AboutUs">About Us</Link>
        </li>
        <li class="nav-item">
        <Link  onClick={() => navigateTo(PAGE_PRODUCTS)} class="nav-link navbar-nav me-auto mb-2 mb-lg-0 navbar-brand" to="/Products">Products</Link>
        </li>
        </ul>
        
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
            
    <li class="nav-item nav2">
    <Link onClick={() => navigateTo(PAGE_CART)} class="nav-link navbar-nav me-auto mb-2 mb-lg-0 navbar-brand " to="/Cart" ><i class="fa fa-shopping-cart"><sup>{getCartTotal()}</sup></i></Link>
    </li> 
    
    <li class="nav-item nav2">
        <Link  class="nav-link navbar-nav me-auto mb-2 mb-lg-0 navbar-brand " to="/Profile"><img className="profile-img" height="8000px" width="80px" src="https://spng.pngfind.com/pngs/s/671-6717401_male-user-icon-hd-png-download.png"></img></Link>
    </li>
    
            </ul>
          </div>
        
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">

              <Link to={"/signup"} className="nav-link" id="log">

              Signup

              </Link>

            </li>

          </div>
        )}
        </div>
      </nav>
      <div className="container mt-3 ">
        <Routes>
          <Route path="/" element={<Protected Component={Home}/>} />
          <Route path="/Home" element={<Protected Component={Home}/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/profile" element={<Protected Component={Profile}/>} />
         
          <Route path="/AboutUs" element={<Protected Component={AboutUs}/>} />
          <Route path="/AddProduct" element={<Protected Component={AddProduct}/>} />
          <Route path="/ViewProduct" element={<Protected Component={ViewProduct}/>} />
          {page === PAGE_PRODUCTS && (<Route path="/Products" element={<Products cart={cart} setCart={setCart} /> }/>)}
          {page === PAGE_CART && (<Route path="/Cart" element={<Cart cart={cart} setCart={setCart}/>} /> )}        
          <Route exact path="/editProduct/:id" element={<EditProduct/>}></Route>
          <Route exact path="/signup" element={<Signup/>}></Route>
          
          
        </Routes>
      </div>
    </div>
  );
};

export default App;