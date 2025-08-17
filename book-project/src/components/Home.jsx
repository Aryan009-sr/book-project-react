import React, { useState } from "react";
import { Link } from 'react-router-dom'
import BookList from './BookList';
import {Books} from './../../public/utils/mockdata';

function Home() {
    const [searchText, setSearchText] = useState('');
    const [filteredBooks, setFilteredBooks] = useState(Books);

    function handleSearchChange(e){
        const value = e.target.value;
        setSearchText(value);
        const filtered = Books.filter(book => book.title.toLowerCase().includes(value.toLowerCase())
    );
        setFilteredBooks(filtered);
    }


    return (
        <div className="home-container">
            <div className="search">
                <input
                    className="input-text"
                    type="text"
                    placeholder="search here..."
                    value={searchText}
                    onChange={handleSearchChange}
                />
            </div>
            <BookList booksdata={filteredBooks}/>
        </div>
    )
}
export default Home;