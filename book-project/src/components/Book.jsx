import React from "react";
import "./style.css"


function Book(props) {
    return (
        <div className="book-card">
            <img src={props.bookDetail.imageUrl} 
            alt="Cover-Image" 
            height={"200px"} 
            width={'200px'} 
            className="book-cover"
            />
            <div>
                <h2 className="book-title">{props.bookDetail.title}</h2>
                <p className="book-author">{props.bookDetail.author}</p>
                <p className="book-description">{props.bookDetail.description}</p>
            </div>
        </div>
    )
}

export default Book;