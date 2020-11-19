import React, { Component } from 'react';
import './newsWall.css';
import SearchBar from '../searchBar/searchBar';
import NewsItem from '../newsItem/newsItem';
import NewsApi from '../../apis/newsApis';

function NewsWall({ routeName }) {
    const [newsList, setNewsList] = React.useState([]);

    React.useEffect(() => {
        try {
            NewsApi(routeName).then(res => setNewsList(res));
        } catch (e) {
            console.error(e);
        }
    }, [routeName]);

    const handleSearch = search => {
        // handle search API here
        alert("Search this ----> ", search);
    }

    return (
        <div id="newsWallMain">
            <SearchBar handleSearch={handleSearch}></SearchBar>
            <h1>{routeName} below...</h1>
            <div>
                {newsList.map((newsItem, i) => {
                    return <NewsItem key={i} newsItem={newsItem}></NewsItem>
                })}
            </div>
        </div>
    );
}
 
export default NewsWall;