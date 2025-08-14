import React from "react";
import Book from "./Book";
function BookList(props) {
    return (
        <div className="bookList">
            {
                props.booksdata.map(data => <Book bookDetail= {data}/>)
            }
        </div>
    )
}
export default BookList;