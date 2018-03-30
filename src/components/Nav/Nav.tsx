import * as React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
class Nav extends React.Component {
  render() {
    return (
        <nav>
            <div className="myreads-brand">
                MyReads
            </div>
            <div className="myreads-links">
                <Link 
                    to="/"
                    className="myreads-button"    
                >
                    My Books
                </Link>
                <Link 
                    to="/search/"
                    className="myreads-button"    
                >
                    Search
                </Link>
            </div>
        </nav>
    );
  }
}

export default Nav;
