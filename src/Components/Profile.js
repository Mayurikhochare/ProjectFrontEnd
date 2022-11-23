import { getRoles } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";
import AuthService from "../Services/auth-service";

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <><div className="container">





      
      {/* <Link className='btn btn-outline-light' class="btn btn-outline-success" to="/addUser">Create New Account</Link> */}

    </div><div className="bg-clr">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <div className="card ">
          <img className="pro-img" width="50px" height="50px" src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt="" style={{ width: "100%" }} />
          <h1>{currentUser.username}</h1>
          <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
          <p className="title">Trainee Software Engineer</p>
          <p>IVY Comptech</p>
          <a href="#">
            <i className="fa fa-dribbble" />
          </a>
          <a href="#">
            <i className="fa fa-twitter" />
          </a>
          <a href="#">
            <i className="fa fa-linkedin" />
          </a>
          <a href="#">
            <i className="fa fa-facebook" />
          </a>
         
        </div>
      </div> <div className="text-center"><a href="/login" className="nav-link btn outline " onClick={logOut}>
        LogOut
      </a></div></>
);
};

export default Profile;
