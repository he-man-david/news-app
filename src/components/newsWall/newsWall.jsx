import React, { Component } from 'react';
import './newsWall.css';
import SearchBar from '../searchBar/searchBar';

class NewsWall extends Component {
    state = {  }
    render() { 
        return (
            <div id="newsWallMain">
                <SearchBar></SearchBar>
                <h1>This is a news Wall</h1>
                <p>fewfwef</p>
            </div>
        );
    }
}
 
export default NewsWall;