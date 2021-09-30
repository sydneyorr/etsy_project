import React from "react"
import Categories from "./Categories";
import FindProducts from "./FindProducts";
import Home from "./Home";
import Login from "./Login";
import NoMatch from "./NoMatch";
import Products from "./Products";
import Register from "./Register";
import Things from "./Things";

export const routes = [
  { pathname: "/", title: "Home", component: Home},
  { pathname: "/things", title: "Things", component: Things},
  { pathname: "/products", title: "Products", component: Products},
  { pathname: "/categories", title: "Categories", component: Categories},
  { pathname: "/find", title: "Search", component: FindProducts},
];
