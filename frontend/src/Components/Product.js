import React from "react";

const Product = (props) => {
  return (
    <div className="product">
      {props.img ? (
        <img className="product__img" src={props.img} alt={props.pn} />
      ) : null}
      <p className="product__pn">QFPP#:{props.pn}</p>
      {props.price ? (
        <p className="product__price">Price:{props.price}</p>
      ) : null}
    </div>
  );
};

export default Product;
