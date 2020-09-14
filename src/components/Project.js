import React from 'react';
import '../stylesheets/Projects.scss';
import { Link } from 'react-router-dom';

class Project extends React.Component {
  render() {
    return (
      <Link to={`/project/${this.props.id}`}>
                      
        <li className="portfolio__img" id={this.props.id}>
                          
          <img
            className="portfolio__img-img"
            src={this.props.image}
            alt={this.props.name}
          />
                             
          <div className="portfolio__link">
                              
            <a href="#" className="portfolio__link-name">
                                  View details                   
            </a>
                            
          </div>
                        
        </li>
                    
      </Link>
    );
  }
}

export default Project;
