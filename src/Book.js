import React, { useState } from 'react'
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
                        <select value={''} onChange={((e) => {
                            let updatedShelfName = (e.target.value === "My Reads") 
                            ? "currentlyReading" : (e.target.value === "Read")
                            ? "read" : "wantToRead";
                            let currentBookID = e.nativeEvent.path[3].dataset['testid'];
                            onShelfUpdate(updatedShelfName, currentBookID);
                            setOptionsState(e.target.value)
                        })} >
                            <option value="move" disabled>Move to...</option>
                            <option value="My Reads" data-testid="currentlyReading">Currently Reading</option>
                            <option value="To Read" data-testid="wantToRead" selected>Want to Read</option>
                            <option value="Read" data-testid="read">Read</option>
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

