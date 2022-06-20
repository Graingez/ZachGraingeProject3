import { Outlet } from 'react-router-dom';

const PageNotFound = (() => {
    return (
        <section className='noPage wrapper'>
            <h1>404 No Books Found</h1>
            <img src='./assets/404book.png' />
        </section>
    )
})
export default PageNotFound