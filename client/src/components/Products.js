import React, { useState,  useEffect } from "react"
import axios from "axios"

const Products = () => {
  const [sellers, setSellers] = useState([]);
  
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      let res = await axios.get("/api/products");
    console.log("resdata:", res.data);
    setSellers(res.data);
  } catch (err) {
    console.log(err);
  }
}

  const normalizeData = (data) => {
    let ids = data.map((d) => data.seller_id);
    let  unique_ids = [...new Set(ids)];
    console.log("ids", ids);
    console.log("unique ids", unique_ids);
  }


  return (
    <div>
      <h1>Products by Seller</h1>
      {()=> {normalizeData(sellers)}}
    </div>
  );
};

export default Products;