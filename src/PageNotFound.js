import { Outlet } from 'react-router-dom';
import errorBook from './assets/404book.png';

const PageNotFound = (() => {
    return (
        <section className='noPage wrapper'>
            <h1 className='errorTitle'>404 No Books Found</h1>
            <img className='errorBook' src={errorBook} />
        </section>
    )
})
export default PageNotFound