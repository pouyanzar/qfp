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
  }, [props.catName, props.modelName, props.makeName]);

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
            img={imgDir + product.img}
            year={product.year}
          />
        </Link>
      ))}
    </div>
  );
}
