import React, {useState, useEffect } from 'react';
import { Dropdown } from "semantic-ui-react";
import axios from "axios";

const FindProducts = ()=> {
    const [categories, setCategories] = useState([]);
    const [sellers, setSellers] = useState([]);
    const [products, setProducts] = useState(null);

    useEffect(() => {
        getSellers();
    }, []);
    const normalizeDropdownOptions = (data) => {
        return data.map((s) => {
            return {
                key: s.id,
                value: s.id,
                text: `${s.name}`,
            };
        });
    };

    const getSellers = async () => {
        try {
            let res = await axios.get("/api/sellers");
            let normalizedSellers = normalizeDropdownOptions(res.data)
            setSellers(normalizedSellers);
            console.log(res.data)
        } catch (err) {
            console.log(err);
        }
    };

    const handleSellerChange = async (e, { value }) => {
        console.log(value);
        try {
            let res = await axios.get(`/api/sellers/${ value }`);
            let normalizedCategories = normalizeDropdownOptions(res.data);
            setCategories(normalizedCategories);
        } catch (err) {
            console.log(err);
        }
    };

    const handleCategoryChange = async (e, { value }) => {
        console.log(value);
        try {
            let res = await axios.get(`/api/seller_categories`);
            setProducts(res.data);
        } catch (err) {}
    };
    return (
        <div>{console.log("categories", categories)}
            <h1> Products</h1>
            
            <Dropdown
                placeholder="Seller"
                search
                selection
                label="Select Seller"
                options={sellers}
                onChange={handleSellerChange}
             />
             <br />
            {categories && (
                <Dropdown
                placeholer="Categories"
                search
                selection
                label="Select Category"
                options={categories}
                onChange={handleCategoryChange}
                />
            )}
            <br />
            {products && <code>{JSON.stringify(products)}</code>}
        </div>
    );
};

export default FindProducts;
