import React from 'react'
import { update } from './BooksAPI'


export default function Book(bookProps) {
    let { title, author, style, id, shelfLocation, onShelfUpdate } = bookProps.book;
    let { width, height, backgroundImage } = style;

    return (
        <li>
            <div className="book" key={id} data-testid={id} shelflocation={shelfLocation}>
                <div className="book-top">
                    <div className="book-cover" style={{ width, height, backgroundImage: `url(${backgroundImage})` }}></div>
                    <div className="book-shelf-changer">
                        <select onChange={((e) => {
                            console.log(e)
                            let updatedShelfName = e.target.value;
                            let currentBookID = e.nativeEvent.path[3].dataset['testid'];
                            onShelfUpdate(updatedShelfName, currentBookID)
                        })} >
                            <option value="move" disabled>Move to...</option>
                            <option value="My Reads">Currently Reading</option>
                            <option value="To Read">Want to Read</option>
                            <option value="Read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{author}</div>
            </div>
        </li>
    )
};

