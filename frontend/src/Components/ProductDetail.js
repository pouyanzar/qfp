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
                <div className="details__detail">
                    {console.log(this.props)}
                    <p className="details__make"><span className="details__label">MAKE: </span>{this.props.base.split("/",2)}</p>
                    <p className="details__model"><span className="details__label">MODEL: </span>{this.props.base.split("/",3)[2]}</p>            
                    <p className="details__category"><span className="details__label">CATEGORY: </span>{this.props.cat}</p>
                    <p className="details__pn"><span className="details__label">QFPP#: </span>{this.state.detail.qfpp}</p>
                    <p className="details__price"><span className="details__label">Price: </span>{this.state.detail.price}</p>
                    <p className="details__year"><span className="details__label">Start-year: </span>{this.state.detail.start_year}</p>
                    <p className="details__year"><span className="details__label">End-year: </span>{this.state.detail.end_year}</p>
                    </div>
            </div>  
        )
    }
}

export default ProductDetail;