import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Form from './Form';
import BookDisplay from './BookDisplay';
import Header from './Header';

function App() {

  const [bookFormat, setBookFormat] = useState(null);
  const [bookInfo, setBookInfo] = useState([]);

  useEffect(() => {
    if (bookFormat) {


      axios({
        url: `https://api.nytimes.com/svc/books/v3/lists/current/${bookFormat}.json?`,
        params: {
          'api-key': 'RKgJfQQ1AkA17PlGqvBxfd71EfNG0m4v'
        }
      }).then((apiData) => {
        console.log(apiData.data.results.books)
        setBookInfo(apiData.data.results.books)
      })
    }
  }, [bookFormat])

  const selectBookFormat = function (e, format) {
    e.preventDefault()
    setBookFormat(format)
  }
  return (
    <div className="App">
      <Header />
      <Form handleSubmit={selectBookFormat} />
      <BookDisplay books={bookInfo} format={bookFormat} />
    </div>
  );
}

export default App;


// psudo code
// Connect to api and pull the ney york times best selling book list
// have a search option so the user can get a list of their selected book format
// take the selected format and have from.js send it up to app.js
// app.js will then fetch the api data with the new end point
// app.js will then send the APIdata down to BookDisplay.js where the book list will be displayed on page
// will include: book image, book title ,author name,book release date, time book has been on list, link to buy the book
// 
// stretch goals//
  // add a ways to favorite a book and have a favorited book list

