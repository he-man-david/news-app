import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

class NavBar extends Component {
    state = { 
        navItems: [
            { name: 'Headlines', url: '/', id: 'headlineNav', selected: true },
            { name: 'Markets', url: '/markets', id: 'marketsNav', selected: false },
            { name: 'Technology', url: '/technology', id: 'techNewsNav', selected: false },
            { name: 'World', url: '/world', id: 'worldNewsNav', selected: false },
            { name: 'Portfolio', url: '/portfolio', id: 'portfolio', selected: false }
        ]
    }

    handleNavSelect = newSelected => {
        let navItems = this.state.navItems.map(navItem => {
            let {id, selected} = navItem;
            if (selected) navItem.selected = false;
            else if (id === newSelected) navItem.selected = true;
            return navItem;
        });
        this.setState({navItems});
    }

    render() { 
        return (
            <div className="navMain">
                <h1 id="mainHeaderBrand">The David Times</h1>
                {/* create your navigation here using the state provided */}
            </div>
        )
    }
}
 
export default NavBar;