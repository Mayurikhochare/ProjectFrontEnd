import React from 'react'
import {Link} from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  return (

<div>

<nav class="navbar navbar-expand-lg bg-light shadow-lg p-3 mb-5 bg-body rounded ">
  <div className="container-fluid">
  <a class="navbar-brand img1" href="#"><img  height="50px" width="50px" src="https://www.funcorp.in/pub/media/logo/stores/1/logo_new.png"></img></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li class="nav-item ">
        <Link  class="nav-link navbar-nav me-auto mb-2 mb-lg-0 navbar-brand" to="/">Home</Link>
        </li>
        <li class="nav-item">
        <Link  class="nav-link navbar-nav me-auto mb-2 mb-lg-0 navbar-brand" to="/AboutUs">About Us</Link>
        </li>
        <li class="nav-item">
        <Link  class="nav-link navbar-nav me-auto mb-2 mb-lg-0 navbar-brand" to="/Product">Products</Link>
        </li>
        <li class="nav-item">
        <Link  class="nav-link navbar-nav me-auto mb-2 mb-lg-0 navbar-brand" to="/Admin">Admin</Link>
        </li>
       
      </ul>
      {/* <form class="d-flex" > */}
        
        <li class="nav-item nav2">
        <Link  class="nav-link navbar-nav me-auto mb-2 mb-lg-0 navbar-brand" to="/Login">Login</Link>
    </li>
    
    <li class="nav-item nav2">
          <a class="nav-link navbar-nav me-auto mb-2 mb-lg-0 navbar-brand " href="#"><i class="fa fa-shopping-cart"></i></a>
    </li>
    <li class="nav-item nav2">
        <Link  class="nav-link navbar-nav me-auto mb-2 mb-lg-0 navbar-brand " to="/Profile"><img className="profile-img" height="8000px" width="80px" src="https://spng.pngfind.com/pngs/s/671-6717401_male-user-icon-hd-png-download.png"></img></Link>
    </li>
      {/* </form> */}
    
    {/* <Link className='btn btn-outline-light' class="btn btn-outline-success" to="/addUser">Add User</Link> */}
    
  </div>
</nav>

        </div>

    
  )
}

export default Navbar


