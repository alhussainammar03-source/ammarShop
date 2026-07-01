import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { CartContext } from "../context/CartContext";
import SerachBox from "./SerachBox";
import "./header.css";

function TopHeader() {
  const { cartItems, favorites } = useContext(CartContext);

  return (
    <div className="top_header">
      <div className="container top_header_container">
        <Link className="logo" to="/">
          <img src={Logo} alt="ammarShop Logo" />
        </Link>

        <SerachBox />

        <div className="header_icons">
          <Link className="icon" to="/favorites">
            <FaRegHeart />
            <span className="count">{favorites.length}</span>
          </Link>

          <Link className="icon" to="/cart">
            <TiShoppingCart />
            <span className="count">{cartItems.length}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
