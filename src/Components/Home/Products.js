import React, { useState, useEffect } from "react";
import "./Products.css";

import {useDispatch} from 'react-redux'
import {inNum} from '../../Action/index.js'

function Products() {

  const dispatch = useDispatch();

  const [user, setUser] = useState([]);
  const productArray = [];
  // const [resData, setResData] = useState('');

  const getUser = async () => {
    console.log(user);
    fetch(
      "https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json"
    )
      .then((response) => response.json())
      .then((data) => {
        for (const prod in data) {
          productArray.push({
            img: data[prod].productImage,
            name: data[prod].productName,
            oldPrice: data[prod].oldPrice,
            newPrice: data[prod].newPrice,
          });
        }
        setUser(productArray);
        console.log(productArray);
      });
  };
  useEffect(() => {
    getUser();
  }, []);



  return (
    <div className="product-container">
      <div className="product-heading">Products</div>

      <div className="product-list">
        {user &&
          user.map((item) => (
            <div key={item.id} className="product-item">
              <img className="product-image" src={item.img} alt={item.name} />
              <div className="item-body">
                <p className="phoneName">{item.name}</p>
                <div className="star-price-container">
                  <div className="start">
                    <img src="assets/Star.png" alt="star" />
                    <img src="assets/Star.png" alt="star" />
                    <img src="assets/Star.png" alt="star" />
                    <img src="assets/Star.png" alt="star" />
                    <img src="assets/Star.png" alt="star" />
                  </div>
                  <div className="price">
                    <p className="oldPrice">₹{item.oldPrice}/-</p>
                    <p className="newPrice">₹ {item.newPrice}/-</p>
                  </div>
                </div>
                
                <button className="addToCart" onClick={()=>dispatch(inNum())} > Add to Cart</button>
              </div>             
            </div>
            
            
          ))}
      </div>
    </div>
  );
}

export default Products;