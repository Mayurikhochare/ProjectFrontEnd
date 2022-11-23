import React from 'react'
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddProduct = () => {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    productName: "",
    cost: "",
    image: "",
  });

  const { productName, cost, image } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
   e.preventDefault();
    await axios.post("http://localhost:8080/api/product", user);
    // navigate("/");
    window.alert("Product Added Successfully")
    navigate("/Products")
  };
  return (
    <div className="container  ">
    <div className="row">
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow bg-clr ">
        <h2 className="text-center m-4">Add Product</h2>

        <form  onSubmit={(e) => onSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="productName" className="form-label">
            Product Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Product name"
              name="productName"
              value={productName}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="cost" className="form-label">
              Cost
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Cost"
              name="cost"
              value={cost}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">
            Image
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="image"
              name="image"
              value={image}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button type="submit" className="btn btn-outline-primary">
            Submit
          </button>
          <Link className="btn btn-outline-danger mx-2" to="/">
            Cancel
          </Link>
        </form>
      </div>
    </div>
  </div>
);
}

export default AddProduct
