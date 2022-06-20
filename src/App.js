import './App.css';
import { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import BookDisplay from './BookDisplay';
import Header from './Header';
import HardcoverNonfiction from './HardcoverNonfiction';
import PictureBooks from './PictureBooks';
import HardcoverFiction from './HardcoverFiction';
import PaperbackNonfiction from './PaperbackNonfiction';
import SeriesBooks from './SeriesBooks';
import ChildrensMiddleGradeHardcover from './ChildrensMiddleGradeHardcover';
import YoungAdultHardcover from './YoungAdultHardcover';
import TradeFictionPaperback from './TradeFictionPaperback';
import GraphicbooksandManga from './GraphicbooksandManga';
import PageNotFound from './PageNotFound';
import NavList from './NavList';

function App() {

  // const [bookFormat, setBookFormat] = useState(null);
  const [bookInfo, setBookInfo] = useState([]);

  const [currentDate, setCurrentDate] = useState('')

  useEffect(() => {
    const date = new Date().getDate();
    const month = new Date().getMonth('en-us', { month: 'long' }) + 1;
    const year = new Date().getFullYear();
    setCurrentDate(month + '/' + date + '/' + year)
    return () => {

    }


  }, [])

  // useEffect(() => {
  //   if (bookFormat) {


  //     axios({
  //       url: `https://api.nytimes.com/svc/books/v3/lists/current/${bookFormat}.json?`,
  //       params: {
  //         'api-key': 'RKgJfQQ1AkA17PlGqvBxfd71EfNG0m4v'
  //       }
  //     }).then((apiData) => {
  //       console.log(apiData.data.results.books)
  //       setBookInfo(apiData.data.results.books)
  //     })
  //   }
  // }, [bookFormat])

  return (
    <div className="App">
      <Header />
      <NavList />
      <Routes>
        <Route path='/' element={<h1>super cool webStore</h1>} />
        <Route path='/HardcoverNonfiction' element={<HardcoverNonfiction />} />
        <Route path='/PictureBooks' element={<PictureBooks />} />
        <Route path='/HardcoverFiction' element={<HardcoverFiction />} />
        <Route path='/PaperbackNonfiction' element={<PaperbackNonfiction />} />
        <Route path='/SeriesBooks' element={<SeriesBooks />} />
        <Route path='/ChildrensMiddleGradeHardcover' element={<ChildrensMiddleGradeHardcover />} />
        <Route path='/YoungAdultHardcover' element={<YoungAdultHardcover />} />
        <Route path='/TradeFictionPaperback' element={<TradeFictionPaperback />} />
        <Route path='/GraphicbooksandManga' element={<GraphicbooksandManga />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      {/* <HardcoverNonfiction /> */}
      {/* <Form handleSubmit={selectBookFormat} /> */}
      {/* <h5>Here is a list of the top {bookInfo.length} best selling {bookFormat} books as of {currentDate}</h5> */}
      {/* <BookDisplay books={bookInfo} format={bookFormat} /> */}
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

