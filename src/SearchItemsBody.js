import React from 'react';
import Book from './Book';

function SearchItemsBody(searchedBooks) {
    const books = searchedBooks.props;

    return (
        <div className="search-books-results">
            <ol className="books-grid">
                <li>
                    <Book book={books} />
                </li>
            </ol>
        </div>
    )
}

export default SearchItemsBody