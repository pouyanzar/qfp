import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
// import ProductDetail from "./ProductDetail";

export default function ProductList(props) {
  const { products, setProducts } = props;
  let imgDir = "/Assets/Images/";

  switch (props.catName.toLowerCase()) {
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
  useEffect(() => {
    fetch(
      `https://qfp-server.onrender.com/${props.catName}/${props.makeName}/${props.modelName}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
    // .catch(err => res.status(500).json(err))
  }, [props.catName, props.modelName, props.makeName, setProducts]);

  return (
    <div className="header__container">
      <div className="header__navbar--title">
        <h3>
          {props.catName.charAt(0).toUpperCase() +
            props.catName.substring(1).toLowerCase() +
            " / "}
        </h3>
        <h3>
          {props.makeName.charAt(0).toUpperCase() +
            props.makeName.substring(1).toLowerCase() +
            " / "}
        </h3>
        <h3>
          {props.modelName.charAt(0).toUpperCase() +
            props.modelName.substring(1).toLowerCase()}
        </h3>
      </div>
      <div className="product-list">
        {products.map((product, i) => (
          <Link
            className="header__navbar--item3"
            key={i}
            to={`${props.base}/${product.qfpp}`}
          >
            <Product
              pn={product.qfpp}
              price={product.price}
              img={product.img ? imgDir + product.img : null}
              year={product.year}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
