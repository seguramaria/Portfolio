import React from 'react';
import '../stylesheets/layout/Projects.scss';
import { Link } from 'react-router-dom';
import Flip from 'react-reveal/Flip';
class Project extends React.Component {
  render() {
    return (
      <Link to={`/project/${this.props.id}`}>
         {' '}
        <Flip right>
                   
          <li className="portfolio__img" id={this.props.id}>
                            
            <img
              className="portfolio__img-img"
              src={this.props.image}
              alt={this.props.name}
            />
                                              
          </li>
                {' '}
        </Flip>
                  
      </Link>
    );
  }
}

export default Project;
