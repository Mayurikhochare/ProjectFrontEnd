import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import './Home.css';

export default function Home() {
    const [users,setUsers]=useState([]);

    const {id}=useParams();

    useEffect(()=>{
        loadUsers();

    },[]);

    const loadUsers=async ()=>{
        const result=await axios.get("http://localhost:8080/api/student");
        setUsers(result.data);
    }

    const deleteUser=async(id)=>{
      await axios.delete(`http://localhost:8080/api/student/${id}`);
      loadUsers();
    }



    return (
      <div className="homepage" >
        <header>
  <div class="container">
    <section class="grid intro">
      <div class="column-xs-12 column-md-5">
        <h1>Award winning toys for children</h1>
        <p class="lead">Creative, timeless toys for children of all ages!</p>
        <a class="btn fill" href="Products">Shop now</a>
      </div>
    </section>
  </div>
</header>
<main>
  <div class="container">
    <section id="blog" class="grid">
      <div class="column-xs-12 text-center">
        <h2>New Arrivals</h2>
      </div>
      <div class="column-xs-12 column-md-3">
        <a href="Products">
          <figure>
            <div class="img-container">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1159990/toy1.jpg"/>
            </div>
            <figcaption>
              <h3>Construction Set</h3>
              <p class="price">$10.99</p>
            </figcaption>
          </figure>
        </a>
      </div>
      <div class="column-xs-12 column-md-3">
        <a href="Products">
          <figure>
            <div class="img-container">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1159990/toy2.jpg"/>
            </div>
            <figcaption>
              <h3>Soft Pink Bunny</h3>
              <p class="price">$10.99</p>
            </figcaption>
          </figure>
        </a>
      </div>
      <div class="column-xs-12 column-md-3">
        <a href="Products">
          <figure>
            <div class="img-container">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1159990/toy3.jpg"/>
            </div>
            <figcaption>
              <h3>Ring Stacker Toy</h3>
              <p class="price">$10.99</p>
            </figcaption>
          </figure>
        </a>
      </div>
      <div class="column-xs-12 column-md-3">
        <a href="Products">
          <figure>
            <div class="img-container">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1159990/toy4.jpg"></img>
            </div>
            <figcaption>
              <h3>Coil Spring Toy</h3>
              <p class="price">$10.99</p>
            </figcaption>
          </figure>
        </a>
      </div>
      <div class="column-xs-12 text-center">
        <a class="btn outline" href="Products">Shop All</a>
      </div>
    </section>
  </div>
</main>
<footer>
  <div class="container">
    <section class="grid">
      <div class="column-xs-12">
        <ul class="footer-nav">
          <li><a href="https://twitter.com/kato_katherine"><i class="fab fa-twitter"></i></a></li>
          <li><a href="https://www.instagram.com/kathy.kato"><i class="fab fa-instagram"></i></a></li>
        </ul>
      </div>
      <div class="column-xs-12">
        <p class="copyright">&copy; Copyright 2022 Developed by Mayuri <a href="https://photos.icons8.com/" target="_blank"></a>.</p>
      </div>
    </section>
  </div>
</footer>
      
      </div>
        // <><img height="650px" width="1300px" src="https://blobsvc.wort.lu/picture/be599a06148d31bb09ba71cb6fdd580d/1200/800/wortv3/04725d32d6597da6dfd5cca2b5b0401a25e9a60c"></img><div className='container'>
        /* <div className='py-4'>
          <table className="table border shadow">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">FirstName</th>
                <th scope="col">LastName</th>
                <th scope="col">Address</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => {
                return (<tr>
                  <th scope="row" key={index}>{index + 1}</th>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.address}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>
                    <Link className='btn btn-primary mx-2' to={`/viewUser/${user.id}`}>View</Link>
                    <Link className='btn btn-outline-primary mx-2' to={`/editUser/${user.id}`}>Edit</Link>
                    <button className='btn btn-danger mx-2' onClick={() => deleteUser(user.id)}>Delete</button>
                  </td>
                </tr>);
              })}
            </tbody>
          </table>
        </div>

      </div> */
      // </>
    )
}