import React, { useState, useEffect } from 'react'
import './App.css'
import Shelf from './BookShelves'
import Book from './Book'
import { getAll, update, search } from './BooksAPI'
import { updateExpression } from '@babel/types';
import SearchItemsBody from './SearchItemsBody';


export default function BooksApp() {
    const [listOfBooks, setListOfBooks] = useState([]);
    const [showSearchPage, setShowSearchPage] = useState(false);
    const [searchQuery, setSearchQuery] = useState([]);
    const [searchedBooks, setSearchedBooks] = useState([]);


    useEffect(() => {
        getAll()
            .then(data => setListOfBooks(data))
    }, [listOfBooks.length])



    const searchForBooks = (query) => {
        console.log(query);
        debugger
        search(query)
        .then(res => {
            console.log(res);
            debugger;
            (res === '' || res.error || !res) ? console.log('this is where it goes wrong') : setSearchedBooks(res);
        })
        .catch((e) =>{
            console.log('Oopsies, there\'s been an error!', e)})
        }

    const onShelfUpdate = (updatedShelfName, currentBookID) => {
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
                            searchForBooks(e.target.value)
                       }} />
                        </div>
                </div>
                    {/* <SearchItemsBody searchedBooks={searchedBooks}/> */}
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

