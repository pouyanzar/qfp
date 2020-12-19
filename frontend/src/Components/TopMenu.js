import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route,Link, Switch} from 'react-router-dom'
export default function TopMenu() {

    const [makes, setMakes] = useState([]);
   
    useEffect(() => {
    
        fetch('http://localhost:8080')
        .then(res=> res.json())
        .then(data => setMakes(data)
    )},[]);
   
        const filteredMake = makes.filter(make => make.id<=10);
        return(
                filteredMake.map((make,i) => 
                    <Link key={i} 
                        className="header__navbar--item" 
                        to={`/${make.name}`}>
                            {make.name}
                    </Link>)
        )
}