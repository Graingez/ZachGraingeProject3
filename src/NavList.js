import { Link } from 'react-router-dom';
const NavList = () => {
    return (
        <nav className='formatNav wrapper'>
            <ul className='formatList'>
                <li className='formatItem'>
                    <Link to="/">Home</Link>
                </li>
                <li className='formatItem'>
                    <Link to="/HardcoverNonfiction">HardcoverNonfiction</Link>
                </li>
                <li className='formatItem'>
                    <Link to="/PictureBooks">Picture Books</Link>
                </li>
                <li className='formatItem'>
                    <Link to="/HardcoverFiction">Hardcover Fiction</Link>
                </li>
                <li className='formatItem'>
                    <Link to="/PaperbackNonfiction">Paperback Nonfiction</Link>
                </li>
                <li className='formatItem'>
                    <Link to="/SeriesBooks">Children's Series</Link>
                </li>
                <li className='formatItem'>
                    <Link to="/ChildrensMiddleGradeHardcover">Childrens Hardcover</Link>
                </li>
                <li className='formatItem'>
                    <Link to="/YoungAdultHardcover">Young Adult</Link>
                </li>
                <li className='formatItem'>
                    <Link to="/TradeFictionPaperback">Trade Fiction</Link>
                </li>
                <li className='formatItem'>
                    <Link to="/GraphicbooksandManga">Graphic Novel/Manga</Link>
                </li>

            </ul>
        </nav>
    )
}
export default NavList