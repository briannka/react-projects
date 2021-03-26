import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import OpenSearch from './OpenSearch';
import Shelf from './BookShelves'


class BooksApp extends React.Component {
    render() {
        return (
            <div className="app">
                    <div className="search-books">
                        <div className="search-books-bar">
                            <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
                            <div className="search-books-input-wrapper">
                                <input type="text" placeholder="Search by title or author" />
                            </div>
                        </div>
                        <div className="search-books-results">
                            <ol className="books-grid">
                                <Shelf />
                            </ol>
                        </div>
                    </div>
                    <OpenSearch />
               </div>
        )
    }
}


export default BooksApp