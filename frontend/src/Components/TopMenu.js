import React from 'react';
import {BrowserRouter as Router, Route,Link, Switch} from 'react-router-dom'
class TopMenu extends React.Component{

    state={
        makes:[]
    }

    componentDidMount()
    {
        fetch('http://localhost:8080')
        .then(res=> res.json())
        .then(data => this.setState({makes: data}));
   }
   
    
    render()
    {
        const makes = this.state.makes;
        const filteredMake = makes.filter(make => make.id<=10);
        return(
                filteredMake.map((make,i) => <Link key={i} className="header__navbar--item" to={`/${make.name}`}>{make.name}</Link>)
        )
    }
}

export default TopMenu;