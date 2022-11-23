import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const ViewProduct = () => {
    const [users,setUsers]=useState([]);

    const {id}=useParams();

    useEffect(()=>{
        loadUsers();

    },[]);

    const loadUsers=async ()=>{
        const result=await axios.get("http://localhost:8080/api/product");
        setUsers(result.data);
    }

    const deleteUser=async(id)=>{
      await axios.delete(`http://localhost:8080/api/product/${id}`);
      loadUsers();
    }



    
  return (
    <div className='container'>
            <div className='py-4'>
            <table className="table border shadow">
  <thead >
    <tr>
      <th scope="col">#</th>
      <th scope="col">ProductName</th>
      <th scope="col">cost</th>
      <th scope="col">image</th>
      <th scope="col">Action</th>
    </tr>
   
  </thead>
  <tbody>
    { 
    users.map((user,index)=>{
     return(   <tr>
      <th scope="row" key={index}>{index+1}</th>
      <td>{user.productName}</td>
      <td>{user.cost}</td>
      <td width="200px" height="200px"><img  height="150px" width="150px" className='' src={user.image}></img></td>
      <td width="1000px">
        {/* <button><Link className='' to={`/View/${user.id}`}>View</Link></button> */}
        <button className='btn-space'><Link  to={`/editProduct/${user.id}`}>Edit</Link></button>
        <button className='btn-space' onClick={()=>deleteUser(user.id)}>Delete</button>
      </td>
    </tr>)
})}
  </tbody>
</table>
            </div>
            
        </div>
    )
}

export default ViewProduct
