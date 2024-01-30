import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
// import ProductDetail from "./ProductDetail";

export default function ProductList(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      `http://localhost:8080/${props.catName}/${props.makeName}/${props.modelName}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
    // .catch(err => res.status(500).json(err))
  }, []);

  return (
    <div className="header__navbar--level2">
      {products.map((product, i) => (
        <Link
          className="header__navbar--item3"
          key={i}
          to={`${props.base}/${product.qfpp}`}
        >
          <Product
            pn={product.qfpp}
            price={product.price}
            img={product.img}
            year={product.year}
          />
        </Link>
      ))}
    </div>
  );
}
