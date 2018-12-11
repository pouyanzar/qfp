import React from 'react';

class Product extends React.Component
{
    render()
    {
        return(
            <div className="product">
                <img className="product__img" src={this.props.img} alt={this.props.pn}/>
                <p className="product__pn">{this.props.pn}</p>
                <p className="product__price">{this.props.price}</p>
            </div>
        )
    }
}

export default Product;