import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ModelList({ catName, makeName }) {
  const [models, setModels] = useState([]);

  useEffect(() => {
    fetch(`https://qfp-server.onrender.com/${catName}/${makeName}`)
      .then((res) => res.json())
      .then((data) => setModels(data));
  }, [catName, makeName]);

  return (
    <div className="header__navbar--level2">
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
