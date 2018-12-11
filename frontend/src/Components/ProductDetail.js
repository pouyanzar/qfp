import React from 'react' ;

class ProductDetail extends React.Component{

    state = {
        detail:{}
    }
    
    componentDidMount()
    {
        fetch(`http://localhost:8080/products/${this.props.url}`)
        .then(res => res.json())
        .then(parts => this.setState({detail:parts}))
    }

    render()
    {
        return (

            <div className="details">
            <img className="details__img" src={this.state.detail.img} alt={this.state.pn}/>
            <p className="details__pn"><span className="details__label">QFPP#: </span>{this.state.detail.qfpp}</p>
            <p className="details__price"><span className="details__label"details__label>Price: </span>{this.state.detail.price}</p>
            <p className="details__year"><span className="details__label">Start-year: </span>{this.state.detail.start_year}</p>
            <p className="details__year"><span className="details__label">End-year: </span>{this.state.detail.end_year}</p>
            </div>  
        )
    }
}

export default ProductDetail;