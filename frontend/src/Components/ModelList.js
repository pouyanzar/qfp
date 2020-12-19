import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

export default function ModelList({url,base})
{
    const [models, setModels] = useState([])
   
    useEffect(() => {
        fetch(`http://localhost:8080/${url}`)
        .then(res => res.json())
        .then(data => setModels(data))
        // .catch(err => res.status(500).json(err))
    },[url])
    {
        return(
            
                <div className="header__navbar--level1">
                    {models.map((model,i)=>
                        <Link className="header__navbar--item2" 
                            key={i} 
                            to={`/${url}/${model}`}>
                                {model}
                        </Link>)}
                 </div>
            )
    }
}



