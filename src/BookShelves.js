import React from 'react';

function Book({ title, author, style, index, shelfLocation, onCategoryChange }) {
    let { width, height, backgroundImage } = style;

    return (
        <li>
            <div className="book" key={index} shelflocation={shelfLocation}>
                <div className="book-top">
                    <div className="book-cover" style={{ width: {width}, height: {height}, backgroundImage: `url${backgroundImage}` }}></div>
                    <div className="book-shelf-changer">
                        <select onChange={((e) => {onCategoryChange(e)})}>
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
};


export default function Shelf({ bookItems }) {
    const filteredItems = (shelfName) => {
        const bookDrillDown = bookItems.filter((bookItem) => bookItem.shelfLocation === shelfName);

        return bookDrillDown.map((individualBook, index) => {
            const { shelfLocation, title, author, style } = individualBook;
            console.log(individualBook);
            return <Book title={title} author={author} style={style} key={index} shelfLocation={shelfLocation} />
            })
    }

    return (
        <div>
        <div>
            <div className="list-books">
                <div className="list-books-title">
                </div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h1 className="bookshelf-title">My Reads</h1>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                       {filteredItems("My Reads")}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
        <div className="list-books">
            <div className="list-books-title">
            </div>
            <div className="list-books-content">
                <div>
                    <div className="bookshelf">
                        <h1 className="bookshelf-title">To Read</h1>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                            {filteredItems("To Read")}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div>
    <div className="list-books">
        <div className="list-books-title">
        </div>
        <div className="list-books-content">
            <div>
                <div className="bookshelf">
                    <h1 className="bookshelf-title">Read</h1>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                             {filteredItems("Read")}
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