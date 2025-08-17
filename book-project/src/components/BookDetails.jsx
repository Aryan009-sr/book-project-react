import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Books } from "../../public/utils/mockdata";
import { useContext } from "react";
import userContext from "../../public/utils/userContext";

function BookDetails() {
    const { id } = useParams();
    const [bookDetails , setBookDetails] = useState(null);
    const contextData = useContext(userContext);

    useEffect(() => {
        const foundBook = Books.find((book) => book.id.toString() === id);
        setBookDetails(foundBook);
    }, [id])

    // display loading message or not found message if the book isn't ready
    if(!bookDetails) {
        return <div>Loading book details or book not found...</div>
    }

    return (
        <div className="book-details-container">
            <h1>Book Details</h1>
            <img src={bookDetails.imageUrl} alt={bookDetails.title} width={'200px'} height={'200px'}/>
            <h2>{bookDetails.title}</h2>
            <h3>By : {bookDetails.author}</h3>
            <p>{bookDetails.description}</p>
            <p>Rating: {bookDetails.rating}</p>
            <p>Active: {contextData.loggedInUser}</p>
        </div>
    )
}
export default BookDetails;