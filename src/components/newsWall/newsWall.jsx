import React, { Component } from 'react';
import './newsWall.css';
import SearchBar from '../searchBar/searchBar';
import NewsItem from '../newsItem/newsItem';

function NewsWall({ routeName }) {
    const [newsList, setNewsList] = React.useState([]);

    React.useEffect(() => {
        console.log("routeName has changed ---> ", routeName);
        // return () => {
        //     cleanup
        // };
    }, [routeName]);

    const handleSearch = search => {
        // handle search API here
        alert("Search this ----> ", search);
    }

    return (
        <div id="newsWallMain">
            <SearchBar handleSearch={handleSearch}></SearchBar>
            <div>
                {newsList.map(newsItem => {
                    return <newsItem newsItem={newsItem}></newsItem>
                })}
            </div>
        </div>
    );
}
 
export default NewsWall;