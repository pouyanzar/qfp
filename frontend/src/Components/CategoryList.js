import React from 'react';
import {Link} from 'react-router-dom';
import ModelList from './ModelList';
class CategoryList extends React.Component{
    
        state= {categories:[]}
    
        componentDidMount()
        {
            fetch(`http://localhost:8080/${this.props.makeName}/${this.props.modelName}`)
            .then(res => res.json())
            .then(data => this.setState({categories:data}))
            // .catch(err => res.status(500).json(err))
        }
        render()
        {
            return(
                    <div className="header__navbar--level2">
                        {/* <ModelList/> */}
                        {this.state.categories.map((category,i)=><Link className="header__navbar--item3" key={i} to={`/${this.props.makeName}/${this.props.modelName}/${category}`}>{category}</Link>)}
                     </div>
            )
        }    
}

export default CategoryList;