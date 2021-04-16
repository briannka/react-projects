import React from 'react';
import Book from './Book'


export default function Shelf({ shelfName, books, onShelfUpdate }) {


    const mapBook = (apiBook) => {
        const mappedBook = {
            title: apiBook.title,
            author: apiBook.authors[0],
            id: apiBook.id,
            style: {
                width: 250,
                height: 220,
                backgroundImage: apiBook.imageLinks.thumbnail
            },
            shelfLocation: apiBook.shelf,
            onShelfUpdate: onShelfUpdate
        }
        return mappedBook;
    }


    const booksList = books.map(book => mapBook(book));
    console.log('bookList', booksList)

    return (
        <div>
            <div>
                <div className="list-books">
                    <div className="list-books-title">
                    </div>
                    <div className="list-books-content">
                        <div>
                            <div className="bookshelf">
                                <h1 className="bookshelf-title">{shelfName}</h1>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                        {booksList.map(book => <Book book={book} />)}
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}