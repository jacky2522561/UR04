import BookShow from './BookShow';

const BookList = ({ books, onDelete, onEdit }) => {
    const renderBooks = books.map((book) => {
        return <BookShow  key={book.id} onEdit={onEdit} book={book} onDelete = {onDelete}/>
    })
    return <div className='book-list'>{renderBooks}</div>
}

export default BookList;