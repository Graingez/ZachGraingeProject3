import React, { useState, useEffect } from "react";
const BookDisplay = (props) => {

    console.log(props.books.length);

    const [currentDate, setCurrentDate] = useState('')

    useEffect(() => {
        const date = new Date().getDate();
        const month = new Date().getMonth() + 1;

        const year = new Date().getFullYear();
        setCurrentDate(month + '/' + date + '/' + year)
        return () => {

        }


    }, [])

    return (
        <>
            <section className="BookShelf wrapper">
                {
                    props.books.length == 0
                        ? (
                            <section className="noBooks wrapper">
                                <h1>please pick a format</h1>
                            </section>
                        ) : (
                            <>
                                <h5>Here is a list of the top {props.books.length} best sellers as of {currentDate}</h5>
                                <section className="returnedBooks wrapper">
                                    {
                                        props.books.map((book) => {
                                            return ((

                                                <div className="bookBox" key={book.primary_isbn10}>
                                                    <div className="bookImage">
                                                        <div className="bookRank">
                                                            <h4 className="rank">{book.rank}</h4>
                                                        </div>
                                                        <img src={book.book_image} alt={book.title}></img>
                                                        <div className="bookInfo">
                                                            <h2>{book.title}</h2>
                                                            <h3> <span className="author">Author:</span>{book.author}</h3>
                                                            <p>{book.description}</p>
                                                            <a href={book.amazon_product_url} target='_blank'>Buy Now!</a>
                                                        </div>
                                                    </div>
                                                </div>

                                            ))
                                        })
                                    }
                                </section>
                            </>
                        )
                }
            </section>
        </>
    )




}

export default BookDisplay