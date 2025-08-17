import React from "react";
import Book from "./Book";
import { Link } from "react-router-dom";

const BookWithLink = ({bookDetail}) => {
    return (
        <Link to={`/book/${bookDetail.id}`}>
            <Book bookDetail={bookDetail}/>
        </Link>
    )
}

function BookList(props) {
    return (
        <div className="bookList">
            {
                props.booksdata.map(data => <BookWithLink key= {data.id} bookDetail= {data}/>)
            }
        </div>
    )
}
export default BookList;