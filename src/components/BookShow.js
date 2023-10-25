import { useState } from "react";
import BookEdit from './BookEdit';
const BookShow = ({ book, onDelete,onEdit }) => {
    const [editState,setEditState] = useState(false);
    const handleEdit = ()=>{
        setEditState(!editState);
    }
    const handleDelete = () =>{
        onDelete(book.id);
    }
    const handleEditFormShow = (id,newTitle) =>{
        setEditState(false);
        onEdit(id,newTitle);
    }
    let content = <h3>{book.title}</h3>
    if(editState){
        content = <BookEdit onSubmit={handleEditFormShow} book = {book} />
    } 
    return (
        <div className="book-show">
            <div>{content}</div>
            <img alt="pic" src={`https://picsum.photos/seed/${book.id}/300/200`}/>
            <div className="actions">
                <button className="edit" onClick={handleEdit}>
                    Edit
                </button>
                <button className="delete" onClick={handleDelete}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default BookShow;