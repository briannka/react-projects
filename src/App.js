import React, { useState, useEffect } from 'react'
import './App.css'
import { OpenSearch, DisplaySearchBar } from './OpenSearch';
import Shelf from './BookShelves'
import { getAll, update, search } from './BooksAPI'
import { updateExpression } from '@babel/types';


export default function BooksApp() {
    const [listOfBooks, setListOfBooks] = useState([]);

    const [showSearchPage, setShowSearchPage] = useState(false);
    const [searchQuery, setSearchQuery] = useState(['']);
    const[optionsState, setOptionsState] = useState('');


    useEffect(() => {
        getAll()
            .then(data => setListOfBooks(data))
    }, [listOfBooks.length])



    const searchForBooks = (r) => {
        console.log(r)
        search(r)
        .then(res => {
            debugger;
            setListOfBooks(res)
        })
        .then(r => console.log(r))
    }

    // const searchResults = searchQuery === '' ? listOfBooks : listOfBooks.filter(book => console.log(book.title.toLowerCase().includes(searchQuery)));
    
    const onShelfUpdate = (updatedShelfName, currentBookID) => {
        // console.log(currentBookID, updatedShelfName)
        update(currentBookID, updatedShelfName)
        .then(() => getAll().then(res => setListOfBooks(res))
        )
    };

    const shelfNames = [{ id: 'currentlyReading', title: 'My Reads' }, { id: 'wantToRead', title: 'To Read' }, { id: 'read', title: 'Read' }];
    if (listOfBooks.length <= 0) {
        return null
    }

    return (
        <div className="app">
            {showSearchPage === true && (<div className="search-books">
                <div className="search-books-bar">
                    <button className="close-search" onClick={() => 
                        setShowSearchPage(false)}>Close</button>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" onChange={(e) =>
                            {
                            // setSearchQuery(e.target.value);
                            searchForBooks(e.target.value)
                            
                       }} />
                        </div>
                </div>
                {/* <div className="search-books-results">
                    <ol className="books-grid">
                        {searchResults.map(r => 
                            console.log(r))}
                    </ol>
                </div> */}
            </div>)}
            {showSearchPage === false && (<div>
                <ol className="books-grid">
                    {shelfNames.map(shelf => <Shelf shelfName={shelf.title} onShelfUpdate={onShelfUpdate} books={listOfBooks.filter(book => book.shelf === shelf.id)} />)}
                </ol>
                <div className="open-search">
                    <button onClick={() => 
                        setShowSearchPage(true)
                    }>Add a book</button>
                </div>
            </div>)}
        </div>
    )
}

