import React, { useEffect, useState } from "react"
import axios from "axios";
import { Card, Dropdown } from "semantic-ui-react";
import { handleRef } from "@fluentui/react-component-ref";
import ProductCard from "./ProductCard";


const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    getCategories();
  }, []);

  const handleChange = async (e, {value}) => {
    try {
      let res = await axios.get(`api/categories/${value}`);
      // console.log(res.data)
      setProducts(res.data)
    } catch(err) {
      console.log(err)
    }
  }

  const renderProducts = () => {
    return products.map((p) => <ProductCard {...p} />);
  }

  const getCategories = async () => {
    try {
      let res = await axios.get("/api/categories");
      // console.log(res.data)
    let normalizedData = res.data.map((d) => {
      return { key: d.category, text: d.category, value: d.category};
    })
    setCategories(normalizedData);
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div>
      <h1>Categories</h1>
      <Dropdown
      onChange={handleChange}
      placeholder="Select Category"
      fluid
      selection
      options={categories} />
      {products && <Card.Group>{renderProducts()}</Card.Group>}
    </div>
  )
}

export default Categories;