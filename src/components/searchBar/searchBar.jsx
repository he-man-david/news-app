import './searchBar.css';
import { Search } from 'react-bootstrap-icons';

const SearchBar = props => {
    return (
        <div id="searchBarMain">
            <input type="text" 
                    id="searchBarNews" 
                    name="searchBar" 
                    placeholder="Search" />
            <Search role="button" 
                    onClick={() => props.handleSearch('searchBarNews')} 
                    className="searchIcon" 
                    size={40} />
        </div>
    );
}
 
export default SearchBar;