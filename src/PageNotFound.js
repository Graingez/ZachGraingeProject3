
import errorBook from './assets/404book.png';

const PageNotFound = (() => {
    return (
        <section className='noPage wrapper'>
            <h1 className='errorTitle'>404 No Books Found</h1>
            <img className='errorBook' src={errorBook} alt='Error Book' />
        </section>
    )
})
export default PageNotFound