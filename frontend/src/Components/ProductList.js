import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Product from './Product';
import ProductDetail from './ProductDetail';

class ProductList extends React.Component{
    
    state= {products:[]}
    
    componentDidMount()
    {
        fetch(`http://localhost:8080/${this.props.makeName}/${this.props.modelName}/${this.props.catName}`)
        .then(res => res.json())
        .then(data => this.setState({products:data}))
        // .catch(err => res.status(500).json(err))
    }
    render()
    {
        console.log(this.props.base);
        return(
                <div className="header__navbar--level2">
                    {this.state.products.map((product,i)=><Link className="header__navbar--item3" key={i} to={`${this.props.base}/${product.qfpp}`}><Product pn={product.qfpp}
                                                                                                                                                    price={product.price}
                                                                                                                                                    img={product.img}
                                                                                                                                                    start={product.start_year}
                                                                                                                                                    end={product.end_year}/></Link>)}
                </div>
        )
    }
}

export default ProductList;