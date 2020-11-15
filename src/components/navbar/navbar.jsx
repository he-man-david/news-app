import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

class NavBar extends Component {
    state = { 
        navItems: [
            { name: 'Top News', url: '/top-news', id: 'topNewsNav', selected: true },
            { name: 'Markets', url: '/markets', id: 'marketsNav', selected: false },
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
                <div className="linksDiv">
                    {this.state.navItems.map(({name, url, id, selected}) => {
                        return <Link to={url} 
                                     className={`navLink ${selected && 'selected'}`}
                                     role="button"
                                     key={id}
                                     onClick={() => this.handleNavSelect(id)}
                                     >{name}</Link>
                    })}
                </div>
            </div>
        )
    }
}
 
export default NavBar;