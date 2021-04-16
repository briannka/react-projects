import React from 'react';


function OpenSearch() {
    // const[searchTerm, setSearchTerm] = useState('');
    const displaySearchBar = () => {
        return <DisplaySearchBar/>
    }
    
    return (
        <div className="open-search">
            <button onChange={displaySearchBar}>Add a book</button>
        </div>
    )
}

function DisplaySearchBar() {
    return(
        <div className="search-books-bar">
        <button className="close-search">Close</button>
        <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" />
        </div>
    </div>
    )
}

export { OpenSearch, DisplaySearchBar };