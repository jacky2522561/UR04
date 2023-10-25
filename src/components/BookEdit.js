import { useState } from "react";
const BookEdit = ({book,onSubmit}) =>{
    const [title,setTitle] = useState(book.title);
    const handleInput = (e) =>{
        setTitle(e.target.value);
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        onSubmit(book.id,title);
    }
    return(
        <form className="book-edit" onSubmit={handleSubmit}>
            <label>Title</label>
            <input className="input" value={title} onChange={handleInput}></input>
            <button className="button is-primary">save</button>
        </form>
    )
}

export default BookEdit;