import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './Components/Header';
import ProductList from './Components/ProductList';
import ModelList from './Components/ModelList'
import CategoryList from './Components/CategoryList';
import ProductDetail from './Components/ProductDetail';
import Slideshow from './Components/Slideshow';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
          <Header />
          <Slideshow />
          <Switch>
            <Route path="/:makeName" exact render={(props)=><ModelList url={props.match.params.makeName}  base={props.match.url}/>}/>
            <Route path="/:makeName/:modelName" exact render={(props)=><CategoryList makeName={props.match.params.makeName}
                                                                                  modelName={props.match.params.modelName}/>}/>
            <Route path="/:makeName/:modelName/:catName" exact render={(props)=><ProductList makeName={props.match.params.makeName}
                                                                                         modelName={props.match.params.modelName}
                                                                                         catName={props.match.params.catName} />}/>
            <Route path="/:makeName/:modelName/:catName/:qfpp" exact render={(props) => <ProductDetail url={props.match.params.qfpp} base={props.match.url}/>}/>
            {/* <Route path="/" component={App}/> */}

          </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
