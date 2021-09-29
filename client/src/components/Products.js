import React, { useState,  useEffect } from "react"
import axios from "axios"
import { Card, List } from "semantic-ui-react";

const Products = () => {
  const [sellers, setSellers] = useState([]);
  
  useEffect(() => {
    getProducts();
  }, []);


  const normalizeData = (data) => {
    let ids = data.map((d) => d.seller_id);
    let  unique_ids = [...new Set(ids)];
    // console.log("ids", ids);
    // console.log("unique ids", unique_ids);
    return unique_ids.map((id) => {
      let products = data.filter((d) => d.seller_id === id);
      // console.log(id, "has: ")
      // console.log(products);
      // console.log("before:", products);
      let { seller_name, email } = products[0];
      //  console.log("before:", products);
      //  console.log(products[0]);
      let sellerProducts = products.map((p) => {
        return {
          price: p.price,
          description: p.description,
          category: p.category,
          quantity_in_stock: p.quantity_in_stock,
          id: p.id
        }
      })
      return { seller_name, email, products: sellerProducts};
    });
  };

  const getProducts = async () => {
    try {
    let res = await axios.get("/api/products");
    console.log("resdata:", res.data);
    setSellers(normalizeData(res.data));
  } catch (err) {
    console.log(err);
  }
}


  const renderSellers = () => {
    return sellers.map((s) => {
      return (
        <List>
          <List.Content>{s.seller_name}</List.Content>
          <List.Content>{s.email}</List.Content>
          {renderProducts(s.products)}
        </List>
      )
    })
  }

  const renderProducts = (products) => {
    return products.map((p) => {
      {console.log("description:", p.description)}
      return (
        <Card fluid>
          <Card.Content>${p.price}</Card.Content>
          <Card.Content>{p.description}</Card.Content>
          <Card.Content>{p.category}</Card.Content>
          <Card.Content>{p.quantity_in_stock}</Card.Content>
        </Card>
      )
    })
  }


  return (
    <div>
      <h1>Products by Seller</h1>
      {renderSellers()}
    </div>
  );
};

export default Products;