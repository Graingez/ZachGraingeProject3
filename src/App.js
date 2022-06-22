import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
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
import Footer from './Footer';

function App() {

  const [currentDate, setCurrentDate] = useState('')

  useEffect(() => {
    const date = new Date().getDate();
    const month = new Date().getMonth('en-us', { month: 'long' }) + 1;
    const year = new Date().getFullYear();
    setCurrentDate(month + '/' + date + '/' + year)
    return () => {

    }


  }, [])
  // to be implemented in the future
  // const [bookFormat, setBookFormat] = useState(null);
  // const [bookInfo, setBookInfo] = useState([]);

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
        <Route path='/' element={<h1 className='findBookLabel'>Select A Format to find some Books!</h1>} />
        <Route path='/HardcoverNonfiction' element={<HardcoverNonfiction date={currentDate} />} />
        <Route path='/PictureBooks' element={<PictureBooks date={currentDate} />} />
        <Route path='/HardcoverFiction' element={<HardcoverFiction date={currentDate} />} />
        <Route path='/PaperbackNonfiction' element={<PaperbackNonfiction date={currentDate} />} />
        <Route path='/SeriesBooks' element={<SeriesBooks date={currentDate} />} />
        <Route path='/ChildrensMiddleGradeHardcover' element={<ChildrensMiddleGradeHardcover date={currentDate} />} />
        <Route path='/YoungAdultHardcover' element={<YoungAdultHardcover date={currentDate} />} />
        <Route path='/TradeFictionPaperback' element={<TradeFictionPaperback date={currentDate} />} />
        <Route path='/GraphicbooksandManga' element={<GraphicbooksandManga date={currentDate} />} />
        <Route path='*' element={<PageNotFound date={currentDate} />} />
      </Routes>
      <Footer />
      {/* <HardcoverNonfiction /> */}
      {/* <Form handleSubmit={selectBookFormat} /> */}
      {/* <h5>Here is a list of the top {bookInfo.length} best selling {bookFormat} books as of {currentDate}</h5> */}
      {/* <BookDisplay books={bookInfo} format={bookFormat} /> */}
    </div>
  );
}

export default App;


