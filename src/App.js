import React, { useState, useEffect } from 'react'
import './App.css'
import { OpenSearch, DisplaySearchBar } from './OpenSearch';
import Shelf from './BookShelves'
import { getAll, update, search } from './BooksAPI'
import { updateExpression } from '@babel/types';


export default function BooksApp() {
    const [listOfBooks, setListOfBooks] = useState([]);

    const [showSearchPage, setShowSearchPage] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');


    useEffect(() => {
        getAll()
            .then(data => setListOfBooks(data))
    }, [listOfBooks.length])



    useEffect(() => {
        search('Android')
        .then(res => console.log('this is the search() func res', res[0]))
    })
    // useEffect(() => {
    //     onShelfUpdate(updatedShelfName, currentBookID);

    //     console.log('updated Shelf Name', updatedShelfName)
    //     console.log('updated currentBookID', currentBookID)
    //     // update(updatedShelfName, currentBookID)
    //     // .then(res => setListOfBooks(res))
    // }, [])


    const searchResults = searchQuery === '' ? listOfBooks : searchQuery.filter((q) => q.title.toLowerCase().includes(searchQuery.toLowerCase()));
    console.log(typeof searchResults)

    const onShelfUpdate = (updatedShelfName, currentBookID) => {
        console.log(currentBookID, updatedShelfName)
        getAll().then(res => console.log('second getAll fetch', res))

    };

    const shelfNames = [{ id: 'currentlyReading', title: 'My Reads' }, { id: 'wantToRead', title: 'To Read' }, { id: 'read', title: 'Read' }, { id: 'none', title: 'None' }];
    if (listOfBooks.length <= 0) {
        return null
    }

    return (
        <div className="app">
            <div className="search-books">
                <div className="search-books-bar">
                    <button className="close-search" onClick={() => setShowSearchPage({ showSearchPage: true })}>Close</button>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" value={searchQuery} onChange={(e) =>
                            {
                            setSearchQuery(e.target.value);
                        console.log(searchQuery)}} />
                        </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {searchResults.map(r => 
                            console.log(r.title))}
                    </ol>
                </div>
            </div>
            <div>
                <ol className="books-grid">
                    {shelfNames.map(shelf => <Shelf shelfName={shelf.title} onShelfUpdate={onShelfUpdate} books={listOfBooks.filter(book => book.shelf === shelf.id)} />)}
                </ol>
                <div className="open-search">
                    <button onChange={() => {
                        console.log('onChange detected')
                        setShowSearchPage(true)
                    }}>Add a book</button>
                </div>
            </div>
        </div>
    )
}

