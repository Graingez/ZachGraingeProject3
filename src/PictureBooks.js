import axios from 'axios'
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';


const PictureBooks = () => {

    const [currentDate, setCurrentDate] = useState('')

    useEffect(() => {
        const date = new Date().getDate();
        const month = new Date().getMonth('en-us', { month: 'long' }) + 1;
        const year = new Date().getFullYear();
        setCurrentDate(month + '/' + date + '/' + year)
        return () => {

        }


    }, [])

    const [bookInfo, setBookInfo] = useState([]);
    useEffect(() => {
        axios({
            url: `https://api.nytimes.com/svc/books/v3/lists/current/picture-books.json?`,
            params: {
                'api-key': 'RKgJfQQ1AkA17PlGqvBxfd71EfNG0m4v'
            }
        }).then((apiData) => {
            console.log(apiData.data.results.books)
            setBookInfo(apiData.data.results.books)
        })
    }, [])


    return (
        <section className="BookShelf wrapper">
            <h5>Here is a list of the top {bookInfo.length} best selling Picture Books as of {currentDate}</h5>
            <section className="returnedBooks wrapper">
                {
                    bookInfo.map((book) => {
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
        </section>
    )






}

export default PictureBooks