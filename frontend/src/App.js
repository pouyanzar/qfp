import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import ProductList from "./Components/ProductList";
import MakeList from "./Components/MakeList";
import ModelList from "./Components/ModelList";
import ProductDetail from "./Components/ProductDetail";

export default function App() {
  const [products, setProducts] = useState([]);

  return (
    <div className="App">
      <Router>
        <>
          <Header />
          {/* <Switch>
            <Route
              path="/:catName"
              exact
              render={(props) => (
                <MakeList
                  url={props.match.params.catName}
                  base={props.match.url}
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
            <Route path="/" component={App} />
          </Switch> */}
        </>
      </Router>
    </div>
  );
}
