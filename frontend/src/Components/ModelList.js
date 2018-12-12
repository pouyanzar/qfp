import React from 'react';
import {Link} from 'react-router-dom';

class ModelList extends React.Component
{
    state= {models:[]}

    componentDidMount()
    {
        fetch(`http://localhost:8080/${this.props.url}`)
        .then(res => res.json())
        .then(data => this.setState({models:data}))
        // .catch(err => res.status(500).json(err))
    }

    componentDidUpdate(prevProps, prevState)
    {       
        if(prevProps.url !== this.props.url)
        {
            fetch(`http://localhost:8080/${this.props.url}`)
            .then(res => res.json())
            .then(data => this.setState({models:data}))
        }
    }

    render()
    {
        console.log(this.props.base)
        return(
            
                <div className="header__navbar--level1">
                    {this.state.models.map((model,i)=><Link className="header__navbar--item2" key={i} to={`/${this.props.url}/${model}`}>{model}</Link>)}
                 </div>
            )
    }
}


export default ModelList;

