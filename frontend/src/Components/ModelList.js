import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import MakeList from "./MakeList";

export default function ModelList({ catName, makeName }) {
  const [models, setModels] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/${catName}/${makeName}`)
      .then((res) => res.json())
      .then((data) => setModels(data));
    // .catch(err => res.status(500).json(err))
  }, [catName, makeName]);

  return (
    <div className="header__navbar--level2">
      {/* <ModelList/> */}
      {models.map((model, i) => (
        <Link
          className="header__navbar--item3"
          key={i}
          to={`/${catName}/${makeName}/${model}`}
        >
          {model}
        </Link>
      ))}
    </div>
  );
}
