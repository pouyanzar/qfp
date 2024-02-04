import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function TopMenu() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://qfp-server.onrender.com")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return categories.map((cat, i) => (
    <Link key={i} className="header__navbar--item" to={`/${cat}`}>
      {cat}
    </Link>
  ));
}
