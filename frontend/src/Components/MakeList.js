import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function MakeList({ url, base }) {
  const [makes, setMakes] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/${url}`)
      .then((res) => res.json())
      .then((data) => setMakes(data));
  }, [url]);
  return (
    <div className="header__navbar--level1">
      {makes.map((make, i) => (
        <Link className="header__navbar--item2" key={i} to={`/${url}/${make}`}>
          {make}
        </Link>
      ))}
    </div>
  );
}
