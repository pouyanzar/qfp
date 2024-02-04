import React from "react";

export default function ProductDetail(props) {
  const { products } = props;
  const product = products
    ? products.filter((pt) => pt.qfpp === props.url)[0]
    : null;

  const { img, qfpp, price, year } = product;
  let imgDir = "/Assets/Images/";

  switch (props.base.split("/")[1].toLowerCase()) {
    case "compressor":
      imgDir += "COM/";
      break;
    case "condenser":
      imgDir += "CONS/";
      break;
    case "dryer":
      imgDir += "Dryer/";
      break;
    case "reservoir tank":
      imgDir += "RET/";
      break;
    default:
      console.log("no category match");
  }
  console.log(img);
  return (
    <div className="details">
      {img == null ? (
        <div className="details__noimg">
          <p>
            Sorry, no photo available for this product
          </p>
        </div>
      ) : (
        <img className="details__img" src={imgDir + img} alt={qfpp} />
      )}
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
