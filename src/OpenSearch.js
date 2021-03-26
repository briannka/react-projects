import React from 'react';


export default function OpenSearch() {
    return (
        <div className="open-search">
            <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
        </div>
    )
}