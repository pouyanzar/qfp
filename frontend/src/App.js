import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import ProductList from "./Components/ProductList";
import MakeList from "./Components/MakeList";
import ModelList from "./Components/ModelList";
import ProductDetail from "./Components/ProductDetail";
import Slideshow from "./Components/Slideshow";

export default function App() {
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);
  const setShowhandler = () => {
    setShow(!show);
  }
  return (
    <div className="App">
      <Router>
        <div className="container">
          <Header show={show} setShowhandler={setShowhandler} />
          <img
            src="/Assets/Images/slideshow/2.jpg"
            alt="truck"
            className="slideshow"
          />
          <Switch>
            <Route
              path="/:catName"
              exact
              render={(props) => (
                <MakeList
                  url={props.match.params.catName}
                  base={props.match.url}
                  show={show}
                />
              )}
            />
            <Route
              path="/:catName/:makeName"
              exact
              render={(props) => (
                <ModelList
                  catName={props.match.params.catName}
                  makeName={props.match.params.makeName}
                />
              )}
            />
            <Route
              path="/:catName/:makeName/:modelName"
              exact
              render={(props) => (
                <ProductList
                  catName={props.match.params.catName}
                  makeName={props.match.params.makeName}
                  modelName={props.match.params.modelName}
                  base={props.match.url}
                  products={products}
                  setProducts={setProducts}
                />
              )}
            />
            <Route
              path="/:catName/:makeName/:catName/:qfpp"
              exact
              render={(props) => (
                <ProductDetail
                  url={props.match.params.qfpp}
                  base={props.match.url}
                  products={products}
                />
              )}
            />
            {/* <Route path="/" component={App} /> */}
          </Switch>
        </div>
      </Router>
    </div>
  );
}
