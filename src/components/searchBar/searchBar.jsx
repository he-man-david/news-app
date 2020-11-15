import React, { Component } from 'react';
import './searchBar.css';
import { Search } from 'react-bootstrap-icons';

class SearchBar extends Component {
    state = {  }
    render() { 
        return (
            <div id="searchBarMain">
                <input type="text" 
                       id="searchBarNews" 
                       name="searchBar" 
                       placeholder="Search"
                />
                <Search role="button" className="searchIcon" size={40}/>
            </div>
        );
    }
}
 
export default SearchBar;