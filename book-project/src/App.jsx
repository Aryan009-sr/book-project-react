import React, { useState } from "react";
import BookList from "./components/BookList";
import { Books } from "../public/utils/mockdata";



function App() {
  const [searchText, setSearchText] = useState('');
  const [filteredbooks, setFilteredbooks] = useState(Books);

  function handleSearch() {
    const filterBooks = Books.filter((book) => 
    book.title.toLowerCase().includes(searchText.toLowerCase())
  );
  setFilteredbooks(filterBooks);
  }
  
  return (
    <div className="app-class">
      <h1 className="header">Book management App</h1>
      <div className="search">
        <input className="input-text" 
        type="text" 
        placeholder="search your fav book..." 
        onChange={(e) => setSearchText(e.target.value)}
        />
        <button 
        onClick={handleSearch}
        className="button-input">
          Search
          </button>
      </div>
      <BookList  booksdata = {filteredbooks}/>
    </div>
  )
}
export default App;