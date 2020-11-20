import './searchBar.css';
import { useState } from 'react';
import { Search } from 'react-bootstrap-icons';
import { useHistory } from "react-router-dom";

const SearchBar = props => {
    const [text, setText] = useState('');
    let history = useHistory();
    const handleSearch = search => history.push('/search/' + encodeURIComponent(search));
    return (
        <div id="searchBarMain">
            <input type="text" 
                    id="searchBarNews" 
                    name="searchBar" 
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Search" />

            <Search role="button" 
                    onClick={() => handleSearch(text)} 
                    className="searchIcon" 
                    size={40} />
        </div>
    );
}
 
export default SearchBar;