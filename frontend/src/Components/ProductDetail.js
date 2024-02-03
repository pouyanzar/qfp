import React from "react";

export default function ProductDetail(props) {
  const { products } = props;
  const product = products
    ? products.filter((pt) => pt.qfpp === props.url)[0]
    : null;

  const { img, qfpp, price, year } = product;

  return (
    <div className="details">
      <img className="details__img" src={img} alt={qfpp} />
      <div className="details__detail">
        <p className="details__make">
          <span className="details__label">MAKE: </span>
          {props.base.split("/")[2]}
        </p>
        <p className="details__model">
          <span className="details__label">MODEL: </span>
          {props.base.split("/")[3]}
        </p>
        <p className="details__category">
          <span className="details__label">CATEGORY: </span>
          {props.base.split("/")[1]}
        </p>
        <p className="details__pn">
          <span className="details__label">QFPP#: </span>
          {qfpp}
        </p>
        <p className="details__price">
          <span className="details__label">Price: </span>
          {price ? price : "TBA"}
        </p>
        <p className="details__year">
          <span className="details__label">Year: </span>
          {year}
        </p>
      </div>
    </div>
  );
}
