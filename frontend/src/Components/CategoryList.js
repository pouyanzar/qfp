import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import ModelList from './ModelList';

export default function CategoryList({makeName, modelName}) {
    
    const [categories, setCategories] = useState([])

    useEffect(() =>
    {
        fetch(`http://localhost:8080/${makeName}/${modelName}`)
        .then(res => res.json())
        .then(data => setCategories(data))
        // .catch(err => res.status(500).json(err))
    },[makeName,modelName])

    
    return(
            <div className="header__navbar--level2">
                {/* <ModelList/> */}
                {categories.map((category,i)=>
                    <Link className="header__navbar--item3" 
                        key={i} 
                        to={`/${makeName}/${modelName}/${category}`}>
                            {category}
                    </Link>)}
                </div>
    )
}   
