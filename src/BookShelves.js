import React from 'react';
import { existingBooks } from './existingBooks'


function Book({ title, author, style }) {
    let { width, height, backgroundImage } = style;
    console.log(backgroundImage);

    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: {width}, height: {height}, backgroundImage: `${backgroundImage}` }}></div>
                    <div className="book-shelf-changer">
                        <select>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{author}</div>
            </div>
        </li>
    )
}


export default function Shelf() {
    return (
        <div>
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {
                                        existingBooks.map((existingBook) => {
                                            const { title, author, style } = existingBook;
                                            return <Book title={title} author={author} style={style} key={title}/>
                                        })
                                    }
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}