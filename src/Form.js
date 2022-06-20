import { useState, useEvent } from "react";
const Form = (props) => {

    const [selectValue, setSelectValue] = useState('placeholder');

    const handleChange = (e) => {
        setSelectValue(e.target.value);
    }

    return (
        <form onSubmit={(e) => {
            props.handleSubmit(e, selectValue)
        }}>
            <label htmlFor="bookFormat">Select a Book Format:</label>
            <select name="" id="bookFormat" onChange={handleChange} value={selectValue}>
                <option value="placeholder" disabled> Book Format</option>
                <option value="hardcover-fiction">Hardcover Fiction</option>
                <option value="picture-books">Picture Books</option>
                <option value="hardcover-nonfiction">Hardcover Nonfiction</option>
                <option value="paperback-nonfiction">Paperback Nonfiction</option>
                <option value="series-books">Children's Series</option>
                <option value="childrens-middle-grade-hardcover">Childrens Hardcover</option>
                <option value="young-adult-hardcover">Young Adult</option>
                <option value="trade-fiction-paperback">Trade Fiction</option>
                <option value="graphic-books-and-manga">Graphic Novel/Manga</option>
                {/* <option value="audio-fiction">Audio Fiction</option>
                <option value="audio-nonfiction">Audio Nonfiction</option> */}

            </select>
            <button>Books</button>
        </form>
    )

}

export default Form