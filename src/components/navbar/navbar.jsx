import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

class NavBar extends Component {
    state = { 
        navItems: [
            { name: 'Top News', url: '/top-news', id: 'topNews' },
            
            { name: 'Search', url: '/search-news', id: 'searchNews' }
        ]
    }
    render() { 
        return (
            <div className="navMain">
                <div className="linksDiv">
                    <Link to="/" className="navLink selected" role="button">Home</Link>
                    <Link to="/others" className="navLink" role="button">others</Link>
                    <Link to="/something" className="navLink" role="button">Something</Link>
                </div>
            </div>
        )
    }
}
 
export default NavBar;