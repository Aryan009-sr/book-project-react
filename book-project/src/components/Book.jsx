import React from "react";
import "./style.css"
import userContext from "../../public/utils/userContext";
import { useContext } from "react";

function Book(props) {
    const contextData = useContext(userContext);
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
                <p className="book-description">Active user: {contextData.loggedInUser}</p>
            </div>
        </div>
    )
}

export default Book;