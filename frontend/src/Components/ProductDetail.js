import React, {useState, useEffect} from 'react' ;

export default function ProductDetail(...props){

   
    const [detail, setDetail] = useState({})
    
    useEffect(() => 
    {
        fetch(`http://localhost:8080/products/${props.url}`)
        .then(res => res.json())
        .then(parts => setDetail({parts}))
    },{})

    return (

        <div className="details">
            <img className="details__img" src={detail.img} alt={detail.pn}/>
            <div className="details__detail">
                {console.log(props)}
                <p className="details__make">
                    <span className="details__label">MAKE: </span>
                    {props.base.split("/",2)}
                </p>
                <p className="details__model">
                    <span className="details__label">MODEL: </span>
                    {props.base.split("/",3)[2]}
                </p>            
                <p className="details__category">
                    <span className="details__label">CATEGORY: </span>
                    {props.cat}
                </p>
                <p className="details__pn">
                    <span className="details__label">QFPP#: </span>
                    {detail.qfpp}
                </p>
                <p className="details__price">
                    <span className="details__label">Price: </span>
                    {detail.price}
                </p>
                <p className="details__year">
                    <span className="details__label">Start-year: </span>
                    {detail.start_year}
                </p>
                <p className="details__year">
                    <span className="details__label">End-year: </span>
                    {detail.end_year}
                </p>
            </div>
        </div>  
    )
}