import { useState, useEffect } from 'react';
import './newsWall.css';
import SearchBar from '../searchBar/searchBar';
import NewsItem from '../newsItem/newsItem';
import NewsApi from '../../apis/newsApis';
import { useParams } from "react-router";

function NewsWall({ routeName }) {
    const [newsList, setNewsList] = useState([]);
    let { searchQuery } = useParams();
    useEffect(() => {
        try {
            NewsApi(routeName, searchQuery).then(res => setNewsList(res));
        } catch (e) {
            console.error(e);
        }
    }, [routeName, searchQuery]);

    return (
        <div id="newsWallMain">
            <SearchBar></SearchBar>
            <div className="newsListMain">
                {newsList.map((newsItem, i) => {
                    return <NewsItem key={i} newsItem={newsItem}></NewsItem>
                })}
            </div>
        </div>
    );
}
 
export default NewsWall;