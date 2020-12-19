import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Product from './Product';
import ProductDetail from './ProductDetail';

export default function ProductList(props){
    
    const [products, setProducts] = useState([])
    
    useEffect(() =>
    {
        fetch(`http://localhost:8080/${props.makeName}/${props.modelName}/${props.catName}`)
        .then(res => res.json())
        .then(data => setProducts(data))
        // .catch(err => res.status(500).json(err))
    },[])

    console.log(props.base);
    return(
            <div className="header__navbar--level2">
                {products.map((product,i)=>
                    <Link className="header__navbar--item3" 
                        key={i} 
                        to={`${props.base}/${product.qfpp}`}>
                        <Product pn={product.qfpp}
                            price={product.price}
                            img={product.img}
                            start={product.start_year}
                            end={product.end_year}
                        />
                    </Link>)}
            </div>
    )
}
